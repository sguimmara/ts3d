/**
 * Contains information about a frame.
 */
export default class FrameInfo {

    /**
     *  The current time, in milliseconds since the [unix epoch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now);
     */
     public readonly now: number;

    /**
     *  The elapsed time in milliseconds since
     *  the beginning of the previous frame.
     */
    public readonly elapsed: number;

    /**
     * The index of this frame.
     */
     public readonly frame: number;

    constructor(frame: number, now: number, elapsed: number) {
        this.now = now;
        this.elapsed = elapsed;
        this.frame = frame;
    }
}