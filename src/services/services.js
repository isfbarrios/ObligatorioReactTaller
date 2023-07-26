const baseURL = "https://censo.develotion.com";

export const loginService = async (user, pass) => {
    return await censoFetch(`${baseURL}/login.php`, { "usuario": user, "password": pass });
}



//Fetch generico
const censoFetch = async (url, body) => await doFetch(url, 'POST', body, { 'Content-type': 'application/json; charset=UTF-8' });

const doFetch = async (url, method, body, headers) => {
    return await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then((response) => response.json())
        .then(response => { return response })
        .catch(error => { return error });
}