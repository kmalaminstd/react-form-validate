/* eslint-disable no-useless-escape */

import { useState } from "react"


function Form(){

    const initialValue = {
        
        fname: '',
        username: '',
        email: '',
        phonenum: '',
        password: '',
        wurl: ''
    
    }

    const usersError = {
        fname: '',
        username: '',
        email: '',
        phonenum: '',
        password: '',
        wurl: ''
    }

    const [showPass, setShowPass] = useState(false)
    const [userData, setUserData] = useState(initialValue)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState(usersError)

   
    const getData = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        
    }
    

    const {fname, username, email, phonenum, password, wurl} = userData

    const handleForm = (e) => {
        e.preventDefault()

        const nameRegex =  new RegExp('^[A-Za-z]{5,40}$')
        // const userNameRegex = new RegExp('/\w{5,}/gim')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        
        const phoneNumRegex = /(\+88)?01[3|5-9]\d{8}/gi
        const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        const wurlRegex = /(http:\/\/)?(https:\/\/)?(www)?\.?(facebook)\.\w.+\/\w.+/gim

        const usersError = {
            fname: '',
            username: '',
            email: '',
            phonenum: '',
            password: '',
            wurl: ''
        }
        
        if(!fname.match(nameRegex) || fname === ''){
            usersError.fname = 'Please input a-z or A-Z do not use any number and special carectar.'
        }
        if(username === ''){
            usersError.username = 'Please input username'
        }
        if(!emailRegex.test(email) || email === ''){
            usersError.email = 'Please input a valid email'
        }
        if(!phoneNumRegex.test(phonenum) || phonenum === ''){
            usersError.phonenum = 'Please Enter a valid phone number'
        }
        if(!passwordRegex.test(password) || password === ''){
            usersError.password = 'Please enter a strong password'
        }
        if(wurlRegex.test(wurl) || wurl === ''){
            usersError.wurl = 'Please Enter a valid URL'
        }

        setErrors(usersError)

        if(Object.values(usersError).some(elem => elem.length > 0)){
            return
        }
        

        setSubmitted(true)
        setUserData(initialValue)
    }



    const copyPass = () => {
        if(password.length > 0){
        navigator.clipboard.writeText(password)
        }else{
            alert('Enter Password First')
        }
    }

    const showHidePass = () => {
        if(password){
            setShowPass(!showPass)
        }
        
    }

    return(
        <>
            <div className="container">
                <h1>Form</h1>

                    {
                        submitted && 
                        <p style={{textAlign: 'center', color: 'lightgreen', fontSize: '18px'}} className="f-success">Form success message</p>
                    }
                

                <form onSubmit={handleForm} noValidate >

                    {/* first name field */}
                    
                    <div className="field">
                        <div className="field-name">
                            <label htmlFor="fname">Full Name: </label>
                        </div>
                        <div className="field-input">
                            <input id="fname" type="text" name="fname" value={fname} onChange={getData} />
                        </div>
                    </div>
                    <p style={{textAlign:"center", color:'red'}}>{errors.fname && errors.fname}</p>

                    {/* username field */}
                    <div className="field">
                        <div className="field-name">
                            <label htmlFor="username">Username: </label>
                        </div>
                        <div className="field-input">
                            <input id="username" type="text" name="username" value={username} onChange={getData} />
                        </div>
                    </div>
                    <p style={{textAlign:"center", color:'red'}}>{errors.username && errors.username}</p>

                    {/* email field */}
                    <div className="field">
                        <div className="field-name">
                            <label htmlFor="email">Email: </label>
                        </div>
                        <div className="field-input">
                            <input id="email" type="email" name="email" value={email} onChange={getData} />
                        </div>
                    </div>
                    <p style={{textAlign:"center", color:'red'}}>{errors.email && errors.email}</p>

                    {/* phone number field */}
                    <div className="field">
                        <div className="field-name">
                            <label htmlFor="phonenum">Phone Number: </label>
                        </div>
                        <div className="field-input">
                            <input id="phonenum" type="tel" name="phonenum" value={phonenum} onChange={getData} />
                        </div>
                    </div>
                    <p style={{textAlign:"center", color:'red'}}>{errors.phonenum && errors.phonenum}</p>

                    {/* password field */}
                    <div className="field">
                        <div className="field-name">
                            <label htmlFor="password">Password: </label>
                        </div>
                        <div className="field-input p-in">
                            <input id="password" type={showPass ? 'text' : 'password'} name="password" value={password} onChange={(e)=> {getData(e);}} /> 
                        </div>
                    </div>
                    <br />
                    <button type="button" className="p-copy" onClick={copyPass}>Copy</button> 
                    <button type="button" onClick={showHidePass} className="p-show" >{showPass ? 'Hide' : 'Show'}</button>
                    <p style={{textAlign:"center", color:'red'}}>{errors.password && errors.password}</p>


                    {/* url field */}
                    <div className="field">
                        <div className="field-name">
                            <label htmlFor="wurl">Website Url: </label>
                        </div>
                        <div className="field-input">
                            <input id="wurl" type="url" name="wurl" value={wurl} onChange={getData} />
                        </div>
                    </div>
                    <p style={{textAlign:"center", color:'red'}}>{errors.wurl && errors.wurl}</p>

                    {/* button  */}
                    <div className="b-div">
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form