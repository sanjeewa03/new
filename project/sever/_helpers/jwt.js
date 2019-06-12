const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../modelsControlersAndServices/users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
			'/message/addmessage',
            '/hotel/addhotel',
            '/safari/addagency',
			'/tourist/addtourist',
            '/tourist/getall',
            '/package/addpackage',
            '/package/getall'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};