
import Sidebar from "../Components/Sidebar"

import Input from "../Components/Input"
import Dropdown from "../Components/Dropdown"



function Form(){




    return(
        <>
        <Sidebar/>
        
        <div id="form" className="w-[80%] h-screen flex items-center justify-center">
          
        <form method="POST "action="insertDG.php" className="flex flex-col border border-gray-300 p-8 gap-1 items-center rounded-xl">
        <h1 className="text-2xl p-2 font-bold">Sender Form</h1>

    <div className="flex gap-3">
       <Input label="First Name" type="text"/>
       <Input label="Last Name"/>
    </div>

    <div className="flex gap-3">

<Input label="File Type" type="text"/>
<Dropdown label="Mode of Delivery" disOption="Select Delivery" options={["Courier", "Online"]}/>
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