import React from "react";
import styles from "./Styling.module.css"
function Styling(){
    return<div 
    style={{
        display:"flex",
        width:"100vw",
        height:"100vh",
        justifyContent:"center",
       
        alignItems:"center",


    }}>
        <h1>Styling component</h1>
        <div className={styles["sqaure-container"]}><p>Hello Jatin</p></div>
        <div className={styles["triangle_container"]}><p>Heloo world!!!</p></div>
        <div id={styles["circle"]}>
         <b>hello react</b>
        </div>
    </div>

}
export default Styling