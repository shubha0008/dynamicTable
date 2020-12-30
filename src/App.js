import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import  "./styles/style.scss";
import TaskList from "./Components/Tasklist"
    

// class addNewColumn extends React.Component{
//   //this.setState({ [e.target.name]: e.target.value });
// render(){
//   return(
//     <select className="form-control" >
//             <option value="Status">Status</option>
//             <option value="Text">Text</option>
//             <option value="People">People</option>
//             <option value="Timeline">Timeline</option>
//             <option value="Date">Date</option>
//             <option value="Tags">Tags</option>
//             <option value="Numbers">Numbers</option>
//           </select>
//   )
// }
  
// }
 
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
  
  addNewColumn = () => {

    var container = document.createElement("div");
    var select = document.createElement("select");

    var option1 = document.createElement("option");
    option1.setAttribute("value","Status");
    var option2 = document.createElement("option");
    option2.setAttribute("value","Text");
    var option3 = document.createElement("option");
    option3.setAttribute("value","People")
    var option4 = document.createElement("option");
    option4.setAttribute("value","Timeline")
    var option5 = document.createElement("option");
    option5.setAttribute("value","Date")
    var option6 = document.createElement("option");
    option6.setAttribute("value","Tags")
    var option7 = document.createElement("option");
    option7.setAttribute("value","Numbers")

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);

    container.appendChild(select);

    document.getElementById("columnOptions").onfocus = document.getElementsByTagName('body')[0].appendChild(container); 
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
