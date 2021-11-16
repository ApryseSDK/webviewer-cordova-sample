# F5
- requirements: latest MacOS + XCode installed

```bash
npm install -g plugman
node tools/copy-webviewer-files.js
cordova platform add ios
cordova run --list --emulator
## use name of the device from the list above, for example IPAD
npm run startIOS -- --target="iPad-Pro--9-7-inch-, 15.0"
```

- expectation: see app running in ipad simulator saying HELLO WORLD