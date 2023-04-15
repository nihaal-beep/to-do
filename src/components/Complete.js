import { Fragment } from "react";
import InputForm from "./InputForm";

function Complete(props){
    return(<Fragment>
        <InputForm onAddItem={props.onAddItem}></InputForm>
        <h1>
        Completed Tasks</h1>
        
        <ul className="ult">
                
        {props.completedList.map((x,index)=>(<li className="item" key = {index} > {x}<button onClick={()=>{
                    props.onRemoveItem(x,index)
                    
                }}>✖</button></li>))}
        </ul>
    </Fragment>)
}

export default Complete;