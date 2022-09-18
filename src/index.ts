import * as fs from "fs";
import * as path from "path";
import * as Canvas from 'canvas';

let { registerFont } = Canvas;

class ShareFont {
    [x: string]: any;
    constructor (id: string, name: string, path: fs.PathLike) {
        let options = {
            id: id,
            name: name,
            path: path,
            ShareFontOptions: {
                engine: "ShareImage.FontEngine",
                version: "v2.0.0"
            }
        }
        return options;
    }
}

type ShareFontProperties = ShareFont;

interface ShareProperties {
    tagline?: string,
    titleFont?: ShareFontProperties,
    taglineFont?: ShareFontProperties,
    titleColor?: string,
    taglineColor?: string,
    imageWidth?: number,
    imageHeight?: number,
    textAreaWidth?: number,
    textLeftOffset?: number,
    titleBottomOffset?: number,
    titleGravity?: number,
    taglineGravity?: number,
    textColor?: string,
    titleFontSize?: string,
    taglineFontSize?: string
}

interface outputOptions {
    type: "base64" | "buffer" | "datauri" | "file",
    options?: {
        file: {
            path: fs.PathLike
        }
    }
}

let sirinStencil = new ShareFont("sirin-stencil", "Sirin Stencil", path.join(__dirname, "assets", "fonts", "sirin-stencil.ttf"));
let arial = new ShareFont("arial", "Arial", path.join(__dirname, "assets", "fonts", "arial.ttf"));

let defaultOptions: ShareProperties = {
    tagline: "",
    titleFont: sirinStencil,
    taglineFont: arial,
    titleColor: "",
    imageWidth: 1280,
    imageHeight: 669,
    textLeftOffset: 480,
    titleBottomOffset: 254,
    textColor: "000000",
    titleFontSize: "64px",
    taglineFontSize: "48px"
}

type returnOptions = string | Buffer | void;

/**
 * @function
 * @name ShareImage#generateImage
 * @param {string} src - The Source file. Can be `Buffer`, `dataURI` or `URL`.
 * @param {string} title - The Title of the ShareImage.
 * @param {string} output - The output format of the Image.
 * @param {ShareProperties} props - Additional properties of the Image.
 * @return {returnOptions} Base64 URI, Data URI or Buffer. You can also save the file (returns nothing). Depends on `output` param.
 */

function generateImage(src: string | Buffer, title: string, output: outputOptions = { type: "base64" }, props: ShareProperties = defaultOptions): string | Buffer | void {
    let _src = src;
    let _title = title;
    let _output = output;
    let {
        tagline = "",
        titleFont = sirinStencil,
        taglineFont = arial,
        titleColor = "",
        taglineColor,
        imageWidth = 1280,
        imageHeight = 669,
        textAreaWidth,
        textLeftOffset = 480,
        titleBottomOffset = 254,
        titleGravity,
        taglineGravity,
        textColor = "000000",
        titleFontSize = "64px",
        taglineFontSize = "48px"
    } = props;

    var
        _tagline = tagline,
        _titleFont = titleFont,
        _taglineFont = taglineFont,
        _titleColor = titleColor,
        _taglineColor = taglineColor,
        _imageWidth = imageWidth,
        _imageHeight = imageHeight,
        _textAreaWidth = textAreaWidth,
        _textLeftOffset = textLeftOffset,
        _titleBottomOffset = titleBottomOffset,
        _titleGravity = titleGravity,
        _taglineGravity = taglineGravity,
        _textColor = textColor,
        _titleFontSize = titleFontSize,
        _taglineFontSize = taglineFontSize;

    let img = new Canvas.Image();
    img.src = _src;
    img.onload = () => {
        registerFont((_titleFont.path as string), { family: _titleFont.name });
        registerFont((_taglineFont.path as string), {family: _taglineFont.name});
        let canvas = Canvas.createCanvas(1280, 669);
        let ctx = canvas.getContext("2d");
        ctx.font = `${_titleFontSize} ${_titleFont.name}`
        ctx.drawImage(img, 0, 0);
        ctx.fillText(_title, _textLeftOffset, _titleBottomOffset);
        ctx.font = `${_taglineFontSize} ${_taglineFont.name}`
        ctx.fillText(_tagline, _textLeftOffset, 320)
        if (output.type === "file") {
          let out = fs.createWriteStream(output.options.file.path);
          let stream = canvas.createPNGStream();
          stream.pipe(out);
          out.on("finish", () => {
              return;
          });
          return;
        } else if (output.type == "base64") {
          let buf: Buffer = canvas.toBuffer("image/png");
          let b64: string = buf.toString("base64");
          return b64;
        } else if (output.type == "datauri") {
          let url: string = canvas.toDataURL();
          return url;
        } else if (output.type == "buffer") {
          let buf: Buffer = canvas.toBuffer("image/png");
          return buf;
        }
    }
}

export {
    generateImage,
    ShareFont
}
