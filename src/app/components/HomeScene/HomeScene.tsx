"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import routeObjectModels, { routeObjectModelTypes } from "../../data/routeObjectModels";

const HomeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountRefCurrent = mountRef.current;

    // set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // set up lighting
    const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientlight);

    const light = new THREE.PointLight(0xffffff, 1000);
    light.position.set(10, 10, 10);
    scene.add(light);

    // load models
    const loadModel = (model: routeObjectModelTypes): Promise<{ sceneObject: THREE.Object3D, dataObject: routeObjectModelTypes }> => {
      return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
          `/models/${model.path}`,
          (gltf) => {
            scene.add(gltf.scene);
            resolve({ sceneObject: gltf.scene, dataObject: model });
          },
          undefined,
          (error) => {
            console.error(`An error happened while loading the model... ${model.name}`, error);
            reject(error);
          }
        );
      });
    };

    Promise.all(routeObjectModels.map(loadModel)).then(initializedModels => {
      // set up animation
      const animate = () => {
        requestAnimationFrame(animate);

        for (const { sceneObject, dataObject } of initializedModels) {
          const taggedDiv = document.querySelector(`[data-model="${dataObject.name}"]`);
          if (taggedDiv) {
            const { x, y } = taggedDiv.getBoundingClientRect();
            sceneObject.position.x = x / 200;
            sceneObject.position.y = y / 200;
          }

          sceneObject.rotation.x += 0.001;
          sceneObject.rotation.y += 0.001;
        }

        renderer.render(scene, camera);
      };
      animate();
    });

    // set up resizing
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRefCurrent) mountRefCurrent.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full fixed top-0 left-0 z-[-1]"></div>;
};

export default HomeScene;