import Database from './Database.js';
import Express from 'express';

const App = Express();
const port = 45030;

const d = new Database();
d.connect();

App.use( Express.json() );

App.put("/people/create", async (req, res) => {
    let result = await d.createOne(req.body.firstName, req.body.lastName, req.body.favoriteColor);
    res.json(result);
});

App.get("/people/:person", async (req, res) => {
    let person = req.params.person;
    let result = await d.readOne(person);
    res.json(result);
    
});

App.listen(port, function(){
    console.log("oh neat");
});

d.close();