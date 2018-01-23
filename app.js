var path = require('path');

var apos = require('apostrophe')({
  shortName: 'quodl-site',

  bundlers: ['apostrophe-blog'],
  modules: {
    'apostrophe-blog': {},
    'apostrophe-blog-pages': {},
    'apostrophe-blog-widgets': {},
    'apostrophe-images-widgets': {},
    'as-helpers': {},
    'link-widgets': {},
    'page-link-widgets': {},
    'apostrophe-templates': {
      viewsFolderFallback: path.join(__dirname, 'views'),
    },
  },
});
