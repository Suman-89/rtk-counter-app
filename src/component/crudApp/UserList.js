import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../features/DataFetchSlice';

const UserList = () => {


  const getData = useDispatch();

  return (
    <>
    <div>
      User List
    </div>
    <button className='btn btn-primary' onClick={()=>getData(getUsers())}> Click to show user data </button>
    </>
    
  )
}

export default UserList
