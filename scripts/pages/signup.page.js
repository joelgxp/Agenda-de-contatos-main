import { postUser } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const mensagem = signup.querySelector('span')

        const fd = new FormData(signup)
        const dados = Object.fromEntries(fd)

        postUser(dados)
            .then((resposta) => {
                if(resposta.status === 409) {
                    mensagem.innerText = resposta.mensagem
                    // // após 3 segundos limpa a mensagem
                    // setTimeout(() => {
                    //     mensagem.innerText = null
                    // }, 3000)

                } else if(resposta.status === 200) {
                    window.location.href = '/#login'
                }
            })
            .catch((erro) => {
                mensagem.innerText = 'Erro interno, tente novamente mais tarde!'
            })
    })
}

export const Signup = () => {
    signup.innerHTML = `
        <label for="email">E-mail</label>
        <input type="email" name="email" required>

        <label for="senha">Senha</label>
        <input type="password" name="senha" required>

        <label for="nome">Nome</label>
        <input type="text" name="nome" required>

        <button type="submit">Cadastrar</button>
        <span></span>

        <br>
        <p>Já possui conta?<a href="/#login"> Entre aqui!</a></p>
        <br>
    `
    eventos()
    return signup
}