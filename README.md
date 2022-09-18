# ShareImage
![Card](https://shimg.zype.cf/v1/image?title=Generate%20Social%20Share%20Images%20Dynamically!&cloudName=zype&imagePublicID=ShareImage/Docs-Card)
## Installation
There is currently 2 Langauges Supported: **Python** and **Node.js**
And there is a **API** available to use with your project!
### API (Beta)
The API is currently in beta and may have some issues.
The domain of the API is https://shimg.zype.cf/v1
Currently, the V2 of ShareImage is only available for the Node.JS Library (with CommonJS, ESM and TypeScript support)
#### Endpoints
There is currently only one endpoint available:
##### GET `/image`
It needs Query Params in the following format:
https://shimg.zype.cf/v1/image?paramName=paramValue
The paramaters are as same as **Node.js** Params!
### Python
To Install ShareImage in Python with *PIP* Run:
```sh
pip install ShareImage
```
### Node.js
To Install ShareImage in Node.js with *NPM* Run:
```sh
npm i shareimage --save
```
Or, with *Yarn*:
```sh
yarn add shareimage
```
## Usage
Using ShareImage is a bit different across Languages.
### Python
Use the Following Code to Generate a Image and print it's URL in Python:
```py
from ShareImage import ShareImage

image = ShareImage(
    title = "My Test Image",
    cloudName = "myCloud",
    imagePublicId = "myFolder/myImage"
)

print(image)
```
### Node.js
Use the Following Code to Generate a Image and output it's URL in Node.js:
```js
const ShareImage = require('shareimage')

const image = ShareImage.generateImage(
    "/path/to/image.png",
    "My awesome title",
    { type: "datauri" }
)

console.log(image)
```

## Parameters
There are only 3 Required Parameters and several optional params.
### Required Parameters
|    Parameter    |  Type  |                  Description                  |
| :-------------: | :----: | :-------------------------------------------: |
|   `imagePath`   | String |                 Path of the Image             |
|     `title`     | String |               Title of the Image              |
| `outputOptions` | Object |              Options for output               |
### Optional Parameters
|      Parameter       |  Type   |          Default           |                            Description                             |
| :------------------: | :-----: | :------------------------: | :----------------------------------------------------------------: |
|      `tagline`       | String  |            None            |                 Tagline of Website or Tags of Post                 |
|     `titleFont`      | String  |           futura           |                           Font of Title                            |
|  `titleExtraConfig`  | String  |            `''`            |                         Extra Title Config                         |
| `taglineExtraConfig` | String  |            `''`            |                      Extra Config of Tagline                       |
| `cloudinaryUrlBase`  | String  | https://res.cloudinary.com |                       URL Base of Cloudinary                       |
|    `taglineFont`     | String  |           arial            |                          Font of Tagline                           |
|     `imageWidth`     | Number |            1280            |                           Width of Image                           |
|    `imageHeight`     | Number |            669             |                          Height of Image                           |
|   `textAreaWidth`    | Number |            760             |                         Width of TextArea                          |
|   `textLeftOffset`   | Number |            480             |                        Left Offset of Text                         |
|    `titleGravity`    | String  |        `south_west`        |                          Gravity of Title                          |
|   `taglineGravity`   | String  |        `north_west`        |                         Gravity of Tagline                         |
|  `titleLeftOffset`   | Number |            None            |                        Left Offset of Title                        |
| `taglineLeftOffset`  | Number |            None            |                       Left Offset of Tagline                       |
| `titleBottomOffset`  | Number |            254             |                       Bottom Offset of Title                       |
|  `taglineTopOffset`  | Number |            445             |                       Top Offset of Tagline                        |
|     `textColor`      | String  |          `000000`          |                           Color of Text                            |
|     `titleColor`     | String  |            None            |  Color of Title (If not provided `textColor` will be used instead  |
|    `taglineColor`    | String  |            None            | Color of Tagline (If not provided `textColor` will be used instead |
|   `titleFontSize`    | Number |             64             |                         Font Size of Title                         |
|  `taglineFontSize`   | Number |             48             |                        Font Size of Tagline                        |

**Note**: If you don't provide Tagline, Parameters with `tagline` Prefix will be ignored.  
We may add more Customization to **ShareImage** in the Future.
## Sponsors
[![Powered By Vercel](https://res.cloudinary.com/zype/image/upload/ShareImage/powered-by-vercel.png)](https://vercel.com/?utm_source=zypeoss&utm_campaign=oss)

<img src="https://res.cloudinary.com/zype/image/upload/ShareImage/MacStadium" height="44" width="212">
