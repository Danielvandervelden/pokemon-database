const Pokemon = require('../models/pokemon');

exports.getIndex = (req, res, next) => {
	Pokemon.findAll()
		.then(pokemons => {
			res.render('index.ejs', {
				pageTitle: "Pokemon",
				path: "/",
				pokemons: pokemons
			})
		})
}

exports.get404 = (req, res, next) => {
	res.render(404, '404', {
		pageTitle: 'Page not found!',
		path: '/404'
	})
}