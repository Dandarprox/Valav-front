module.exports = {
	// set your styleguidist configuration here
	title: 'Guía de componentes',
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	sections: [
	  {
	    name: 'UI Components',
	    // components: 'src/components/**/[A-Z]*.vue'
	    components: [
				'src/components/ui/*.vue'
			]
	  }
	],
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand',
}
