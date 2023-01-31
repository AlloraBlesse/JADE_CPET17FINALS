import styles from "./Sign_Up.module.css";
import { useState } from "react";
import Link from 'next/link';
import axios from "axios";
import React from "react";
import { useRouter } from 'next/router'


// reactstrap components
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";

const Cover = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    //SIGN UP NEW USERS
    const [ registerFName, setRegisterFName ] = useState('');
    const [ registerLName, setRegisterLName ] = useState('');
    const [ registerPhone, setRegisterPhone ] = useState('');
    const [ registerUsername, setRegisterUsername ] = useState('');
    const [ registerEmail, setRegisterEmail ] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');
    const [ registerCPassword, setRegisterCPassword ] = useState('');
    const [ registerStatus, setRegisterStatus ] = useState('');
    const router = useRouter();

    const register = () => {
        axios({
            method: "post",
            data: {
                firstname: registerFName,
                lastname: registerLName,
                phone: registerPhone,
                username: registerUsername,
                email: registerEmail,
                password: registerPassword,
                confirmpassword: registerCPassword
            },
            withCredentials: true,
            url: "http://172.16.20.200:3001/register"
        }).then((response) => {
            if(response.data.message == "Username Already Taken"){
                setRegisterStatus(response.data.message);
            }else{
                router.push('/');
            }
        })
    };
    
    return (  
        <div className={styles.container}>
            <div className={styles.container_nav}>
            <div className={styles.logo}>
            <img src="/images/jadelogo.png" height="90"/>
                    </div>
            <div className={styles.navbarButtons}>
                <Link href="/About_Us"><button className={styles.aboutus_btn}>About Us</button></Link>
                <Link href="/Our_Team"><button  className={styles.developer_btn}>Developers</button></Link>
                <label className={styles.occupied_lbl} >Occupied/Vacant</label>
            
            
                <div className={styles.title_sub}>
                </div>
                </div>
                </div>
            {/* SIGN UP */}
            <div className={styles.arrangement}>
                <div className={styles.card}>
                <Link href="/"><p className={styles.signupclose}> X </p></Link>
                <h4 className={styles.signuplbl}>  Create Account...</h4>
                            <input type="text" className={styles.name} onChange={e => setRegisterFName(e.target.value)} placeholder="First Name"/><br></br><br></br>
                            <input type="text" className={styles.name} onChange={e => setRegisterLName(e.target.value)} placeholder="Last Name"/><br></br><br></br>
                            <input type="text" onChange={e => setRegisterPhone(e.target.value)} className={styles.id_number} placeholder="Phone No."/><br></br><br></br>
                            <input type="text"  className={styles.position} onChange={e => setRegisterUsername(e.target.value)} placeholder="Username"/> <br></br><br></br>
                            <input type="email" className={styles.email} onChange={e => setRegisterEmail(e.target.value)} placeholder="Email"/><br></br><br></br>
                            
                            <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" onChange={e => setRegisterPassword(e.target.value)} pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." className={styles.password1} placeholder="New Password" required /><br></br><br></br>
                            <input type="checkbox"
                            onClick={()=>setShowPassword(!showPassword)}
                            className={styles.showhide_pass} for="toggle"/><div className={styles.showhide_passlbl}><b>{showPassword?'Hide password':'Show password'}</b></div>
                            
                            <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" onChange={e => setRegisterCPassword(e.target.value)} pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." className={styles.cpassword} placeholder="Confirm Password" required />
                            <input type="checkbox"
                            onClick={()=>setShowPassword(!showPassword)}
                            className={styles.cshowhide_pass} for="toggle"/><div className={styles.cshowhide_passlbl}><b>{showPassword?'Hide password':'Show password'}</b></div>
                        
                            <button className={styles.signup_btn1} onClick={register} type="submit">Sign Up</button>
                            <h1 style={{color:'red', fontSize: '15px', textAlign:'center', marginTop: '20px'}}>{registerStatus}</h1>
                </div>
                </div>
                </div>
                

    );
};

export default Cover;