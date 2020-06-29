const express = require('express');

let data = [
  { item: 'get milk' },
  { item: 'walk dog' },
  { item: 'kick some coding ass' },
];

const urlEncodedParser = express.urlencoded({ extended: false });

module.exports = function (app) {
  app.get('/todo', (req, res) => {
    res.render('todo', { todos: data });
  });
  app.post('/todo', urlEncodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });
  app.delete('/todo/:item', (req, res) => {
    data = data.filter(
      (todo) => todo.item.replace(/ /g, '-') !== req.params.item
    );
    res.json(data);
  });
};
