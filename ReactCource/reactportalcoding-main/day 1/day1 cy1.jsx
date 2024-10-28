import React from "react";
const cchecker = () =>
    {
        const name1 = "Kabil"
        const name2 = "Kabil"
        if(name1===name2)
            console.log("true");
        else
            console.log("false");
        const ob1 = {name:"Kabil"};
        const ob2 = {name:"Kabil"};
        if(ob1.name===ob2.name)
            console.log("true");
        else
            console.log("false");
}
function Check()
{
return(<div>
    <button onClick={cchecker}>Compare</button>
</div>)
}
export default Check;
