import { deleteUserById } from "../domain/user.js";
import { validate as uuidValidate } from "uuid";
import {isValidEndpointUrl} from "../helpers/isValidEndpointUrl.js";

export const deleteApiController = async (request, response, payload) => {
    if (!isValidEndpointUrl(request.url, ['api', 'users', 'VAR'])) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        await response.write(`Not available path`);
        response.end();

        return;
    }

    try {
        const userId = request.url.split('/')[3];

        deleteUser(request, response, userId);
    } catch (error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        await response.write(`Something wrong... Can not delete user`);
        response.end();
    }
};

export const deleteUser = (request, response, userId) => {
    const isDeleted = deleteUserById(userId);

    if (!uuidValidate(userId)) {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.write(`User ID is not valid (not uuid)`);
    } else if (!isDeleted) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write(`User doesn't exist`);
    } else {
        response.writeHead(204, {"Content-Type": "text/plain"});
    }

    response.end();
};
