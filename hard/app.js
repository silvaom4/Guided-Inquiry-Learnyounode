import fs from 'fs';
import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 7000;
const apiKey = process.env.APIKEY


app.get(('/'), (req, res) => {
    fs.readFile('./hard.json', (error, data) => {
        res.write(data);
        res.end();
    })
})


app.get(('/employees'), (req, res) => {
    fs.readFile('./hard.json', (error, data) => {
        res.write(data);
        res.end();
    })
})

app.get(('/employees/:id'), (req, res) => {
    const employeeID = parseInt(req.params.id);

    fs.readFile('./hard.json', (error, data) => {
        if (error) {
            console.log(error);
            res.writeHead(500, {
                'Content-type': 'text/html',
            })

        } else {
            const employees = JSON.parse(data)
            const employee = employees.find(id => id.employeeID === employeeID)
            if (employee) {
                res.json(employee)
            } else {
                //res.status(404)
                res.writeHead(404, {
                    'Content-type': 'text/html',
                })
                res.end('<h1>Employee ID not found</h1>')
            }
        }

        // res.write(data);
        // res.end();
    })
})


//HERE we create a route url for our API


app.listen(port, (error) => {
    if (error) {
         console.log('Unexpected Error');
            res.writeHead(500, {
                'Content-type': 'text/html',
            })
        }
    console.log(`listening on port ${port}`);
})

