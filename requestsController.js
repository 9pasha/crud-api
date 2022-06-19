import { postApiController } from './api/post.js';
import { getApiController } from './api/get.js';
import {putApiController} from "./api/put.js";

export const RequestMethods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE'
};

export const requestsController = (request, response, payload) => {
    // console.log('Body =', request.body)

    switch (request.method) {
        case RequestMethods.post:
            postApiController(request, response, payload);
            break;
        case RequestMethods.get:
            getApiController(request, response, payload);
            break;
        case RequestMethods.put:
            putApiController(request, response, payload);
            break;
        case RequestMethods.delete:

            break;
        default:
            break;
    }
};
