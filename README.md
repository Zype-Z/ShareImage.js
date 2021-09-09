# ShareImage
Generate Social Share Images within Code!

## Installation
There is currently 2 Langauges Supported: **Python** and **Node.js**
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

const image = ShareImage.get({
    title: "My Test Title",
    cloudName: "myCloud",
    imagePublicID: "myFolder/myImage"
})

console.log(image)
```