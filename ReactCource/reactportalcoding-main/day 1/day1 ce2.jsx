import React from "react";
const letweknow = () =>{
    let myObject = {name:"Madras"};
    let newObject = myObject;
    myObject.name = "Chennai";
    let myarray=["a","e","i","o"];
    let vowel = myarray;
    myarray.push("u")
    for (let i=0; i<myarray.length; i++)
    {
        console.log(myarray[i]);
    }
    alert("Check the console output!");
}
function Callit()
{
    return(<div>
        <button onClick={letweknow}>Array</button>
    </div>)
}
export default Callit;
