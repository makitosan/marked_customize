import myMarked from 'marked';
import fs from 'fs';
import path from 'path';

console.log('hello', __dirname);

const contents = fs.readFileSync(path.join(__dirname, '../../test/md/example.md'), 'utf8');
console.log(contents);

const renderer = new myMarked.Renderer();
// Override function
renderer.listitem = function (text, level) {
  console.log(text, ' ', level);
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `
          <h${level}>
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
};


renderer.listitem = function (text) {
  console.log('item:', text);
  return `<li>${text}</li>`;
};

// Run marked
console.log(myMarked(contents, {
  renderer,
}));
