import {
    createUser,
    getAllUsers as getAllUsersFromStore,
    getUserById as getUserByIdFromStore
} from "../domain/user.js";
import {
    v4 as uuidv4,
    validate as uuidValidate
} from 'uuid';
import { ApiBaseNamePath, ApiUserPath } from "./path.js";

const createTestUsers = () => {
    const user = {};

    user.id = uuidv4();
    user.username = 'Test1';
    user.age = 20;
    user.hobbies = ['swimming', 'running'];

    createUser(user);

    const user2 = {};

    user2.id = uuidv4();
    user2.username = 'Test2';
    user2.age = 24;
    user2.hobbies = ['playing computer games', 'reading'];

    createUser(user2);

    const user3 = {};

    user3.id = uuidv4();
    user3.username = 'Test3';
    user3.age = 45;
    user3.hobbies = [];

    createUser(user3);
}

export const getApiController = (request, response) => {
    createTestUsers();

    console.log(request.url)

    const isUrlMatchWithPath = request.url
        .match(`${ApiBaseNamePath}${ApiUserPath}`);
    const splitedUrl = request.url.split('/');

    if (isUrlMatchWithPath && splitedUrl.length === 3) {
        getAllUsers(request, response);
    } else if (isUrlMatchWithPath && splitedUrl.length === 4) {
        getUserById(request, response);
    }
};

export const getAllUsers = (request, response) => {
    const allUsersInJson = JSON.stringify(getAllUsersFromStore());

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(allUsersInJson);
    response.end();
};

export const getUserById = (request, response) => {
    const userId = request.url.split('/')[3];
    const userInJson = JSON.stringify(getUserByIdFromStore(userId));

    if (!uuidValidate(userId)) {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.write(`User ID is not valid (not uuid)`);
    } else if (!userInJson) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write(`User doesn't exist`);
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(userInJson);
    }

    response.end();
};
