const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async create(request, response){
        const { email, password } = request.body;

        const user = await connection('users')
            .where({
                email: email,
                password: password
            })
            .select('name')
            .first();

        if(!user){
            return response.status(400).json({error: 'No USER found with this ID'});
        }

        return response.json(user);
    }
}