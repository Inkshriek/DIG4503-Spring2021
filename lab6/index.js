import Express from 'express';

const App = Express();
const port = 45030;

App.get('/', function(req, res) {
    res.send("Hello World!");
});

App.get('/person', function(req, res) {
    res.json({ 
        "name": "Noah",
        "color": "purple"
    });
});

App.listen(port, function(){
    console.log("oh neat");
});