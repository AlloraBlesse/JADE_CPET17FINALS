import styles from "./Cover.module.css";
import { useState } from "react";
import Link from 'next/link';
import axios from "axios";
import React from "react";
import { useRouter } from 'next/router'


// reactstrap components
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";

const Cover = () => {
    const [showPassword, setShowPassword] = useState(false);

    //LOG IN USERS
    const [ loginUsername, setLoginUsername ] = useState('');
    const [ loginPassword, setLoginPassword ] = useState('');
    const [ registerStatus, setRegisterStatus ] = useState('');
    const router = useRouter();

    const login = () => {
        axios({
            method: "post",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://172.16.20.200:3001/login"
        }).then((response) => {
            if(response.data.message == "No User Exist"){
                setRegisterStatus(response.data.message);
            }else{
                router.push('/Main_Dashboard')
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
                <Link href="/About_Us"><button className={styles.aboutus_btn}>About</button></Link>
                <Link href="/Our_Team"><button  className={styles.developer_btn}>Developers</button></Link>
                <label className={styles.occupied_lbl} >Occupied/Vacant</label>
            
            
                <div className={styles.title_sub}>
                </div>
                </div>
                </div>
            
            {/* SIGN UP */}
                
                <div className={styles.arrangement}>
                <div className={styles.card}>
                <img className={styles.user} src="/images/user_login.png" height="90"/><br></br>
                <input type="email" className={styles.username} onChange={e => setLoginUsername(e.target.value)} placeholder="Username" required/> 
                        <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" onChange={e => setLoginPassword(e.target.value)} pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."className={styles.password} placeholder="Password" required />
                        <input type="checkbox"
                        onClick={()=>setShowPassword(!showPassword)}
                        className={styles.showhide_pass} for="toggle"/><div className={styles.showhide_passlbl}><b>{showPassword?'Hide password':'Show password'}</b></div>
                        
                        <button className={styles.login_btn} onClick ={login} type="submit">Login</button>
                        <Link href="/Change_Password"><label className={styles.changepass} >Change Password?</label></Link>
                        <label className={styles.orlbl} >---------------------------OR---------------------------</label>
                        <Link href="/SignUp"><button className={styles.signup_btn} >Sign Up</button></Link>

                        <h1 style={{color:'red', fontSize: '15px', textAlign:'center', marginTop: '20px'}}>{registerStatus}</h1>
                        
                </div>
                </div>
    </div>

    );
};

export default Cover;