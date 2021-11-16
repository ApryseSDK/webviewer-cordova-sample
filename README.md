# WebViewer - Cordova sample

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)

This repo is specifically designed for any users interested in integrating WebViewer into Cordova project. This project was generated with [Cordova CLI](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/). See [Create your first Cordova app](https://cordova.apache.org/docs/en/latest/guide/cli/index.html) for more information.

** If you want offline support, you must use [Custom server](https://www.pdftron.com/documentation/web/guides/custom-server-deployment) instead. You can view the offline sample in the [offline branch](https://github.com/PDFTron/webviewer-cordova-sample/tree/offline).

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/) and [Cordova CLI](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/).

## Install

```
git clone https://github.com/PDFTron/webviewer-cordova-sample.git
cd webviewer-cordova-sample
npm install
```

## Run

```
npm start
```

To run in platforms other than browser, You can refer to official Cordova guides:
- [Android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- [iOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- [Windows](https://cordova.apache.org/docs/en/latest/guide/platforms/windows/index.html)
- [OS X](https://cordova.apache.org/docs/en/latest/guide/platforms/osx/index.html)

## WebViewer APIs

See [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).
![](https://onepixel.pdftron.com/webviewer-cordova-sample)

# Run this example in iOS

- requirements: latest MacOS + XCode installed

```bash
npm install -g plugman
node tools/copy-webviewer-files.js
cordova platform add ios
cordova run --list --emulator
## use name of the device from the list above, for example IPAD
npm run start-ios -- --target="iPad-Pro--9-7-inch-, 15.0"
```

- expectation: IPad simulator should launched automatically and you can see the reader app