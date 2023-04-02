import { patchUser } from "../services/user.service.js"

const update = document.createElement('form')
update.setAttribute('id', 'p-update')

const eventos = () => {
    update.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(update)
        const dados = Object.fromEntries(fd)
        patchUser(dados)
            .then((sucesso) => {
                console.log(sucesso.data.nome)
            })
            .catch((erro) => {
                console.log(erro.data.nome)
            })

    })
}

export const Update = () => {
    update.innerHTML = `
        <label for="email">E-mail</label>
        <input type="email" name="email">

        <label for="senha">Senha</label>
        <input type="password" name="senha">

        <label for="nome">Nome</label>
        <input type="text" name="nome">

        <button type="submit">Salvar Alterações</button>
    `
    eventos()
    return update
}