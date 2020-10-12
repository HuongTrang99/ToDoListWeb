const controller={}
controller.register = (data) => {
    console.log(data.password)
    if (data.name === '') {
        view.setErrorMessage('name-error')
    }
    else {
        view.removeErrorMessage('name-error')
    }
    if (data.email === '') {
        view.setErrorMessage('email-error')
    }
    else {
        view.removeErrorMessage('email-error')
    }
    if (data.password === '') {
        view.setErrorMessage('password-error')
    }
    else {
        view.removeErrorMessage('password-error')
    }
    if (data.name !== '' && data.email !== '' && data.password !== '') {
        model.register(data);
    }
}
controller.login = ({ email, password }) => {
    console.log(email)
    if(email==''){view.setErrorMessage('email2-error')}
    if(password==''){view.setErrorMessage('password2-error')}
    if (email !== '' && password !== '') {
        model.login({ email, password })
    }
}
