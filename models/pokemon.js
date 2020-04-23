const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Pokemon = sequelize.define('Pokemon', {
	number: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	pokemon: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image_shiny: {
		type: DataTypes.STRING,
		allowNull: true
	},
	primary_type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	secondary_type: {
		type: DataTypes.STRING,
		allowNull: true
	},
	ability: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	base_hp: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	base_att: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	base_def: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	base_spe: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	base_spd: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	base_spa: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	first_egg_group: {
		type: DataTypes.STRING,
		allowNull: false
	},
	second_egg_group: {
		type: DataTypes.STRING,
		allowNull: true
	}
})

module.exports = Pokemon;