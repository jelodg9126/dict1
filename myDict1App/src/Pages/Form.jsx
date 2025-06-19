
import Sidebar from "../Components/Sidebar"

import Input from "../Components/Input"
import Dropdown from "../Components/Dropdown"
import { useState } from "react"



function Form(){

    var xmlhttp = new XMLHttpRequest();

    return(
        <>
        <Sidebar/>
        
        <div id="form" className="w-[80%] h-screen flex items-center justify-center">
          
        <form method="POST" action="../htdocs/dict1/my-dict1-app/src/Pages/insertDB.php" className="flex flex-col border border-gray-300 p-8 gap-1 items-center rounded-xl">
        <h1 className="text-2xl p-2 font-bold">Sender Form</h1>

    <div className="flex gap-3">
       <Input label="First Name" type="text" name="fNameIn"/>
       <Input label="Last Name" type="text" name="lNameIn"/>
    </div>

    <div className="flex gap-3">

<Input label="File Type" type="text" name="fTypeIn"/>
<Dropdown label="Mode of Delivery" disOption="Select Delivery" options={["Courier", "Online"]} name="mODIn"/>
    </div>
        
            
        
       <div className="flex gap-3">
        {/* <Input label="Date Received" type="date" className="input" /> */}
        
        </div>

        <Input label ="Label" type="text"/>

        <button className="btn btn-wide bg-blue-500 text-white ">Submit</button>
        
        </form>
   </div>
   
    
    
        </>
    )
}

export default Form