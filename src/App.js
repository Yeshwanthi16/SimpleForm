import React , { useState } from 'react';
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';



function App() {

  const [usersList,setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => { 
      return [...prevUsersList,{id: Math.random().toString(), name: uName, age: uAge }]
    });
  }

  return (
    <>
      <AddUser onAdduser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
