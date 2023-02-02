import React, { useState } from 'react'
import Task from './Taskdina'
import { v4 as uuidv4 } from 'uuid';
import './Taskdina.css'
export default function Form() { 
    const [tasks,settasks]=useState ([

        { id:uuidv4() ,nom:'Sport',done:false},
        { id:uuidv4() ,nom:'Video game',done:false},
        { id:uuidv4() ,nom:'Drawing',done:false}

    ]);
    const[task,setTask]=useState('');
    const addTask=()=>{
   let ntasks=[...tasks];
   let ntask={};

   ntask.id=uuidv4();

   ntask.nom=task;

   ntasks.push(ntask);

   settasks(ntasks);
   setTask('');




    }
    const deletetask=( idp)=>{
        let ntasks=tasks.filter((t)=>{return t.id!=idp
        
        })
        settasks(ntasks);


            
        
    }
        
    const donecomplete=(id)=>{
      settasks(tasks.map(task => task.id===id ? {id:task.id,nom:task.nom,done:true} : task ))
  }
  return (
    <div>
       <div className='row justify-content-center'>
        <div className='mt-5 col-7 py-5 c5' style={{backgroundColor:'BLACK'}}>

       
       <br />
      <h1 style={{color:"white"}}><b>TO DO LIST APP </b> </h1>
      <br /><br />
      <form >

<div>
  
 <input type="text" value={task}  onChange={(e)=>{setTask(e.target.value)}} placeholder='ENTER A TASK' className='form-control' style={{width:"500px",marginLeft:"300px",marginBottom:"20px"}}/>   <input type="button"  className='btn btn-outline-light' onClick={addTask} value="Ajouter" />

</div>


      </form>
      <br /><br />
      <h2 style={{color:"white"}}><b>LISTE DES CHOSES A FAIRE</b>  </h2>
      <br />

<ul>
{
tasks.map((t)=>{

return <li key={t.id}> <Task delf={(id)=>deletetask(t.id)} txt={t.nom} id={t.id} tasks={tasks} settasks={settasks}  donecomplete = {() => donecomplete(t.id)} done={t.done} /></li>


})


}



</ul>

      
      
{/* 
</div>
      </div> */}
    </div>
    </div>
    </div>
  )
}
