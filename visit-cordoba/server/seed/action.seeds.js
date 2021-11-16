const mongoose = require('mongoose');
const Actions = require('../../../visit-cordoba/server/app/api/models/action.model')


const actions = [
    {
        name: "Sojo Ribera",
        image: "https://i.imgur.com/Bs6Njfe.png",
        adress: "Plaza de la Ribera, 1, 14002, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Hangar",
        image: "https://i.imgur.com/2eGmNnq.png",
        adress: "Avenida de la Libertad, 2, 14006, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Bambú Club",
        image: "https://i.imgur.com/WmI1h03.png",
        adress: "Calle Conde de Robledo, 1, 14008, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Amazonica",
        image: "https://i.imgur.com/Bs6Njfe.png",
        adress: "Gta. Conde de Guadalhorce, 14008, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Mercado Victoria",
        image: "https://i.imgur.com/RHIZLf1.png",
        adress: "Plz de la Victoria, 14004, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Long Rock",
        image: "https://i.imgur.com/mncrwnz.png",
        adress: "Calle Teniente Braulio Laportilla, 6, 14008, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Gran Cafe Gongora",
        image: "https://i.imgur.com/2eGmNnq.png",
        adress: "Calle Gongora, 10, 14008, Cordoba",
        hour: "23:00 - 7:00",
        actionEnum: "disco",
    },
    {
        name: "Museo Arqueologico",
        image: "https://i.imgur.com/w38E9fK.jpg",
        adress: "Plz de Jeronimo Paez 7, 14003, Cordoba",
        hour: "10:00 - 14:00 / 16:30 - 18:30",
        actionEnum: "culture",
    },
    {
        name: "Palacio de Viana",
        image: "https://i.imgur.com/Zjz9MIU.png",
        adress: "Plz de don Gome, 2, 14001 Cordoba",
        hour: "10:00 - 14:00 / 16:30 - 18:30",
        actionEnum: "culture",
    },
    {
        name: "Museo de Julio Romero",
        image: "https://i.imgur.com/syKNbLE.png",
        adress: "Plz del Potro, 1, 14002, Cordoba",
        hour: "10:00 - 14:00 / 16:30 - 18:30",
        actionEnum: "culture",
    },
    {
        name: "Museo Taurino Municipal",
        image: "https://i.imgur.com/Tdj31CE.png",
        adress: "Plz Maimonides, 3, 14004, Cordoba",
        hour: "10:00 - 14:00 / 16:30 - 18:30",
        actionEnum: "culture",
    },
    {
        name: "Catedral - Mezquita",
        image: "https://i.imgur.com/2vRdVVa.png",
        adress: "Calle Cardenal Herrero, 1, 14003, Cordoba",
        hour: "10:00 - 14:00 / 16:30 - 18:30",
        actionEnum: "culture",
    },
    {
        name: "Alcazar de los Reyes Cristianos",
        image: "https://i.imgur.com/e9sKvnb.png",
        adress: "Plz Campo Santo de los Martires, 14004, Cordoba",
        hour: "10:00 - 14:00 / 16:30 - 18:30",
        actionEnum: "culture",
    },
    {
        name: 'Casa pepe de la Judería',
        image: 'https://i.imgur.com/3gWZaJw.jpg',
        adress: ' C. Romero, 1, 14003 Córdoba',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'La Siesta María la Judía',
        image: 'https://i.imgur.com/Z1gG9jV.png',
        adress: ' C Maria la Judía 6 ,14011 Córdoba',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Taberna n10',
        image: 'https://i.imgur.com/ZxAf2yR.png',
        adress: ' C. Romero, 10, 14003 Córdoba',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Taberna Góngora',
        image: 'https://i.imgur.com/haqRF0V.png',
        adress: ' C. Conde de Torres Cabrera, 4, 14001.',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Casa Antonio',
        image: 'https://i.imgur.com/2GqycHy.png',
        adress: 'C. Alcalá Zamora, 17, 14006 Córdoba.',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Taberna la Montillana',
        image: 'https://i.imgur.com/sZZz8vj.png',
        adress: 'C. San Álvaro, 5, 14003 Córdoba.',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Mesón los Lobos',
        image: 'https://i.imgur.com/tsrEZXA.jpg',
        adress: 'Plaza San Ignacio de Loyola, 4, 14008 Córdoba',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'La cuchara de San Lorenzo',
        image: 'https://i.imgur.com/BIBHvGT.png',
        adress: 'Calle del, C. Arroyo de San Lorenzo, 2, 14002 Córdoba.  ',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Casa mia',
        image: 'https://i.imgur.com/2QJ5mxC.png',
        adress: 'C. María la Judía, 16, 14011 Córdoba',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'La despensa de la corredera',
        image: 'https://i.imgur.com/mSlPVAh.png',
        adress: 'Pl. de la Corredera, 2, 14002 Córdoba.',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'El churrasco',
        image: 'https://i.imgur.com/dLLYWsQ.png',
        adress: 'C. Romero, 16, 14003 Córdoba.',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
    {
        name: 'Recomiendo',
        image: 'https://i.imgur.com/2UvMOCO.png',
        adress: 'C. Mirto, 7, 14012 Córdoba.',
        hour: '13:00-16:30 y 20:00-00:00',
        actionEnum:'restaurant',
    },
];

const actionsDocuments = actions.map (actions => new Actions(actions));
mongoose
.connect('mongodb+srv://user:user123@cluster0.k0bsg.mongodb.net/visit-cordoba?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(async() =>
{const allActions = await Actions.find()
if (allActions.length) {
    await Actions.collection.drop();
}})
.catch((err) => console.log(`error deleting data: ${err}`))
.then(async() => {
    await Actions.insertMany(actionsDocuments);
})
.catch((err) => console.log(`error deleting data: ${err}`))
.finally(() => mongoose.disconnect())