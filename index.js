import http from 'node:http';
import { requestsController } from './requestsController.js';
import 'dotenv/config';

const PORT = process.env.port || 3300;

http.createServer((request, response) => {
    let dataBuffer = [];

    request.on('data', chunk => {
        dataBuffer.push(chunk);
    }).on('end',  async () => {
        dataBuffer = Buffer.concat(dataBuffer).toString();
        await requestsController(request, response, dataBuffer);
    });
}).listen(PORT);