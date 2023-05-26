import React, { useState,useRef } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helper/Wrapper'


const AddUser = (props) => {

    const [error,setError] = useState()

    const nameInputRef = useRef()
    const ageInputeRef = useRef()

    const onSubmitHandler = (event) => {
        
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputeRef.current.value

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age ( > 0)'
            })
            return
        }
        props.onAdduser(enteredName, enteredUserAge);
        
        nameInputRef.current.value = ''
        ageInputeRef.current.value = ''
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
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputeRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser;