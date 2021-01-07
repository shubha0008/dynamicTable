import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import  "./styles/style.scss";
import TaskList from "./Components/Tasklist"
    
 
class App extends React.Component {
 
  state = {
    taskList: [{ index: Math.random(), ThingsTodo: "", Owner: "", Status: "", DueDate: "" ,Priority:"",MyStatus:"" }],
  };
  
  handleChange = (e) => {
    if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
        let taskList = [...this.state.taskList]
        taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
}

  addtaskNewRow = (e) => {
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, { index: Math.random(), ThingsTodo: "", Owner: "", Status: "", DueDate: "" ,Priority:"",MyStatus:""}],
  }));

  }
  

clickOnDelete(record) {
    this.setState({
        taskList: this.state.taskList.filter(r => r !== record)
    });
}


 
  render() {
    let { taskList} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
      <Draggable
        
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
         <table className="tableborder">
         <thead>
         <tr>
           <th style={{width:"1%"}}></th>
           <th>Things to do</th>
           <th className="handle">Owner</th>
           <th className="handle">Status</th>
           <th className="handle">Due date</th>
           <th className="handle">Priority</th>
           <th className="handle">MyStatus</th>
           <th className="handle" > <button onClick={this.addNewColumn} id = "columnOptions">  + </button></th>
         </tr>
         </thead>
         <tbody>
         <TaskList add={this.addtaskNewRow}  delete={this.clickOnDelete.bind(this)} taskList={taskList} />
         </tbody>
         <tfoot>
         <button onClick={this.addtaskNewRow} type="button" className="btn btn-primary text-center">+</button>
         </tfoot>
         </table>
         
        </div>
      </Draggable>
      </form>
      </div>
    );
  }
}
 
// ReactDOM.render(<App/>, document.body);
//   );


export default App;
