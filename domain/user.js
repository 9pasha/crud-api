import { v4 as uuidv4 } from 'uuid';

export const userStore = {
    users: []
};

export const createUser = (user) => {
    user.id = uuidv4();
    userStore.users.push(user);
    const users = getAllUsers();
    const usersLength = users.length;

    return users[usersLength - 1];
};

export const getAllUsers = () => [...userStore.users];

export const getUserById = (userId) =>
    getAllUsers().find(({ id }) => id === userId);