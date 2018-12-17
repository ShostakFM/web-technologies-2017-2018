const CONST = require('../constants');

function sortdb(db, query){
	const key = query.key;
	const order = query.order;

	if(key === CONST.id || key === CONST.popularity){
			db.sort((a, b) => {
					return a[key] - b[key];
			});
	} else if (key === CONST.name || key === CONST.adult) {
			db.sort((a, b) => {
					if(a[key] < b[key][0]) return -1;
					else if (a[key] > b[key][0]) return 1;
					else return 0;
			});
	}
	if(order === CONST.dec) db.reverse();

	return db;
};


function pagination(db, query){
	const offset = parseInt(query.offset);
	const limit = parseInt(query.limit);

	return db.slice(offset, offset + limit);
};

module.exports = { sortdb, pagination }