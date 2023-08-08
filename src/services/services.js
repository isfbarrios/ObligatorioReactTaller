const baseURL = "https://censo.develotion.com";
//Login
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
//Login
export const registerService = async (user, pass) => {
    return await fetch(`${baseURL}/usuarios.php`,
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
//TotalCensados
export const loadTotalCensadosService = async (userId, apikey) => {
    return await fetch(`${baseURL}/totalCensados.php`,
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
//Departamentos
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
//Ciudades
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
//Ocupaciones
export const loadOcupationsService = async (userId, apikey) => {
    return await fetch(`${baseURL}/ocupaciones.php`,
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
//Obtener todos los censos, por usuario
export const loadCensosService = async (userId, apikey) => {
    return await fetch(`${baseURL}/personas.php?idUsuario=${userId}`,
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
//Alta censo persona
export const insertPersonService = async (userId, apikey, jsonObj) => {
    return await fetch(`${baseURL}/personas.php`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "apikey": apikey,
                "iduser": userId
            },
            body: JSON.stringify(jsonObj)
        })
        .then((response) => response.json())
        .then(response => { return response })
        .catch(error => { return error });
}
//Baja censo persona
export const deletePersonService = async (userId, apikey, id) => {
    return await fetch(`${baseURL}/personas.php?idCenso=${id}`,
        {
            method: 'DELETE',
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