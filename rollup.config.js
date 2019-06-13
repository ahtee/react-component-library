// rollup.config.js
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const NODE_ENV = process.env.NODE_ENV || 'development';
// NODE_ENV === 'production' ? './dist/prod.js' : './lib/dev.js';
const outputFile = './dist/bundle.js';

export default {
  input: 'src/main.js',
  output: {
    file: outputFile,
    format: 'cjs'
  },
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
