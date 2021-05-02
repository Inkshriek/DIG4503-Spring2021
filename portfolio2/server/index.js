import Database from './Database.js';
import Express from 'express';
import CORS from 'cors';

const App = Express();
App.use( CORS() );
const port = 45030;

const d = new Database();
d.connect();

App.use( Express.json() );

App.put("/pokemon/:ID", async (req, res) => {
    let result = await d.createOne(req.params.ID, req.body.name, req.body.img, req.body.team);
    res.json(result.ops);
});

App.get("/pokemon/:team", async (req, res) => {
    let result = await d.readMany(req.params.team);
    res.json(result);
    
});

App.patch("/pokemon/:ID", async (req, res) => {
    let result = await d.updateOne(req.params.ID, req.body.team, req.body.name);
    res.json(result);
    
});

App.delete("/pokemon/:ID/:team", async (req, res) => {
    let result = await d.deleteOne(req.params.ID, req.params.team);
    res.json(result);
    
});

App.listen(port, function(){
    console.log("oh neat");
});

d.close();