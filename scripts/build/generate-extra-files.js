const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let root = path.resolve(__dirname, `../..`);

function copyLess(name) {
  let sourcePath = path.join(root, `${name}`);
  let targetPath = path.join(root, `dist/ng-uranus-perd-lib`);

  fs.readdirSync(targetPath).forEach(name => {
     // modules less
    if (fs.existsSync(`${sourcePath}/${name}/style/index.less`)) {
      fse.copySync(
        `${sourcePath}/${name}/style`,
        `${targetPath}/${name}/style`,
      );
    }
  });
}

['components'].forEach(name => copyLess(name));

// copy style
fse.copySync(
  path.join(root, `components/style`),
  path.join(root, `dist/ng-uranus-perd-lib/style`),
);