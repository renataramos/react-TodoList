import React from 'react';

export default function Input (props){
    
    return (
        <div>
            <input
                id="input"
                type='text'
                placeholder = 'new task'
                value={props.value}
                onChange={props.onInputChange}
            />
            <button id="btns" type="button" class="btn btn-secondary btn-sm" onClick={props.onAddTask}>submit</button>
            <button id="btns" type="button" class="btn btn-secondary btn-sm" onClick={props.onClearTasks}>clear all</button>
        </div>
        
    )
}