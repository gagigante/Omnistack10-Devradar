const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

//index, show, store, update, destroy

module.exports = { 

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async show(request, response) {

        const { id } = request.params;

        const dev = await Dev.findById(id);

        return response.json(dev);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            // SE O NAME NAO EXISTIR O VALOR DE LOGIN IRA SUBSTITUI-LO
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            const techArray = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
    
            dev = await Dev.create({
                //NOME DA PROPRIEDADE É IGUAL À VARIÁVEL
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location
            });

            //FILTRAR AS CONEXOES NUM RAIO DE ATE 10KM E QUE SE ENCAIXEM NO FILTRO DE TECNOLOGIAS
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techArray,
            )
                        
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
      
        return response.json(dev);
    },

    async update(request, response) {
        const { id } = request.params;

        const { techs, latitude, longitude } = request.body;

        const dev = await Dev.updateOne({ _id: id }, { techs, latitude, longitude });   
        
        return response.json(dev);
    },

    async destroy(request, response) {

        const { id } = request.params;
        
        await Dev.findByIdAndDelete(id);
        
        return response.json({ message: 'success! Dev has been removed' });
    },
};