import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputTask.module.css"

const InputTask = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('');
    const submitForm = (e: any) => {
        e.preventDefault()
        navigate('/active')
    }
    const handleClick = () => {
        setMessage("")
    }    
    return (
        <div>
            <form onSubmit={submitForm}>
                <input onChange={(e) => setMessage(e.target.value)} value={message} type="input" placeholder="What needs to be done?" />
                <button className={styles.btnSubmit} onClick={handleClick} type="submit"></button>
            </form>
        </div>
    )
}

export default InputTask