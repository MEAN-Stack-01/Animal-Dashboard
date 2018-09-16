

var quotes = require('../controllers/quotes');

module.exports = function(app){
  app.get('/', function(req, res) {
      quotes.index(req,res);
  });

  app.get('/animals/new', function(req,res){
      quotes.new(req,res);
  });

  app.get('/animals/:id', function(req, res) {
      quotes.show(req,res);
  });

  app.get('/animals/edit/:id', function(req, res) {
      quotes.edit(req,res);
  });

  app.post('/animals', function(req, res) {
      quotes.create(req,res);
  });

  app.post('/animals/:id', function(req, res) {
      quotes.update(req,res)
  });

  app.post('/animals/destroy/:id', function(req, res) {
      quotes.delete(req,res)
  });

}
