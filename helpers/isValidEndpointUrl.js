export const isValidEndpointUrl = (url, validUrlArray) => {
    const splitedUrl = url.split('/')
        .filter(element => element !== '');
    let isValid = true;

    splitedUrl.forEach((element, id) => {
        if (element !== validUrlArray[id]
            && validUrlArray[id] !== 'VAR'
        ) {
            isValid = false;
        }
    });

    return isValid;
};
