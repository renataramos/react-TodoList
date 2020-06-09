import React from 'react';


export default function NavBar(props){

    const completeTasksView = "complete";
    const incompleteTasksView = "incomplete";
    const allTasksView = "all"


    if (props.view === completeTasksView){
        return (
        
            <div id ="nav" class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <button id="btns-nav" className="btn btn-warning" onClick={()=>props.onToggleView(allTasksView)}><strong>all tasks</strong></button>
                    </li>
                    <li class="nav-item">
                        <button id="btns-nav" className="btn btn-success"><strong>finished tasks</strong></button>
                    </li>
                    <li class="nav-item">
                        <button id="btns-nav" className="btn btn-danger" onClick={()=>props.onToggleView(incompleteTasksView)}><strong>incomplete tasks</strong></button>
                    </li>
                </ul>
            </div>
        
        )}
    if (props.view === incompleteTasksView){ 
    return (
            <div id ="nav" class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <button id="btns-nav" className="btn btn-warning" onClick={()=>props.onToggleView(allTasksView)}><strong>all tasks</strong></button>
                    </li>
                    <li class="nav-item">
                        <button id="btns-nav" className="btn btn-success" onClick={()=>props.onToggleView(completeTasksView)}><strong>finished tasks</strong></button>
                    </li>
                    <li class="nav-item">
                        <button id="btns-nav" className="btn btn-danger"><strong>incomplete tasks</strong></button>
                    </li>
                </ul>
            </div>
       
    )
    }

    return (
        <div id ="nav" class="card-header">
            <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                        <button id="btns-nav" className="btn btn-warning"><strong>all tasks</strong></button>
                </li>
                <li class="nav-item">
                    <button id="btns-nav" className="btn btn-success" onClick={()=>props.onToggleView(completeTasksView)}><strong>finished tasks</strong></button>
                </li>
                <li class="nav-item">
                    <button id="btns-nav" className="btn btn-danger" onClick={()=>props.onToggleView(incompleteTasksView)}><strong>incomplete tasks</strong></button>
                </li>
            </ul>
        </div>
   
)


}



