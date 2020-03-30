const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async create(request, response){
        const { id } = request.body;

        const user = await connection('users')
            .where('id', id)
            .select('name')
            .first();

        if(!user){
            return response.status(400).json({error: 'No USER found with this ID'});
        }

        return response.json(user);
    }
}