const { src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return src('./raw/*.*')
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 10', 'iOS >= 9', 'Safari >= 9', 'Android >= 4.4', 'Opera >= 30']))
    .pipe(dest('./css'))
}

exports.default = css;