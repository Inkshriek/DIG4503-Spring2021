import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.use(CORS());

App.get('/people/:person', function(req, res) {
    let name = req.params.person;
    let found = false;
    names.forEach((item, index) => {
        if (name == item) found = true;
    });

    if (found) {
        res.json({ 
            "name": name
        });
    }
    else {
        res.json({ 
            "name": "not found"
        });
    }

});

App.get('/search/:name', function(req, res) {
    let search = req.params.name;
    let found = [];
    names.forEach((item, index) => {
        if (item.toLowerCase().includes(search.toLowerCase())) found.push(item);
    });

    if (found.length != 0) {
        res.json({ 
            "search": found
        });
    }
    else {
        res.json({ 
            "search": "not found"
        });
    }

});

App.put('/people/:person', function(req, res) {
    let name = req.params.person;
    names.push(name.toString());
    res.json({ 
        "name": name
    });
});

App.listen(port, function(){
    console.log("oh neat");
});