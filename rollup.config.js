import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];


const config = {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'dist',
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**',
      configFile: '../../babel.config.js',
    }),
    postcss({
      extract: true
    })
  ],
};

export default config;