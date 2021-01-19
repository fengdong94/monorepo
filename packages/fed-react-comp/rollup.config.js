import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      dir: 'es',
      format: 'es',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [resolve(), commonjs(), typescript(), postcss(), image()],
}
