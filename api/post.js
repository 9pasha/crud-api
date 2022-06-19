import { createUser as createUserInStore } from '../domain/user.js';

export const postApiController = async (request, response, payload) => {
    await createUser(request, response, JSON.parse(payload));
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
