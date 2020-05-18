import React from 'react';

export default function inputField (){
    return (
        <div>
            <input
                type='text'
                placeholder = 'new task'
                value={this.state.input}
                onChange={this.updateInput}
            />
            <button onClick = {this.handleAddTask}>submit</button>
            
            <div>
                <button onClick={()=> this.setState({
                    allTasks: []
                })}>clear all
                </button>
            </div>
        </div>
        
    )
}