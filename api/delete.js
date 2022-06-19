import { deleteUserById } from "../domain/user.js";
import { validate as uuidValidate } from "uuid";

export const deleteApiController = (request, response, payload) => {
    const userId = request.url.split('/')[3];

    deleteUser(request, response, userId);
};

export const deleteUser = (request, response, userId) => {
    console.log(userId)
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
