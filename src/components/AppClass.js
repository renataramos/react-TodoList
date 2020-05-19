import React from 'react';
import Input from '../components/Input.js'
import NavBar from '../components/NavBar.js'
import Tasks from '../components/Tasks.js'

export default class App extends React.Component {

    constructor(props){

        super(props)
        this.state = {
            allTasks: [
                {
                    description: "Complete",
                    completeStatus: true
                },

                {
                    description: "Incomplete",
                    completeStatus: false
                }
            ],
            input: '',
            defaultView: false
        }
        this.handleRemoveTask = this.handleRemoveTask.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.handleToggleCompletion = this.handleToggleCompletion.bind(this)
        this.clearTasks = this.clearTasks.bind(this)
        this.handleToggleView = this.handleToggleView.bind(this)

    }

    handleToggleView(){
        this.setState((currentState=>{
            const currentView = currentState.defaultView
            return {
                defaultView: !currentView
            }
        }))
    }

    handleToggleCompletion(description){
        this.setState((currentState)=>{
            const task = currentState.allTasks.find((task) => task.description === description)
            task.completeStatus = !task.completeStatus;
            
            
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

    clearTasks(){
        this.setState({
            allTasks:[]
        })
    }

    render(){
        return (
            <div>
                <Input
                    value={this.state.input}
                    onInputChange={this.updateInput}
                    onAddTask={this.handleAddTask}
                    onClearTasks={this.clearTasks}
                />
                <div id ="nav" class="card text">
                <NavBar
                    view={this.state.defaultView}
                    onToggleView={this.handleToggleView}
                />
                <Tasks
                    view={this.state.defaultView}
                    list={this.state.allTasks}
                    onRemoveTask={this.handleRemoveTask} 
                    onToggleTask={this.handleToggleCompletion}
                />
                </div>
            </div>
        )}
    }


