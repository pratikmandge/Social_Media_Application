import React, { useState } from 'react'
import Alert from '../Alerts/Alert';

const Register = () => {


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPasssword: ""
    })

    const { username, email, password, confirmPasssword } = formData;
    const [alert, setAlert] = useState(false);
    const [alertStatus,setAlertStatus] = useState({
        errorMessage:"",
        errorCode:"",
        errorColor:""
    })


    const onChange = (e) => {

        // e.target.name -> tells which input component the user is adding data,
        // e.target.value -> returns the data which is being entered by user.
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // formData = [1,2,3]
        // {...formData,1} -> add 1 in list

        // formData = {name:"bhavana"}
        //formData = {...formData, email:"bhavana@gmail.com"} -> {name:"bhavana",email:"bhavana@gmail.com"}
    }


    const submit = (e) => {

        e.preventDefault();
        console.log(formData);

        if(password === confirmPasssword){
            console.log("hi")
            setAlertStatus({
                errorMessage:"User Registered Successfully...!",
                errorCode:"Success.",
                errorColor:"green"
            })
            setAlert(true);
            console.log(formData);
            console.log(setAlertStatus)
        }else{
            // console.log("password and confirm password does not match")
            setAlertStatus({
                errorMessage:"password and confirm password does not match",
                errorCode:"Warning...!!",
                errorColor:"red"
            })
            setAlert(true);
            // console.log(alertStatus)
        }

    }


    return (
        <div>
            <div class="bg-gray-200 pt-4 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>

                        {
                            alert === true ?
                            // setAlert is a useStete function to change value that particular useState
                            <Alert errorMessage={alertStatus.errorMessage} errorCode={alertStatus.errorCode} errorColor={alertStatus.errorColor} setAlert={setAlert} />
                            :
                            ""
                        }
                        <form onSubmit={(e) => submit(e)} >
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="username"
                                placeholder="Full Name" onChange={(e) => onChange(e)} required />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" onChange={(e) => onChange(e)} required />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" onChange={(e) => onChange(e)} required />
                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirmPassword"
                                placeholder="Confirm Password" onChange={(e) => onChange(e)} required />

                            <button 
                                type="submit"
                                class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </form>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register