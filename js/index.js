window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDAtNk8VNMI3WMLHdJK5_R70ZHwhFkyqSg",
        authDomain: "todoapp-576e8.firebaseapp.com",
        databaseURL: "https://todoapp-576e8.firebaseio.com",
        projectId: "todoapp-576e8",
        storageBucket: "todoapp-576e8.appspot.com",
        messagingSenderId: "1022767435245",
        appId: "1:1022767435245:web:249f2eb891b87c5a83ebe4"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            model.currentUser = {
                displayName: user.displayName,
                email: user.email
            }
            if (user.emailVerified) {
                view.setActiveScreen('toDoPage')
            } else {
                alert('Please')
                firebase.auth().signOut()
                if (window.matchMedia('(max-width:600px)').matches) {
                    view.setActiveScreen('mobileSignIn')
                } else {
                    view.setActiveScreen('registerPage')
                }
            }
        } else {
            if (window.matchMedia('(max-width:600px)').matches) {
                view.setActiveScreen('mobileSignIn')
            } else {
                view.setActiveScreen('registerPage')
            }
        }
    })

    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    // bat su kien chon file

    // fileButton.addEventListener('change', function (e) {
    //     var file = e.target.files[0];
    //     var storageRef = firebase.storage().ref('sweet_gifs/' + files.name);
    //     var task = storageRef.put(files);
    //     //     task.on= ('state_changed',
    //     //      function progress (snapshot){
    //     //        var percent = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    //     //        uploader.value= percent;


    //     //     },
    //     //     function error (err){

    //     //     },
    //     //     function complete(){

    //     //     }
    //     //     )

    //     // });

    //     // chuyen *****************************************
    // })

        const templateFirestore = async () => {
            // get one
            const docId = 'KeuIgOii4M0nIbpEUJ5a'
            const response = await firebase.firestore().collection('users').doc(docId).get()
            const user = getOneDocument(response)
            // console.log(user)
            // get many
            // const responseMany = await firebase.firestore()
            //                           .collection('users')
            //                           .where('phone','array-contains','0982')
            //                           .get()
            // const users = getManyDocument(responseMany)
            // console.log(users)
            // create
            const dataToCreate = {
                age: 100,
                name: 'ABC'
            }
            // firebase.firestore().collection('users')
            // .add(dataToCreate)
            // update
            const idToUpdate = 'wJQDiboZzSeN9YoZ6xLG'
            const dataToUpdate = {
                name: 'Updated',
                phone: firebase.firestore.FieldValue.arrayUnion('0986')
            }
            firebase.firestore()
                .collection('users').doc(idToUpdate)
                .update(dataToUpdate)
            // delete
            const idToDelete = 'hv8VAiSJpEWcd4HW94Jo'
            firebase.firestore().collection('users')
                .doc(idToDelete).delete()
        }

        const getManyDocument = (response) => {
            const listData = []
            for (const doc of response.docs) {
                listData.push(getOneDocument(doc))
            }
            return listData
        }


        const getOneDocument = (response) => {
            const data = response.data()
            data.id = response.id
            return data
        }
    }