import { useState } from "react";
import validation from "../Validation/Validation";
import style from "../Form/Form.module.css"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
          
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);

    }


    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                <br/>
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>Access data:</h3>
                <p>Email: dai@gmail.com</p>
                <p>Pass: 123asd</p>
            </div>
        </div>
    )
}

export default Form;