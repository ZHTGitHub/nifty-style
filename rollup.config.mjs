import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'

export default {
  input: './source/nifty-style.js',
  output: [
    {
      file: './nifty-style.js',
      format: 'umd',
      name: 'nifty-style'
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