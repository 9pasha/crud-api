import { validate as uuidValidate } from "uuid";
import { editUserById } from "../domain/user.js";

export const putApiController = (request, response, payload) => {
    const userId = request.url.split('/')[3];
    const updatedUser = editUserById(JSON.parse(payload), userId);

    if (!uuidValidate(userId)) {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.write(`User ID is not valid (not uuid)`);
    } else if (!updatedUser) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write(`User doesn't exist`);
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(JSON.stringify(updatedUser));
    }

    response.end();
};