/**
 * An object that can be written into.
 */
export interface TextSink {
    /**
     * Write the specified text into the sink.
     * 
     * @param {string} text the text to write.
     */
    write(text: string): void;
}

/**
 * Trait for objects that can have a textual
 * representation for debugging purposes.
 */
export interface Debug {
    /**
     *
     * Formats the value using the given sink.
     *
     * @param sink the sink to write the textual
     * representation of the object.
     */
    fmt(sink: TextSink): void;
}

/**
 * Traits for objects that can be periodically updated.
 *
 * @type {T} T the update payload
 */
export interface Update<T> {
    update(info: T): void;
}
