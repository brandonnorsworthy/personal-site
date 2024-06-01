"use client";

import React, { useRef, useEffect, useState } from "react";
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
    const lightColor = 0xFFFFFF;

    const ambientlight = new THREE.AmbientLight(lightColor, 10);
    scene.add(ambientlight);

    const light = new THREE.PointLight(lightColor, 1000);
    light.position.set(10, 10, 10);
    scene.add(light);

    // load models
    const loadModel = (model: routeObjectModelTypes): Promise<{ sceneObject: THREE.Object3D, dataObject: routeObjectModelTypes }> => {
      return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
          `/models/${model.path}`,
          (gltf) => {
            gltf.scene.rotateX(Math.random() * 90);
            gltf.scene.rotateY(Math.random() * 90);

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
      const animate = () => {
        requestAnimationFrame(animate);

        for (const { sceneObject, dataObject } of initializedModels) {
          const taggedDiv = document.querySelector(`[data-model="${dataObject.name}"]`);
          if (taggedDiv) {
            const canvas = renderer.domElement;
            const container = taggedDiv.getBoundingClientRect();
            const containerPosition = { isXPositive: false, isYPositive: false };
            const maxWorldPositions = { x: window.innerWidth / 180, y: window.innerHeight / 180 };

            // define the canvas quadrants
            const canvasWidth = canvas.clientWidth;
            const canvasHeight = canvas.clientHeight;
            const canvasMidpoint = { x: 0, y: 0 };
            canvasMidpoint.x = canvasWidth / 2;
            canvasMidpoint.y = canvasHeight / 2;

            // find what quandrant the tagged container is in
            // positiveX = containerPosition is more than canvasMidpoint
            containerPosition.isXPositive = container.x > canvasMidpoint.x;
            // positiveY = containerPosition is more than canvasMidpoint
            containerPosition.isYPositive = container.y < canvasMidpoint.y;

            // the center of the tagged container
            const distanceFromMidpoint = { x: 0, y: 0 };
            distanceFromMidpoint.x = (container.x) + (container.width / 2);
            distanceFromMidpoint.y = (container.y) + (container.height / 2);

            if (containerPosition.isXPositive && containerPosition.isYPositive) {
              // quadrant 1
              distanceFromMidpoint.x = distanceFromMidpoint.x - canvasMidpoint.x;
              distanceFromMidpoint.y = canvasMidpoint.y - distanceFromMidpoint.y;
            } else if (!containerPosition.isXPositive && containerPosition.isYPositive) {
              // quadrant 2
              distanceFromMidpoint.x = canvasMidpoint.x - distanceFromMidpoint.x;
              distanceFromMidpoint.y = canvasMidpoint.y - distanceFromMidpoint.y;
            } else if (!containerPosition.isXPositive && !containerPosition.isYPositive) {
              // quadrant 3
              distanceFromMidpoint.x = canvasMidpoint.x - distanceFromMidpoint.x;
              distanceFromMidpoint.y = distanceFromMidpoint.y - canvasMidpoint.y;
            } else if (!containerPosition.isXPositive && !containerPosition.isYPositive) {
              // quadrant 4
              distanceFromMidpoint.x = distanceFromMidpoint.x - canvasMidpoint.x;
              distanceFromMidpoint.y = distanceFromMidpoint.y - canvasMidpoint.y;
            }

            // take the center location and find the percent of x or y in the quandrant
            const percentTranslated = { x: 0, y: 0 };
            percentTranslated.x = distanceFromMidpoint.x / canvasMidpoint.x;
            percentTranslated.y = distanceFromMidpoint.y / canvasMidpoint.y;

            // take the percent translated and multiply it by the 3d world max x
            const worldPosition = { x: 0, y: 0 };
            worldPosition.x = percentTranslated.x * maxWorldPositions.x;
            worldPosition.y = percentTranslated.y * maxWorldPositions.y;

            // set the position of the model
            if (containerPosition.isXPositive && containerPosition.isYPositive) {
              // quadrant 1
              sceneObject.position.x = worldPosition.x;
              sceneObject.position.y = worldPosition.y;
            } else if (!containerPosition.isXPositive && containerPosition.isYPositive) {
              // quadrant 2
              sceneObject.position.x = -worldPosition.x;
              sceneObject.position.y = worldPosition.y;
            } else if (!containerPosition.isXPositive && !containerPosition.isYPositive) {
              // quadrant 3
              sceneObject.position.x = -worldPosition.x;
              sceneObject.position.y = -worldPosition.y;
            } else if (!containerPosition.isXPositive && !containerPosition.isYPositive) {
              // quadrant 4
              sceneObject.position.x = worldPosition.x;
              sceneObject.position.y = -worldPosition.y;
            }
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

  return <div
    ref={mountRef}
    className="w-full h-full fixed top-0 left-0 z-[-1]">
  </div>;
};

export default HomeScene;