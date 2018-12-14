const {connection, Sequelize} = require('./sequelize');

const Film = connection.define('film', {
	title: {
			type: Sequelize.STRING,
			allowNull: false
	},
	id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true
	},
	popularity: {
		type: Sequelize.DOUBLE,
		allowNull: false
	}
});

module.exports = Film;