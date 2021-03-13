import Express from 'express';

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
        if (item.includes(search)) found.push(item);
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

App.listen(port, function(){
    console.log("oh neat");
});