import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
	entry: 'src/index.js',
	dest: 'dist/freya.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		nodeResolve({
			jsnext: true
		}),
		commonjs()
	]
};
