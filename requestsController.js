import { postApiController } from './api/post.js';
import { getApiController } from './api/get.js';
import { putApiController } from "./api/put.js";
import { deleteApiController } from "./api/delete.js";

export const RequestMethods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE'
};

export const requestsController = async (request, response, payload) => {
    switch (request.method) {
        case RequestMethods.post:
            await postApiController(request, response, payload);
            break;
        case RequestMethods.get:
            getApiController(request, response, payload);
            break;
        case RequestMethods.put:
            putApiController(request, response, payload);
            break;
        case RequestMethods.delete:
            deleteApiController(request, response, payload);
            break;
        default:
            break;
    }
};
