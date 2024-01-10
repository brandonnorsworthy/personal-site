"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HomeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Object3D>(); // Ref to hold the model

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const loader = new GLTFLoader();
    loader.load(
      '/models/laptop.glb',
      (gltf) => {
        modelRef.current = gltf.scene;
        scene.add(gltf.scene);
      },
      (error) => {
        console.error('An error happened while loading the model', error);
      }
    );

    scene.background = new THREE.Color(0xffffff);

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientlight);

    const light = new THREE.PointLight(0xffffff, 1000);
    light.position.set(10, 10, 10);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.x += 0.001;
        modelRef.current.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full fixed top-0 left-0 z-[-1]"></div>;
};

export default HomeScene;