import Database from './Database.js';
import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

const d = new Database();
d.connect();

App.use( Express.json() );
App.use( CORS() );

App.put("/books/:ISBN", async (req, res) => {
    let result = await d.createOne(req.params.ISBN, req.body.title, req.body.author, req.body.description);
    res.json(result.ops);
});

App.get("/books/:ISBN", async (req, res) => {
    let result = await d.readOne(req.params.ISBN);
    res.json(result);
    
});

App.post("/books/search", async (req, res) => {
    let result = await d.readMany(req.query.title, req.query.author);
    res.json(result);
    
});

App.patch("/books/:ISBN", async (req, res) => {
    let result = await d.updateOne(req.params.ISBN, req.body);
    res.json(result);
    
});

App.delete("/books/:ISBN", async (req, res) => {
    let result = await d.deleteOne(req.params.ISBN);
    res.json(result);
    
});

App.listen(port, function(){
    console.log("oh neat");
});

d.close();