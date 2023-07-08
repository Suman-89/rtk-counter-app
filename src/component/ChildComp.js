import React from 'react'
import { useSelector } from 'react-redux'

const ChildComp = () => {


  const IncrData = useSelector((e)=>{
    return e.show.value;
  })


  return (
    <div className='childcomp'>
          <h1>Counter 1 : <span class="badge bg-success">{IncrData}</span></h1>
    </div>
  )
}

export default ChildComp
