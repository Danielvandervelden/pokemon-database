const Pokemon = require('../models/pokemon');

exports.postPokemon = (req, res, next) => {
	const number = req.body.number;
	const pokemon = req.body.pokemon;
	const image = req.body.image;
	const primaryType = req.body.primary_type;
	const secondaryType = req.body.secondary_type;
	const ability = req.body.ability;
	const description = req.body.description;
	const hp = req.body.base_hp
	const att = req.body.base_att
	const def = req.body.base_def
	const spe = req.body.base_spe
	const spd = req.body.base_spd
	const spa = req.body.base_spa
	const firstEgg = req.body.first_egg_group
	const secondEgg = req.body.second_egg_group

	Pokemon.create({
			number: number,
			pokemon: pokemon,
			image: image,
			primary_type: primaryType,
			secondary_type: secondaryType,
			ability: ability,
			description: description,
			base_hp: hp,
			base_att: att,
			base_def: def,
			base_spe: spe,
			base_spd: spd,
			base_spa: spa,
			first_egg_group: firstEgg,
			second_egg_group: secondEgg
		})
		.then(() => {
			res.redirect('/?success')
		})
		.catch(err => {
			console.log(err);
			res.redirect('/?failure')
		})
}

exports.getPokemon = (req, res, next) => {
	Pokemon.findAll()
		.then(pokemons => {
			console.log(pokemons);

			res.render('pokemon', {
				pageTitle: "Pokemon",
				path: "/pokemon",
				pokemons: pokemons
			})
		})
}

exports.getSinglePokemon = (req, res, next) => {
	Pokemon.findAll({
			where: {
				pokemon: req.params.pokemon
			}
		})
		.then(poke => {
			const pokemon = poke[0]

			res.render('pokemon-single', {
				pageTitle: pokemon.pokemon,
				pokemon: pokemon,
				path: '/pokemon'
			})
		})
		.catch(err => {
			res.render('404', {
				pageTitle: 'Page not found!',
				path: '/404'
			})
		})
}