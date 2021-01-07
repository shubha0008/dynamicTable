import React,{useState} from "react"
import  "../styles/style.css";
import Modal from'react-modal'

const TaskList = (props) => {
    
  const [modalIsOpen , setModalIsOpen] = useState(false)

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
  onFocus = { () => setModalIsOpen(true)}
  
></input>

<Modal isOpen={modalIsOpen} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} 
onRequestClose={()=>setModalIsOpen(false)}
style={{
  overlay: {
    position: 'fixed',
    top: '40px',
    left: '400px',
    right: '600px',
    bottom: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding:'40px'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    margin:'20px',
    padding:'10px'
  }
}}>
<div className="flex-container" style={{display:"flex",margin:'20px'}} onMouseLeave={()=>setModalIsOpen(false)}>
<div >
     <option value="Working on it"  style={{ backgroundColor:"yellow"}} >Working on it</option>
     <option value="Stuck"  style={{ backgroundColor:"red"}}>Stuck</option>
     <option value="Critical" style={{ backgroundColor:"purple"}}>Critical</option>
  </div>
  <div className="flex-container" style={{display:"flex",flexDirection:"column"}}>
    <option value="Waiting for review" style={{ backgroundColor:"pink"}}>Waiting for review</option>
    <option value="Done" style={{ backgroundColor:"green"}}>Done</option>
  </div>
  </div>
  <button >Close</button>
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