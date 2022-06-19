import { validate as uuidValidate } from "uuid";
import { editUserById } from "../domain/user.js";
import { isValidEndpointUrl } from "../helpers/isValidEndpointUrl.js";

export const putApiController = async (request, response, payload) => {
    if (!isValidEndpointUrl(request.url, ['api', 'users', 'VAR'])) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        await response.write(`Not available path`);
        response.end();

        return;
    }

    try {
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
    } catch (error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        await response.write(`Something wrong... User can not be updated`);
        response.end();
    }
};