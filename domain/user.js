export const userStore = {
    users: []
};

export const createUser = (user) => {
    userStore.users.push(user);
};

export const getAllUsers = () => [...userStore.users];

export const getUserById = (userId) =>
    getAllUsers().find(({ id }) => id === userId);