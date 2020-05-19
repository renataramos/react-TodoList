import React from 'react';


export default function NavBar(props){

    if (props.view === true){
        return (
        
            <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <button class="nav-link active" onClick={()=>placeholder()} >complete tasks</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" onClick={()=>props.onToggleView()} >incomplete tasks</button>
                    </li>
                </ul>
            </div>
        
        )}
    
    return (
        
            <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                    <button class="nav-link" onClick={()=>props.onToggleView()}>complete tasks</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link active" onClick={()=>placeholder()} >incomplete tasks</button>
                    </li>
                </ul>
            </div>
       
    )
}

function placeholder(){
    console.log("ask Benny and David how to solve this!")
}

