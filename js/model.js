model={}
model.currentUser=undefined
model.register = async (data) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        firebase.auth().currentUser.updateProfile({
            displayName: data.name
        })
        firebase.auth().currentUser.sendEmailVerification()
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}
model.login = async ({ email, password }) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}