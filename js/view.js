const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            const signUpButton = document.getElementById('signUp')
            const signInButton = document.getElementById('signIn')
            const container = document.getElementById('container')
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            })
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            })
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    name:registerForm.name.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                }
                controller.register(data)
            })
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            break;
        case 'toDoPage':
            document.getElementById('app').innerHTML = component.toDoPage
            break;
        case 'mobileSignIn':
            document.getElementById('app').innerHTML=component.mobileSignIn
            const loginForm2 = document.getElementById('login-form')
            loginForm2.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm2.email.value,
                    password: loginForm2.password.value,
                }
                controller.login(data)
            })
            const redirectToSignUp=document.getElementById('redirect-to-register')
            redirectToSignUp.addEventListener('click',()=>{
                view.setActiveScreen('mobileSignUp')
            })
            break;
        case 'mobileSignUp':
            document.getElementById('app').innerHTML=component.mobileSignUp
            const redirectToSignIn=document.getElementById('redirect-to-login')
            redirectToSignIn.addEventListener('click',()=>{
                view.setActiveScreen('mobileSignIn')})
            const registerForm2 = document.getElementById('register-form')
            registerForm2.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    name:registerForm2.name.value,
                    email: registerForm2.email.value,
                    password: registerForm2.password.value,
                }
                controller.register(data)
            })
            break;
    }
}

view.setErrorMessage = (elementId) => {
    const target=document.getElementById(elementId)
    target.classList.replace("invisible","red")
}
view.removeErrorMessage = (elementId) => {
    const target=document.getElementById(elementId)
    target.classList.replace("red","invisible")
}