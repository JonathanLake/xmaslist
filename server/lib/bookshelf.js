'use strict';

const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    database : 'xmaslist_db',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;