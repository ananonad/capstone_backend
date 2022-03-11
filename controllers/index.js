require("../config/db.connection");


module.exports = {
    list: require('./list_controller'),
    // user: require('./user_controller'),
    post: require('./post_controller'),
    review: require('./review_controller')
}