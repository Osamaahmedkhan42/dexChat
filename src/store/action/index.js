import Firebase from '../../config/firebase'
import firebase from 'firebase'




const set_data = (data) => {


  return (dispatch) => {
    dispatch({ type: "SETDATA", data: data })
    //console.log('chal raha hy')

  }


}

const fb_login = (history) => {
  console.log('face auth')
  return (dispatch) => {

    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        let create_user = {

          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          uid: user.uid

        }


        firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
          .then(() => {
            dispatch({ type: "SETUSER", payload: create_user })
            alert('login sucessful');
            history.push("/chat");
            //console.log(history)
          })

        // ...
        console.log('user=>>', create_user)
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
        console.log('error=>', error)
      });


    // //dispatch({type:"SETDATA" })
  }





}
    
   
//
const adding_Dummy =()=>{

  return(dispatch)=>{

    let create_user={

      name :'hammad',
      email : 'hammad.email',
      profile: "https://www.google.com/search?q=panda+images+png&client=ubuntu&hs=1xK&channel=fs&sxsrf=ALeKk03sNhgVwGYbKukeGR2hAlhZxSiLqw:1612673530976&tbm=isch&source=iu&ictx=1&fir=EHcGEokSNqeo0M%252CEkJ4xS4VaN4tTM%252C_&vet=1&usg=AI4_-kQn4D71wEu1Oij4buepoZ6xKZXmtg&sa=X&ved=2ahUKEwi78s6H_dbuAhXGasAKHbAJC_IQ9QF6BAgNEAE#imgrc=EHcGEokSNqeo0M",
      uid : '234582347532452353450042'

    }

    firebase.database().ref('/').child('users/23458234753245235345').set(create_user)
          .then(() => {
            
            alert('dummy sucessful');
           
          })

       
       


  }
}
//
// A hard coded user for sending to database and testing chat functionality
const hardCode =(history)=>{

  return(dispatch)=>{

    let create_user={

      name :'hammad',
      email : 'hammad@abc.com',
      profile: '',
       uid : '234582347532452353450042'

    }

    firebase.database().ref('/').child('users/234582347532452353450042').set(create_user)
          .then(() => {
            dispatch({ type: "SETUSER", payload: create_user })
            alert('login sucessful');
            history.push("/chat");
            
            
           
          })

       
       


  }
}
//
const get_user=()=>{
  return (dispatch)=>{
    let users = [];

    firebase.database().ref('/').child('users').on('child_added',(data)=>{
      
      users.push(data.val())
          console.log('firebasae_added=>',users)
          dispatch({type: "SETFIREBASEUSER", payload: users})
    })

    
          
  }

}
//



export {
  set_data,
  fb_login,
  adding_Dummy ,
  hardCode,
  get_user
}
