# fannypack-less
Official Fannypack task for compiling LESS files

## Installation
`npm install fannypack-less --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-less')

Fannypack.Config.less = {
  // Config.root.src + 'src' dir
  src: 'less',
  // Config.root.src + 'dest' dir
  dest: 'assets/css',
  // Auto-run this task in dev mode?
  watchTask: true,
  codeTask: true,
  // Any options to pass into gulp-less()
  options: {}.
  // File extensions to watch
  extensions: ['less']
}

Fannypack.init()
```
