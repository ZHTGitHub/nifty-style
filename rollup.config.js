import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: './source/rocket-nifty.css',
  output: [
    {
      file: './rocket-nifty.min.css',
      format: 'umd',
      name: 'rocket-nifty'
    }
  ],
  plugins: [
    postcss({
      plugins: [  
        autoprefixer()  
      ]
    })
  ]
}