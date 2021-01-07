import React,{useState} from "react"
import  "../styles/style.css";
import Modal from'react-modal'

const TaskList = (props) => {
    
  const [modalIsOpen , setModalIsOpen] = useState(false)
  const [Status,setStatus] = useState(" ")

  const handleClick = (e) => {
    setStatus(e.target.value)

  }
return (
props.taskList.map((val, idx) => {
let ThingsTodo = `ThingsTodo-${idx}`, Owner = `Owner-${idx}`, Status = `Status-${idx}`, DueDate = `DueDate-${idx}`,Priority = `Priority-${idx}` ,MyStatus = `MyStatus-${idx}` 
return (
<tr key={val.index}>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <td style={{backgroundColor:"skyblue"}}> </td>
<td>
<input type="text" name="ThingsTodo" data-id={idx} id={ThingsTodo} className="form-control " />
</td>

<td>
<input type="text" name="Owner" id={Owner} data-id={idx} className="form-control " />
</td>

<td>
<input
  list="Status"
  name="Status"
  id="input"
  autocomplete="off"
  onMouseEnter = { () => setModalIsOpen(true)}
  value={Status}
></input>

<Modal isOpen={modalIsOpen} shouldCloseOnEsc={false} 
shouldCloseOnOverlayClick={true} 
onRequestClose={()=>setModalIsOpen(false)}
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
<div >
     <option value="Working on it"  style={{ backgroundColor:"yellow",margin:'10px'}} onClick={handleClick} >Working on it</option>
     <option value="Stuck"  style={{ backgroundColor:"red",margin:'10px'}} onClick={handleClick} >Stuck</option>
     <option value="Critical" style={{ backgroundColor:"purple",margin:'10px'}} onClick={handleClick} >Critical</option>
  </div>
  <div className="flex-container" style={{display:"flex",flexDirection:"column"}}>
    <option value="Waiting for review" style={{ backgroundColor:"pink",margin:'10px'}} onClick={handleClick} >Waiting for review</option>
    <option value="Done" style={{ backgroundColor:"green",margin:'10px'}} onClick={handleClick} >Done</option>
  </div>
  </div>
  
</Modal>
</td>

<td>
<input type="date" name="DueDate" id={DueDate} data-id={idx} className="form-control"/>
</td>

<td>
 <select name="Priority" id={Priority} data-id={idx} className="form-control" >
  <option value="Urgent">Urgent</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
 </select>
</td>
<td>
<input type="text" name="MyStatus" id={MyStatus} data-id={idx} className="form-control"></input>
</td>
<td>
<button className="btn btn-danger" onClick={(() => props.delete(val))} >-</button>
</td>
</tr >
)
})
)
}
export default TaskList;