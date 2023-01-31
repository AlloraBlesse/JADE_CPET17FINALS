import styles from "./Changepass.module.css";
import { useState } from "react";
import Link from 'next/link';
import axios from "axios";
import React from "react";


// reactstrap components
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";

const Cover = () => {
    const [showPassword, setShowPassword] = useState(false);

    //CHANGE PASSWORD
    const [ ChangeUsername, setChangeUsername ] = useState('');
    const [ ChangePassword, setChangePassword ] = useState('');
    const [ ConfirmchangePassword, setConChangePassword ] = useState('');
    const [ registerStatus, setRegisterStatus ] = useState('');

    const change_password = () => {
        axios({
            method: "post",
            data: {
                username: ChangeUsername,
                password: ChangePassword,
                confirmpassword: ConfirmchangePassword
            },
            withCredentials: true,
            url: "http://172.16.20.200:3001/change_password"
        }).then((response) => {
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("Password Changed Successfully");
            }
        });

    }
    
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
                <Link href="/"><p className={styles.forgotclose}> X </p></Link>
                <label className={styles.changepasslbl}>  Change Password</label>
                <input type="email" className={styles.username} onChange={e => setChangeUsername(e.target.value)} placeholder="Username" required/> 
                        <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" onChange={e => setChangePassword(e.target.value)} pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."className={styles.newpassword} placeholder="New Password" required />
                        <input type="checkbox"
                        onClick={()=>setShowPassword(!showPassword)}
                        className={styles.showhide_pass} for="toggle"/><div className={styles.showhide_passlbl}><b>{showPassword?'Hide password':'Show password'}</b></div>
                        
                        <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" onChange={e => setConChangePassword(e.target.value)} pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."className={styles.confirmpassword} placeholder="Confirm Password" required />
                        <input type="checkbox"
                        onClick={()=>setShowPassword(!showPassword)}
                        className={styles.cshowhide_pass} for="toggle"/><div className={styles.cshowhide_passlbl}><b>{showPassword?'Hide password':'Show password'}</b></div>
                        
                        <button className={styles.save_btn} onClick ={change_password} type="submit">Save Changes</button>
                        <h1 style={{color:'red', fontSize: '15px', textAlign:'center', marginTop: '20px'}}>{registerStatus}</h1>
                        
                </div>
                </div>
    </div>

    );
};

export default Cover;