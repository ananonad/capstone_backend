require("../config/db.connection");


module.exports = {
    list: require('./list_controller'),
    user: require('./user_controller')
}