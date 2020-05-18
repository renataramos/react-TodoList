import React from 'react';

export default function CompleteTasks (props) {
    return (
        <div>
            <h3>complete tasks</h3>
            <ol>
                {props.list.map((task)=>(
                    <li key={task.description}>
                        <span>{task.description}</span>
                        <button id="btns" type="button" class="btn btn-secondary btn-sm" onClick={()=> props.onRemoveTask(task.description)}>remove</button>
            
                        <button id="btns" type="button" class="btn btn-danger btn-sm" onClick={()=> props.onToggleTask(task.description)}>incomplete</button>
                    </li>
                ))}
            </ol>
        </div>
        
    )
}