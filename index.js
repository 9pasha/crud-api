// id — unique identifier (string, uuid) generated on server side
// username — user's name (string, required)
// age — user's age (number, required)
// hobbies — user's hobbies (array of strings or empty array, required)

import http from 'node:http';
import { requestsController } from './requestsController.js';

const PORT = 3000;

http.createServer((request, response) => {
    console.log('------------------------------');
    console.log('Server is available!');
    console.log('------------------------------');

    requestsController(request, response);

    // response.write("<h2>Hello world</h2>");
    // response.end();
}).listen(PORT);