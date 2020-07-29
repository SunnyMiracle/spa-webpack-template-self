const del = require('del');

del(['dist/*', 'distTsx/*'], {dot: true})
