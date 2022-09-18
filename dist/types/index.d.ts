/// <reference types="node" />
/// <reference types="node" />
import * as fs from "fs";
declare class ShareFont {
    [x: string]: any;
    constructor(id: string, name: string, path: fs.PathLike);
}
declare type ShareFontProperties = ShareFont;
interface ShareProperties {
    tagline?: string;
    titleFont?: ShareFontProperties;
    taglineFont?: ShareFontProperties;
    titleColor?: string;
    taglineColor?: string;
    imageWidth?: number;
    imageHeight?: number;
    textAreaWidth?: number;
    textLeftOffset?: number;
    titleBottomOffset?: number;
    titleGravity?: number;
    taglineGravity?: number;
    textColor?: string;
    titleFontSize?: string;
    taglineFontSize?: string;
}
interface outputOptions {
    type: "base64" | "buffer" | "datauri" | "file";
    options?: {
        file: {
            path: fs.PathLike;
        };
    };
}
declare function generateImage(src: string | Buffer, title: string, output?: outputOptions, props?: ShareProperties): string | Buffer | void;
export { generateImage, ShareFont };
