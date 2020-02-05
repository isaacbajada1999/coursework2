const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get posts
router.get('/', async (req, res) =>{

    const posts = await loadpostscollection();
    res.send(await posts.find({}).toArray());
});

//add posts
router.post('/', async (req,res) =>{
    const posts = await loadpostscollection();

    await  posts.insertOne({
        topic: req.body.topic,
        price: req.body.price,
        location: req.body.location,
        provider: req.body. provider,
        createdAt: new Date()
    });
    res.status(201).send();

});


//update posts
router.put('/:id', async (req,res) => {
    const  posts = await loadpostscollection();
    await  posts.updateOne({$set: {"topic": req.body.topicUpdate , "createdAt": req.body.dateUpdate}})
    await  posts.updateOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(201).send();

});


//delete posts
router.delete('/:id', async (req, res) =>{

    const posts = await loadpostscollection();
    await  posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)})

    res.status(200).send();
});


    async  function loadpostscollection() {

    const client = await mongodb.MongoClient.connect

        (`mongodb+srv://isaac:isaac@cluster0-mazyf.mongodb.net/test?retryWrites=true&w=majority`,{
            useNewUrlparser: true

    });

    return client.db('studentdb').collection('course');


}

module.exports = router;
