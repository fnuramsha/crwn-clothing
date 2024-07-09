import React from "react"
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
const SignIn = () => {

    const LogGoogleUser = async() => {
        const response = await signInWithGooglePopup()
        console.log(response)
        
    }
    return(
        <div>
            <h1>I am Sign in page </h1>
            <button on onClick={LogGoogleUser}> Sign In</button>
        </div>
    )
}

export default SignIn