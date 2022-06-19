import { createUser as createUserInStore } from '../domain/user.js';
import {isValidEndpointUrl} from "../helpers/isValidEndpointUrl.js";

export const postApiController = async (request, response, payload) => {
    if (!isValidEndpointUrl(request.url, ['api', 'users'])) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        await response.write(`Not available path`);
        response.end();

        return;
    }

    try {
        await createUser(request, response, JSON.parse(payload));
    } catch (error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        await response.write(`Something wrong... User can not be created`);
        response.end();
    }
};

export const createUser = async (request, response, user) => {
    const { username, age, hobbies } = user;

    if (username && age && hobbies) {
        const userInJson = JSON.stringify(createUserInStore(user));

        response.writeHead(201, {"Content-Type": "text/plain"});
        await response.write(userInJson);
    } else {
        response.writeHead(400, {"Content-Type": "text/plain"});
        await response.write(`User object does not contain required fields`);
    }

    response.end();
};
