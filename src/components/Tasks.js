import React from 'react';

export default function Tasks (props) {
    
    const completeTasksView = "complete";
    const incompleteTasksView = "incomplete";

    if (props.view === completeTasksView){
        return (
            <div id ="nav" class="card-body">
                <ol>
                    {props.list.filter((task)=>task.completeStatus===true)
                        .map((task)=>(

                        <li key={task.description}>
                                <div id="description">{task.description}</div>
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

    if (props.view === incompleteTasksView){
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
    
    return (
        <div id ="nav" class="card-body">
                <ol>
                    {props.list
                        .map((task)=>(

                        <li key={task.description}>
                                <div id="description">{task.description}</div>
                                <div id="task-btns">
                                <button id="btns" type="button" class="btn btn-danger btn-sm" onClick={()=> props.onRemoveTask(task.description)}><i class="fa fa-trash-alt"></i></button>
                                <button id="btns" type="button" class={checkForButtonColor(task)} onClick={()=> props.onToggleTask(task.description)}><i class={checkForButtonType(task)}></i></button>
                                </div>
                        </li>
                        ))}
                </ol>
        </div>
    )
}

function checkForButtonType(task){
    if (task.completeStatus === true){
        return "fas fa-times-circle"
    }
    return "fas fa-check-circle"

}

function checkForButtonColor(task){
    if (task.completeStatus === true){
        return "btn btn-danger btn-sm"
    }
    return "btn btn-success btn-sm"

}
