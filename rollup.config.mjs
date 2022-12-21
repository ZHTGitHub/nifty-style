import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'

export default {
  input: './source/rocket-nifty.js',
  output: [
    {
      file: './rocket-nifty.js',
      format: 'umd',
      name: 'nifty'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        cssnano()
      ],
      extensions: ['.css']
    })
  ]
}