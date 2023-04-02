const urlBase = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('content-type', 'application/json')

export const postUser = async (dados) => {
    const url = urlBase + 'user'

    const resposta = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}

export const patchUser = async (dados) => {

    const resposta = await fetch(urlBase + 'user', {
        headers,
        method: 'PATCH',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}

export const deleteUser = async () => {

    const resposta = await fetch(urlBase + 'user', {
        headers,
        method: 'DELETE',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}