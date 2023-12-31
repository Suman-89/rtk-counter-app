import React from 'react'
import { useSelector } from 'react-redux'
import SubChildComp from './SubChildComp';

const ChildComp = () => {


  const IncrData = useSelector((e)=>{
    return e.show.value;
  })


  return (
    <>
    <h3><span className="badge bg-info border shadow">Counter App using Redux</span></h3>
    <div className="container my-4" style={{margin:'0 auto 0',fontWeight:'600'}}>
          {/* <h1>Counter 1 : <span class="badge bg-success">{IncrData}</span></h1> */}
          <SubChildComp/>
    </div>
    </>

    
    
  
  )
}

export default ChildComp
