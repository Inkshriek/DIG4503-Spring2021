import React from 'react';
import ReactDOM from 'react-dom';
import PutBook from 'components/put.js';
import GetBook from 'components/get.js';
import DeleteBook from 'components/del.js';

ReactDOM.render(
    <React.StrictMode>
        <PutBook /> 
        <br/><br/>
        <GetBook /> 
        <br/><br/>
        <DeleteBook />
    </React.StrictMode>,
    document.getElementById('root')
);