const zipper = require('./zipper'),
  remote = require('electron').remote;
const dialog = remote.dialog;

const openButton = document.getElementById('openFileButton'),
  compressButton = document.getElementById('compressButton'),
  filenameInput = document.getElementById('filename');
let fullPath;

openButton.addEventListener('click', (event) => {
  openFile();
});

compressButton.addEventListener('click', (event) => {
  compress();
});

function openFile() {
  dialog.showOpenDialog((filenames) => {
    if (filenames !== undefined) {
      fullPath = filenames[0];
      const path = fullPath.slice(0, fullPath.lastIndexOf('/')),
        filename = fullPath.slice(fullPath.lastIndexOf('/'), fullPath.length).replace('/', ''),
        outDir = path + '/' + filename + '.gz';

      filenameInput.innerHTML = outDir;
    }
  });
}

function compress() {
  zipper.compress(fullPath);
}
