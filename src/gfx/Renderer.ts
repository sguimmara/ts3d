import FrameInfo from "./FrameInfo";
import { Update } from "../traits";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect';

export default class Renderer implements Update<FrameInfo> {
    private readonly threeRenderer: THREE.WebGLRenderer;
    private readonly scene: THREE.Scene;
    private readonly camera: THREE.Camera;

    constructor() {
        this.threeRenderer = new THREE.WebGLRenderer();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.initialize();
    }

    domElement(): HTMLCanvasElement { return this.threeRenderer.domElement; }

    initialize(): void {
        this.threeRenderer.setSize(window.innerWidth, window.innerHeight);

        const light = new THREE.DirectionalLight(new THREE.Color('azure'));
        const ambient = new THREE.AmbientLight(new THREE.Color('aliceblue'), 0.5);
        this.camera.position.z = 2;
        this.camera.position.y = -0.2;
        const effect = new OutlineEffect(this.threeRenderer);

        const controls = new OrbitControls(this.camera, this.threeRenderer.domElement);
        this.scene.add(light);
        this.scene.add(ambient);
        this.scene.background = new THREE.Color('black');

        const renderer = this.threeRenderer;
    }

    update(info: FrameInfo): void {

        this.render();
    }

    render(): void {
        this.threeRenderer.render(this.scene, this.camera);
    }

    loadGltf(url: string) {
        const loader = new GLTFLoader();

        const scene = this.scene;

        loader.load(url, function (gltf) {

            gltf.scene.name = 'helmet';
            scene.add(gltf.scene);

        }, undefined, function (error) {

            console.error(error);
        });
    }
}