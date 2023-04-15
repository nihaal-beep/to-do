import { Fragment, useState } from "react";

function InputForm(props){

    const [enteredItem,setEnteredItem] = useState();
    function submitHandler(e){
        e.preventDefault();
        setEnteredItem("");
        props.onAddItem(enteredItem);
    }

    return(
    <form className="inpForm" onSubmit={submitHandler}>
        <label>Add Item </label>
        <input onChange = {(event)=>{
            setEnteredItem(event.target.value);
        }} value={enteredItem}/>
        <input type="submit" className="submit"></input>
    </form>
    )
}

export default InputForm;