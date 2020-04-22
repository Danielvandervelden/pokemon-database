exports.getIndex = (req, res, next) => {
	res.render('index', {
		pageTitle: "Index",
		path: '/',
		types: ["Normal", "Fire", "Fighting", "Water", "Flying", "Grass"," Poison", "Electric", "Ground", "Psychic", "Rock", "Ice",
				"Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy"],
		eggGroups: ["", "Monster", "Human-like", "Water 1", "Water 2", "Water 3", "Bug", "Mineral", "Flying", "Amorphous", "Field", "Fairy",
					"Ditto", "Grass", "Dragon", "No Eggs Discovered", "Gender Uknown"]
	})
}

exports.get404 = (req, res, next) => {
	res.render(404, '404', {
		pageTitle: 'Page not found!',
		path: '/404'
	})
}