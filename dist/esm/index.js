import * as fs from "fs";
import * as path from "path";
import * as Canvas from 'canvas';
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
export { generateImage, ShareFont };
//# sourceMappingURL=index.js.map