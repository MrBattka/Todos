import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const InputTask = () => {
    const navigate = useNavigate()
    const [term, setTerm] = useState('');
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/active')
    }
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <input onChange={(e) => setTerm(e.target.value)} value={term} type="text" placeholder="What needs to be done?" />
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default InputTask