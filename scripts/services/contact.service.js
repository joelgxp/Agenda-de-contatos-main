const urlBase = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('content-type', 'application/json')
headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

export const getAllContacts = async () => {
    const url = urlBase + 'contact'
    //headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}

export const getContact = async (idContato) => {
    const url = urlBase + `contact/${idContato}`
    //headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}

export const postContact = async (dados) => {
    const url = urlBase + 'contact'
    //headers.append('Authorization', `${sessionStorage.getItem('@token')}`) // avaliar funcionamento

    const resposta = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}

export const patchContact = async () => {
    const url = urlBase + 'contact'
    //headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'PATCH'
    })

    return await resposta.json()
}

export const deleteContact = async (idContato) => {
    const url = urlBase + 'contact'
   // headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'DELETE',
        body: JSON.stringify({idContato})
    })

    return await resposta.json()
}