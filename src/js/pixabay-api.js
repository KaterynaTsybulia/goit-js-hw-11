const apiParams = {
    key: "44994533-ffbdcdb8322be43f4ecb62ad3",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
};

export function createApiQuery(formValue) {
    apiParams.q = formValue;
    const queryString = new URLSearchParams(apiParams).toString();
    return `https://pixabay.com/api/?${queryString}`;
}

export function fetchImages(apiQuery) {
    return fetch(apiQuery)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}




