const baseURL = "https://censo.develotion.com";

export const loginService = async (user, pass) => {
    return await fetch(`${baseURL}/login.php`,
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    "usuario": user,
                    "password": pass
                }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        .then((response) => response.json())
        .then(response => { return response })
        .catch(error => { return error });
}

export const loadDepartmentsService = async (userId, apikey) => {
    return await fetch(`${baseURL}/departamentos.php`,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "apikey": apikey,
                "iduser": userId
            }
        })
        .then((response) => response.json())
        .then(response => { return response })
        .catch(error => { return error });
}

export const loadCitiesService = async (userId, apikey) => {
    return await fetch(`${baseURL}/ciudades.php`,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "apikey": apikey,
                "iduser": userId
            }
        })
        .then((response) => response.json())
        .then(response => { return response })
        .catch(error => { return error });
}