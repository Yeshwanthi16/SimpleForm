import React from 'react'


const AddUser = (props) => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }
    
    return(
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
    </form>
    )

}

export default AddUser;