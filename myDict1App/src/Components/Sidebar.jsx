import Logo from '../assets/dictLogo.png'
import CustomLink from './CustomLink';
import { Link, useLocation } from 'react-router-dom';
import { IconLayoutDashboard, IconUsers } from '@tabler/icons-react';


function Sidebar(){
  
  

return(
  <>
    <div className="h-screen bg-white w-[20%] border border-gray-800">
        <img src={Logo} className="p-6 h-38 object-cover"/>
       <div className="flex flex-col gap-3 p-8 text-black text-lg">

    <CustomLink className='flex gap-1.5 items-center' href ="/" >
      <IconLayoutDashboard stroke={1.75} />  Dashboard
    </CustomLink>
      

        <CustomLink className='flex gap-1.5 items-center' href ="/users" >
         <IconUsers stroke={1.75} />  Users
        </CustomLink>

          <CustomLink className='flex gap-1.5 items-center' href ="/documents" >
           <IconUsers stroke={1.75} /> Documents
          </CustomLink>

            <CustomLink className='flex gap-1.5 items-center' href ="/form" >
            <IconUsers stroke={1.75} />  Form
            </CustomLink>


      
       
        
       
       </div>
    </div>

  </>

)

}

export default Sidebar 