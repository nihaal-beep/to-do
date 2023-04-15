import InputForm from "./InputForm";

function Incomplete(props)
{
    
    return(
        <div>
            <InputForm onAddItem={props.onAddItem}></InputForm>
            <h1>Incomplete Tasks</h1>
            <ul>
                
                {props.taskList.map((x,index)=>(<li className="item" key = {index} > {x}<button onClick={()=>{
                    props.onTickItem(x,index)
                    
                }}>🗸</button></li>))}

                
            </ul>
        </div>
    )
}
export default Incomplete;