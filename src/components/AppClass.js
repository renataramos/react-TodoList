import React from 'react';
import IncompleteTasks from '../components/IncompleteTasks.js'
import CompleteTasks from '../components/CompleteTasks.js'

export default class App extends React.Component {

    constructor(props){

        super(props)
        this.state = {
            allTasks: [
            ],
            input: ''
        }
        this.handleRemoveTask = this.handleRemoveTask.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.handleToggleCompletion = this.handleToggleCompletion.bind(this)

    }

    handleToggleCompletion(description){
        this.setState((currentState)=>{
            const task = currentState.allTasks.find((task) => task.description === description)

            return {
                allTasks: currentState.allTasks.filter((task) => task.description !== description)
                .concat([{
                    description,
                    completeStatus : !task.completeStatus
                }])
            }
        })
    }

    handleAddTask(){
        this.setState((currentState)=>{
            return {
                allTasks: currentState.allTasks.concat([{
                    description: currentState.input,
                    completeStatus: false
                }]),
                input: ''
            }
        })
    }

    handleRemoveTask(description){
        this.setState((currentState)=>{
            return {
                allTasks: currentState.allTasks.filter((task) => task.description !== description)
            }
        })
    }

    updateInput(event){
        const value = event.target.value

        this.setState({
            input: value
        })
    }

    render(){
        return (
            <div>
                <div>
                <input
                    id='input'
                    type='text'
                    placeholder = 'new task'
                    value={this.state.input}
                    onChange={this.updateInput}
                />
                <button id="btns" type="button" class="btn btn-secondary btn-sm" onClick = {this.handleAddTask}>submit</button>
                <button id="btns" type="button" class="btn btn-secondary btn-sm" onClick={()=> this.setState({
                    allTasks: []
                })}>clear all
                </button>
                </div>
                
                
                <div class = "card text">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#all">all tasks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#complete">complete tasks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#zi">incomplete tasks</a>
                            </li>
                    </ul>
                </div>
                </div>
                <div class="card-body">

                <CompleteTasks
                    list={this.state.allTasks.filter((task)=> task.completeStatus === true)}
                    onRemoveTask={this.handleRemoveTask} 
                    onToggleTask={this.handleToggleCompletion}
                    />
                <IncompleteTasks
                    list={this.state.allTasks.filter((task)=> task.completeStatus === false)}
                    onRemoveTask={this.handleRemoveTask} 
                    onToggleTask={this.handleToggleCompletion}
                    />
                </div>
            </div>
        
        )}
    }