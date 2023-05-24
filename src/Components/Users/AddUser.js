import React , { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'


const AddUser = (props) => {

   const [enteredUsername,setEnteredUserName] =  useState('');
   const [enteredAge,setEnteredAge] =  useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(enteredUsername,enteredAge)
    }

    const userNameChangehandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChangehandler = (event) => {
        setEnteredAge(event.target.value)
    }
    
    return(
<Card className={classes.input}>
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangehandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangehandler}/>
        <Button type="submit">Add User</Button>
    </form>
</Card>    
    )

}

export default AddUser;