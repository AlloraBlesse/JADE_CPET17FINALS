import styles from "./Admin_Dashboard.module.css";
import { useEffect, useState } from "react";

const Admindashboard = () => {
    const [dataResponse, setdataResosponse] = useState([]);

    useEffect(() => {
      async function getPageData(){
        const apiUrlEndpoint = `http://192.168.18.58.5:3000/api/getdata`;
        const response = await fetch(apiUrlEndpoint);
        const res = await response.json();
        console.log(res);
        setdataResosponse(res.accounts)
      }
      getPageData();
    }, []);
    return (
        <div className={styles.background}>
            <div className={styles.navigation}>
                <img className={styles.image} src="/images/user_admin.png"/>
                <label className={styles.text}>Administrator</label>
            </div>
            
            <div className={styles.container}>
                <div className={styles.table_container}>
                
                
                    <table className="table">
                        <thead>
                            <tr className={styles.tr}>
                                <th className={styles.th_header}>ID</th>
                                <th className={styles.th_header}>Username</th>
                                <th className={styles.th_header}>Date and Time</th>
                                
                            </tr>
                        </thead>
                        <tbody >
                        {dataResponse.map((account) =>        
                            <tr >
                                <th className={styles.tbody}>{account.id}</th>
                                <th className={styles.tbody}>{account.username}</th>
                                <th className={styles.tbody}>{account.datetime}</th>
                                
                            </tr>
                        )}  
                        </tbody>
                    
                    </table>
                
                </div>
                <button className={styles.Delete_button}>Delete</button>
            </div>  
        </div>
  
    );
};

export default Admindashboard;