import React from "react"
import { signInWithGooglePopup, CreateUserDocumentFromUserAuth} from "../../utils/firebase/firebase.utils"
const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup()
        CreateUserDocumentFromUserAuth(user)
    }

 
    return(
        <div>
            <h1>I am Sign in page </h1>
            <button onClick={logGoogleUser}> Sign In</button>
          
        </div>
    )
}

export default SignIn