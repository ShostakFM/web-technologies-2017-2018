const Sequelize = require('sequelize');

const connection = new Sequelize('new_schema', 'root', 'password', {
    dialect: 'mysql'
});



connection.sync()
    .then(function(){
        console.log('OK');
    })
    .catch(function(error){
        console.log(error);
    });

module.exports = { connection, Sequelize };