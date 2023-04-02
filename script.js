import { NotFound } from './scripts/pages/404.page.js'
import {Login} from './scripts/pages/login.page.js'
import { Signup } from './scripts/pages/signup.page.js'
import { Update } from './scripts/pages/update.user.page.js'
import { Contacts } from './scripts/pages/contacts.page.js'
import { AddContact } from './scripts/pages/add-contact.page.js'
import { ContactDetails } from './scripts/pages/contact-details.page.js'

const ROUTER = {
    "#login": { component: Login, private: false},
    "#404": { component: NotFound, private: undefined},
    "#signup": {component: Signup, private: false},
    "#update": {component: Update, private: false},
    "#add-contact": { component: AddContact, private: true },
    "#contact-details": { component: ContactDetails, private: true },
    "#contacts": {component: Contacts, private: true}
}

function redirectPage() {

    const route = ROUTER[window.location.hash] || ROUTER['#404']

    const root = document.querySelector('#root')

    if(route.private !== undefined) {
        const ehPrivadoNaoLogado = route.private === true && !sessionStorage.getItem('@token')

        if(ehPrivadoNaoLogado) {
            window.location.href = '/#login'
            return
        }
    
        const ehPublicoLogado = route.private === false && sessionStorage.getItem('@token')
    
        if(ehPublicoLogado) {
            window.location.href = '/#contacts'
            return
        }
    }

    root.innerHTML = null
    root.append(route.component())
}

window.addEventListener('load', () => {

    if(!window.location.hash) {
        window.location.href = '/#login'
    }
    
    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})