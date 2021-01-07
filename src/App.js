import logo from './logo.svg';
import './App.css';
import React from 'react';
import Modal from 'react-modal'
import Draggable from 'react-draggable';
import  "./styles/style.scss";
import TaskList from "./Components/Tasklist"
    
 
class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      taskList: [{ index: Math.random(), ThingsTodo: "", Owner: "", Status: "", DueDate: "" ,Priority:"",MyStatus:"" }],
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
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
           <th className="handle" > 
           <button onMouseEnter={this.showModal} id = "columnOptions">  + </button>
           
<Modal isOpen={this.show} shouldCloseOnEsc={false} 
shouldCloseOnOverlayClick={true} 
onRequestClose={this.hideModal}
style={{
  overlay: {
    position: 'fixed',
    top: '40px',
    left: '410px',
    right: '750px',
    bottom: '400px',
    backgroundColor: 'grey',
    padding:'10px',
    margin:'10px'
  },
  content: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '10px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    margin:'5px',
    padding:'5px'
  }
}}>
<div className="flex-container" style={{display:"flex",margin:'20px'}} >
                    <option value="Status">Status</option>
                    <option value="People">People</option>
                    <option value="Timeline">Timeline</option>
                    <option value="Date">Date</option>
                    <option value="Tags">Tags</option>
                    <option value="Number">Number</option>
  </div>
  
</Modal>
           </th>
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



export default App;
