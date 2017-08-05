const zipper = require('./zipper'),
  remote = require('electron').remote;
const dialog = remote.dialog;

const openButton = document.getElementById('openFileButton');

openButton.addEventListener('click', (event) => {
  openFile();
});

function openFile() {
  dialog.showOpenDialog((filenames) => {
    if (filenames !== undefined) {
      const fullPath = filenames[0],
        filename = fullPath.slice(fullPath.lastIndexOf('/'), fullPath.length).replace('/', ''),
        path = fullPath.slice(0, fullPath.lastIndexOf('/')),
        outDir = path + '/' + filename + '.gz';

      zipper.compress(filename);
    }
  });
}
