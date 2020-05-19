import React from 'react';

export default function Tasks (props) {

    if (props.view === true) {
        return (
            <div class="card-body">
                <ol>
                    {props.list.filter((task)=>task.completeStatus===true)
                        .map((task)=>(
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
    
    return (
        <div class="card-body">
        <ol>
            {props.list.filter((task)=>task.completeStatus===false)
                .map((task)=>(
                <li key={task.description}>
                    <span>{task.description}</span>
                    <button id="btns" type="button" class="btn btn-secondary btn-sm" onClick={()=> props.onRemoveTask(task.description)}>remove</button>
                    <button id="btns" type="button" class="btn btn-success btn-sm" onClick={()=> props.onToggleTask(task.description)}>complete</button>
                </li>
            ))}
        </ol>
    </div>)
}

