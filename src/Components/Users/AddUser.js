import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helper/Wrapper'


const AddUser = (props) => {

    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age ( > 0)'
            })
            return
        }
        props.onAdduser(enteredUsername, enteredAge);
        setEnteredAge('')
        setEnteredUserName('')
    }

    const userNameChangehandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChangehandler = (event) => {
        setEnteredAge(event.target.value)
    }
    
    const errorhandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler} />}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={userNameChangehandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangehandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser;