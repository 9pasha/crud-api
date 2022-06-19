import { postApiController } from './api/post.js';
import { getApiController } from "./api/get.js";

export const RequestMethods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT'
};

export const requestsController = (request, response) => {
    // console.log('Body =', request.body)

    switch (request.method) {
        case RequestMethods.post:
            postApiController(request.body, response);
        case RequestMethods.get:
            getApiController(request, response);
    }
};
