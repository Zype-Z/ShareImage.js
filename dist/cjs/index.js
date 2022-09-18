"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareFont = exports.generateImage = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const Canvas = __importStar(require("canvas"));
let { registerFont } = Canvas;
class ShareFont {
    constructor(id, name, path) {
        let options = {
            id: id,
            name: name,
            path: path,
            ShareFontOptions: {
                engine: "ShareImage.FontEngine",
                version: "v2.0.0"
            }
        };
        return options;
    }
}
exports.ShareFont = ShareFont;
let sirinStencil = new ShareFont("sirin-stencil", "Sirin Stencil", path.join(__dirname, "assets", "fonts", "sirin-stencil.ttf"));
let arial = new ShareFont("arial", "Arial", path.join(__dirname, "assets", "fonts", "arial.ttf"));
let defaultOptions = {
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
};
function generateImage(src, title, output = { type: "base64" }, props = defaultOptions) {
    let _src = src;
    let _title = title;
    let _output = output;
    let { tagline = "", titleFont = sirinStencil, taglineFont = arial, titleColor = "", taglineColor, imageWidth = 1280, imageHeight = 669, textAreaWidth, textLeftOffset = 480, titleBottomOffset = 254, titleGravity, taglineGravity, textColor = "000000", titleFontSize = "64px", taglineFontSize = "48px" } = props;
    var _tagline = tagline, _titleFont = titleFont, _taglineFont = taglineFont, _titleColor = titleColor, _taglineColor = taglineColor, _imageWidth = imageWidth, _imageHeight = imageHeight, _textAreaWidth = textAreaWidth, _textLeftOffset = textLeftOffset, _titleBottomOffset = titleBottomOffset, _titleGravity = titleGravity, _taglineGravity = taglineGravity, _textColor = textColor, _titleFontSize = titleFontSize, _taglineFontSize = taglineFontSize;
    let img = new Canvas.Image();
    img.src = _src;
    img.onload = () => {
        registerFont(_titleFont.path, { family: _titleFont.name });
        registerFont(_taglineFont.path, { family: _taglineFont.name });
        let canvas = Canvas.createCanvas(1280, 669);
        let ctx = canvas.getContext("2d");
        ctx.font = `${_titleFontSize} ${_titleFont.name}`;
        ctx.drawImage(img, 0, 0);
        ctx.fillText(_title, _textLeftOffset, _titleBottomOffset);
        ctx.font = `${_taglineFontSize} ${_taglineFont.name}`;
        ctx.fillText(_tagline, _textLeftOffset, 320);
        if (output.type === "file") {
            let out = fs.createWriteStream(output.options.file.path);
            let stream = canvas.createPNGStream();
            stream.pipe(out);
            out.on("finish", () => {
                return;
            });
            return;
        }
        else if (output.type == "base64") {
            let buf = canvas.toBuffer("image/png");
            let b64 = buf.toString("base64");
            return b64;
        }
        else if (output.type == "datauri") {
            let url = canvas.toDataURL();
            return url;
        }
        else if (output.type == "buffer") {
            let buf = canvas.toBuffer("image/png");
            return buf;
        }
    };
}
exports.generateImage = generateImage;
//# sourceMappingURL=index.js.map