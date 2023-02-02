import React from 'react'

export default function Task({txt,delf,id,tasks,settasks,done,donecomplete}) {
  
  return (
    <div>
      <input type="text" readOnly   value={txt}     style={done ? {backgroundColor:'#1BAB58',color:"white",border:'0.5 solid gray',width:'500px',borderRadius:'4px'} : {backgroundColor:'#343537',color:"white",border:'0.5 solid black',width:'500px',borderRadius:'4px'}}  />  <input type="button"onClick={delf} value="Supprimer"  className='btn btn-outline-danger' /> &nbsp;&nbsp;&nbsp;&nbsp;
    
      <input type="button" value="Done" onClick={donecomplete} className='btn btn-outline-success' />
    








    </div>
  )
}
