import { Server } from 'miragejs';
import baseData from './db';
import { getFrom } from './get';
import { postFrom } from './post';

window.server = new Server({seeds(srv) { srv.db.loadData({ ...baseData });},routes() {
    this.namespace = 'api';

    this.timing = 750;

    this.get('/users', getFrom('users'));

    this.post('/users', postFrom('users'));

  
  }});


