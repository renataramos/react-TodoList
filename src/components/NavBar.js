import React from 'react';


export default function NavBar(props){

    if (props.view === true){
        return (
        
            <div id ="nav" class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <button id="btns-nav" class="btn btn-outline-light" onClick={()=>placeholder()}><strong>finished tasks</strong></button>
                    </li>
                    <li class="nav-item">
                        <button id="btns-nav" class="btn btn-outline-light" onClick={()=>props.onToggleView()}><strong>incomplete tasks</strong></button>
                    </li>
                </ul>
            </div>
        
        )}
    
    return (
        
            <div id ="nav" class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <button id="btns-nav" class="btn btn-outline-light" onClick={()=>props.onToggleView()}><strong>finished tasks</strong></button>
                    </li>
                    <li class="nav-item">
                        <button id="btns-nav" class="btn btn-outline-light" onClick={()=>placeholder()}><strong>incomplete tasks</strong></button>
                    </li>
                </ul>
            </div>
       
    )
}

function placeholder(){
    console.log("ask Benny and David how to solve this!")
}

