module.exports = {
  pages: {
    // vue root index page
    // path: '/'
    'index': {
      entry: './src/pages/Front/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Front',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'cp': {
      entry: './src/pages/Cp/main.js',
      template: 'public/cp.html',
      filename: 'cp.html',
      title: 'Cp',
      chunks: [ 'chunk-vendors', 'chunk-common', 'cp' ]
    }
  }
}
