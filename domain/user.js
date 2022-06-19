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

export const editUserById = (user, userId) => {
    const users = getAllUsers();
    let updatedUser = null;

    userStore.users = users.map((currentUser) => {
        if (currentUser.id === userId) {
            user.id = userId;
            updatedUser = user;

            return user;
        } else {
            return currentUser;
        }
    });

    return updatedUser;
};

export const deleteUserById = (userId) => {
    const isUserExists = Boolean(getUserById(userId));

    userStore.users = getAllUsers()
        .filter(({ id }) => id !== userId);

    return isUserExists;
};
