import Renderer from "./gfx/Renderer";
import FrameInfo from "./gfx/FrameInfo";
import { DebugOverlay } from "./gfx/DebugOverlay";
import * as THREE from 'three';

/**
 * The {@link X3} is the entry point of the X3 engine.
 */
export default class X3 {
    public readonly renderer: Renderer;
    public readonly domElement: HTMLDivElement;

    private readonly debugOverlay: DebugOverlay;

    private lastframe: number;
    private frameCount: number = -1;

    private showDebugOverlay: boolean = false;

    enableDebugOverlay(show: boolean): void {
        this.debugOverlay.show(show);
        this.showDebugOverlay = show;
    }

    private constructor(
        renderer: Renderer,
        debugOverlay: DebugOverlay
    ) {
        this.renderer = renderer;
        this.lastframe = -1;
        this.frameCount = 1;
        this.debugOverlay = debugOverlay;
        this.domElement = document.createElement('div');
        this.domElement.id = 'X3';
        this.domElement.appendChild(this.debugOverlay.domElement());
        this.domElement.appendChild(this.renderer.domElement());
    }

    /**
     * Creates a new X3 context on the specified canvas.
     *
     * @returns {X3} an initialized context
     */
    static create(): X3 {
        const renderer = new Renderer();

        const debugOverlay = new DebugOverlay(renderer);

        const result = new X3(
            renderer,
            debugOverlay);

        return result;
    }

    start(): void {
        this.lastframe = Date.now();
    }

    buildFrameInfo(): FrameInfo {
        this.frameCount++;
        const now = Date.now();
        const elapsed = now - this.lastframe;
        this.lastframe = now;
        const frameInfo = new FrameInfo(this.frameCount, now, elapsed);
        return frameInfo;
    }

    update(ts: DOMHighResTimeStamp): void {
        const frameInfo = this.buildFrameInfo();

        if (this.showDebugOverlay) {
            this.debugOverlay.update(frameInfo);
        }
        this.renderer.update(frameInfo);
    }

    loadGltf(url :string): void {
        this.renderer.loadGltf(url);
    }
}
