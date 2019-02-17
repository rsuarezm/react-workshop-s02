const fetchRandomLogo = (callback)=> {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data =>  callback(data));
};

const fetchRandomBreed = (breed, callback)=> {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data =>  callback(data));
};

const fetchAllBreeds = (callback)=> {
    return fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(response => response.json())
        .then(data =>  callback(data));
};


const fetchRandomCat = (callback)=> {
    return fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data =>  callback(data[0]));
};

export { fetchRandomLogo , fetchRandomBreed, fetchRandomCat, fetchAllBreeds};
