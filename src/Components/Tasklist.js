import React from "react"
import  "../styles/style.css";


const TaskList = (props) => {
    
    // const handleFocus = () =>
    // {
    //     let n = 0;
    //     document.getElementsByTagName("datalist")[n].style.display = 'flex';
        
       
    //         for (var option of document.getElementsByTagName("datalist")[n].options) {
    //             option.onclick = function () {
    //                 document.getElementById("input").value = this.value;
    //                 document.getElementById("input").backgroundColor = this.backgroundColor;
    //             }
    //             console.log(n)
    //             n++;
    //         }
    //         n++;
        
    // }
     
    // const removeFocus = () =>{
    //     document.getElementsByTagName("datalist")[0].style.display = 'none';
        
        
    // }
    


return (
props.taskList.map((val, idx) => {
let ThingsTodo = `ThingsTodo-${idx}`, Owner = `Owner-${idx}`, Status = `Status-${idx}`, DueDate = `DueDate-${idx}`,Priority = `Priority-${idx}` ,MyStatus = `MyStatus-${idx}` 
return (
<tr key={val.index}>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <td style={{backgroundColor:"skyblue"}}> </td>
<td>
<input type="text" name="ThingsTodo" data-id={idx,console.log(idx) } id={ThingsTodo} className="form-control " />
</td>

<td>
<input type="text" name="Owner" id={Owner} data-id={idx} className="form-control " />
</td>

<td>
<input
  list="Status"
  name="Status"
  id="inputStatus"
  autocomplete="off"
  data-id={idx}
  onFocus = { () => {
    document.getElementById("Status")[idx].style.display = 'flex';
    
        for (var option of document.getElementById("Status")[idx].options) {
            option.onclick = function () {
                document.getElementById("inputStatus").value = this.value;
                //document.getElementById("input").backgroundColor = this.backgroundColor;
            }
        }
    }}
  
></input>
<datalist name="Status" id={Status}  className="form-control" onMouseLeave = {() => {document.getElementsByTagName("datalist").style.display = 'none';}} >
  <div className="flex-container" style={{display:"flex",flexDirection:"column"}}>
     <option value="Working on it"  style={{ backgroundColor:"yellow"}}>Working on it</option>
     <option value="Stuck"  style={{ backgroundColor:"red"}}>Stuck</option>
     <option value="Critical" style={{ backgroundColor:"purple"}}>Critical</option>
  </div>
  <div className="flex-container" style={{display:"flex",flexDirection:"column"}}>
    <option value="Waiting for review" style={{ backgroundColor:"pink"}}>Waiting for review</option>
    <option value="Done" style={{ backgroundColor:"green"}}>Done</option>
  </div>
  
</datalist>


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