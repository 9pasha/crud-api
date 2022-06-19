import { createUser as createUserInStore } from '../domain/user.js';

export const postApiController = (request, response) => {
    console.log('Request Data =', request)
    createUser(user);
};

export const createUser = (user) => {
    createUserInStore(user);
};