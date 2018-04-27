import {generate as id} from 'shortid'


export default {
    players: [
      {
        id: id(),  
        name: 'Kyle Simpson',
        score: 31,
      },
      {
        id: id(),
        name: 'Bill Geitz',
        score: 20,
      },
      {
        id: id(),
        name: 'Dan Abramov',
        score: 50,
      },
    ],
  }
  