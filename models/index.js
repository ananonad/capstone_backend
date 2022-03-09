require("../config/db.connection");

module.exports ={
    List: require('./list_model'),
    Location: require('./location_model'),
    Post: require('./post_model'),
    Review: require('./review_model'),
    User: require('./user_model')
}