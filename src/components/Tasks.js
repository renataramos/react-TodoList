import React from 'react';

export default function Tasks (props) {

    if (props.view === true) {
        return (
            <div id ="nav" class="card-body">
                <ol>
                    {props.list.filter((task)=>task.completeStatus===true)
                        .map((task)=>(

                        <li key={task.description}>
                                <div id="description"><del>{task.description}</del></div>
                                <div id="task-btns">
                                <button id="btns" type="button" class="btn btn-danger btn-sm" onClick={()=> props.onRemoveTask(task.description)}><i class="fa fa-trash-alt"></i></button>
                                <button id="btns" type="button" class="btn btn-danger btn-sm" onClick={()=> props.onToggleTask(task.description)}><i class="fas fa-times-circle"></i></button>
                                </div>
                        </li>
                        ))}
                </ol>
            </div>
        )
    }
    
    return (
        <div id ="nav" class="card-body">
                <ol>
                    {props.list.filter((task)=>task.completeStatus===false)
                        .map((task)=>(

                        <li key={task.description}>
                                <div id="description">{task.description}</div>
                                <div id="task-btns">
                                <button id="btns" type="button" class="btn btn-danger btn-sm" onClick={()=> props.onRemoveTask(task.description)}><i class="fa fa-trash-alt"></i></button>
                                <button id="btns" type="button" class="btn btn-success btn-sm" onClick={()=> props.onToggleTask(task.description)}><i class="fas fa-check-circle"></i></button>
                                </div>
                        </li>
                        ))}
                </ol>
        </div>
    )
}

