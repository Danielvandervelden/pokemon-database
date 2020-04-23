const Pokemon = require('../models/pokemon');

exports.postPokemon = (req, res, next) => {
	const number = req.body.number;
	const pokemon = req.body.pokemon;
	const image = req.body.image;
	const image_shiny = req.body.image_shiny;
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
			image_shiny: image_shiny,
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
			res.redirect('/?post=success')
		})
		.catch(err => {
			console.log(err);
			res.redirect('/?post=failure')
		})
}

exports.editPokemon = (req, res, next) => {
	const number = req.body.number;
	const pokemon = req.body.pokemon;
	const image = req.body.image;
	const image_shiny = req.body.image_shiny;
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

	Pokemon.findByPk(req.body.pokemon_number)
		.then(poke => {
			console.log(pokemon);
			poke.number = number;
			poke.pokemon = pokemon;
			poke.image = image;
			poke.image_shiny = image_shiny;
			poke.primary_type = primaryType;
			poke.secondary_type = secondaryType;
			poke.ability = ability;
			poke.description = description;
			poke.base_hp = hp;
			poke.base_att = att;
			poke.base_def = def;
			poke.base_spe = spe;
			poke.base_spd = spd;
			poke.base_spa = spa;
			poke.first_egg_group = firstEgg;
			poke.second_egg_group = secondEgg;

			return poke.save();
		})
		.then(result => {
			res.redirect('/?update=success');
		})
		.catch(err => {
			console.log(err);
			res.redirect('/?update=failed');
		})
}

exports.deletePokemon = (req, res, next) => {
	const number = req.body.pokemon;

	Pokemon.findByPk(number)
	.then(pokemon => {
		pokemon.destroy();
		res.redirect('/');
	})
	.catch(err => {
		console.log(err);
		res.redirect('/');
	})
}

exports.getEditPokemon = (req, res, next) => {
	const renderPage = (pokemon) => {
		res.render('edit-pokemon', {
			pageTitle: "Index",
			path: '/edit-pokemon',
			types: ["Normal", "Fire", "Fighting", "Water", "Flying", "Grass", " Poison", "Electric", "Ground", "Psychic", "Rock", "Ice",
				"Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy"
			],
			eggGroups: ["", "Monster", "Human-like", "Water 1", "Water 2", "Water 3", "Bug", "Mineral", "Flying", "Amorphous", "Field", "Fairy",
				"Ditto", "Grass", "Dragon", "No Eggs Discovered", "Gender Uknown"
			],
			pokemon: pokemon
		})
	}

	if (req.query.id) {
		Pokemon.findByPk(req.query.id)
			.then(pokemon => {
				renderPage(pokemon);
			})
	} else {
		renderPage(null);
	}
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