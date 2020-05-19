import React from 'react';

export default function Input (props){
    
    return (
        <div>
            <input
                id="input"
                type='text'
                placeholder = 'get to work!'
                value={props.value}
                onChange={props.onInputChange}
            />
            <button id="btns" type="button" class="btn btn-secondary btn-lg" onClick={props.onAddTask}>submit</button>
            <button id="btns" type="button" class="btn btn-secondary btn-lg" onClick={props.onClearTasks}><i class="fas fa-ban"></i></button>
        </div>
        
    )
}