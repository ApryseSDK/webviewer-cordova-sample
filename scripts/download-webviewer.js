const download = require('download');
const decompress = require('decompress');
const fs = require('fs-extra');

let downloadedSize = 0;

process.stdout.write('\n');

download(`https://www.pdftron.com/downloads/WebViewer.zip`, '.')
  .on('data', data => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    downloadedSize += data.length;
    process.stdout.write(`Downloading WebViewer... ${(downloadedSize / 100000000 * 100).toFixed(1)}%`);
  })
  .then(() => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Downloading WebViewer... 100%\nDownload completed.\n\nExtracting WebViewer... `);
    fs.removeSync('www/js/lib')
    decompress('WebViewer.zip', 'www/js').then(() => {
      // Trim down office, pdf and ui-legacy
      // It's highly recommended to use XOD for cordova apps for highest performance
      fs.moveSync('www/js/WebViewer/lib', 'www/js/lib');
      fs.removeSync('www/js/WebViewer');
      fs.removeSync('www/js/lib/core/office');
      fs.removeSync('www/js/lib/core/pdf');
      fs.removeSync('www/js/lib/ui-legacy');
      fs.removeSync('www/js/lib/package.json');
      fs.removeSync('www/js/lib/webviewer.js');
      fs.moveSync('www/js/lib/ui/build', 'www/js/lib/temp');
      fs.removeSync('www/js/lib/ui');
      fs.moveSync('www/js/lib/temp', 'www/js/lib/ui/build');
      fs.removeSync('WebViewer.zip');
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`Extracting WebViewer... 100%\nExtract completed.\n\n\n`);
    }).catch((err) => {
      console.log(err);
    });
  });