import { Update } from "../traits";
import FrameInfo from "./FrameInfo";
import Renderer from "./Renderer";

export class DebugOverlay implements Update<FrameInfo> {
    private readonly renderer: Renderer;
    private readonly div: HTMLDivElement;
    private readonly fps: HTMLParagraphElement;
    private readonly frame: HTMLParagraphElement;
    private readonly header: HTMLHeadElement

    show(show: boolean): void {
        this.div.hidden = !show;
    }

    constructor(renderer: Renderer) {

        this.renderer = renderer;

        this.header = DebugOverlay.h('debug-header', 'X3 debug info');
        this.fps = DebugOverlay.p('debug-text', 'FPS:');
        this.frame = DebugOverlay.p('debug-text', 'frame:');

        this.div = DebugOverlay.div(
            'debug-overlay',
            this.header,
            this.fps,
            this.frame);

        this.div.hidden = true;
    }

    static div(cssClass: string, ...children: HTMLElement[]): HTMLDivElement {
        let div = DebugOverlay.html('div', cssClass, undefined) as HTMLDivElement;
        children.forEach(element => {
            div.appendChild(element);
        });
        return div;
    }

    static p(cssClass: string, text: string): HTMLParagraphElement {
        let result = DebugOverlay.html('p', cssClass, undefined) as HTMLParagraphElement;
        result.textContent = text;
        return result;
    }

    static h(cssClass: string, text: string): HTMLHeadElement {
        let result = DebugOverlay.html('h', cssClass, undefined) as HTMLParagraphElement;
        result.textContent = text;
        return result;
    }

    static html(type: string, cssClass: string, id?: string) {
        let elem = document.createElement(type);
        elem.className = cssClass;

        if (id) {
            elem.id = id;
        }
        return elem;
    }

    domElement(): HTMLElement {
        return this.div;
    }

    update(info: FrameInfo): void {
        this.frame.innerText = `frame: ${info.frame}`
        this.fps.innerText = `FPS: ${Math.floor(1000 / info.elapsed)} FPS`;
    }
}