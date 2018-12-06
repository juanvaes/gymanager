const router = require('express').Router();
const Client = require('../models/clients');

router.get('/api/client', function(req, res){
    console.log('Get Client')
    Client.getClient(function(err, clients){
        if (err){
            throw err;
        } else {
            res.json(clients)
        }
    })
})

router.post('/api/client', function(req, res){
    let client = req.body;
    console.log('Post Client')
    console.log(client)
    Client.addClient(client, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

router.put('/api/client/:_id', function(req, res){
    console.log('Put Client');
    const id = req.params._id;
    let client = req.body;
    Client.updateClient(id, client, {}, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

router.delete('/api/client/:_id', function(req, res){
    console.log('Delete Client');
    const id = req.params._id;
    Client.deleteClient(id, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

module.exports = router;
