import fs from 'fs';
import path from 'path';
import util from 'util';
import webpack from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';

const readFiles = util.promisify(fs.readdir);

export default async () => {
  const templates = await readFiles('templates');

  console.log('templates', templates)
  
  const compiler = webpack({ 
    entry: './scripts/index.js',
    output: {
      path: path.join(process.cwd(), 'public')
    },
    plugins: [
      new HTMLPlugin({
        filename: 'test.html',
        template: 'templates/index.html'
      })
    ] 
  });

  compiler.run((err, stats) => {
    console.log('err', err);
    console.log('stats', stats);
  })
}