


function Dropdown({label, options=[], disOption, name}){




    return(
         <>

              <fieldset className="fieldset">
  <label className="fieldset-legend">{label}</label>
  <select defaultValue="Pick a browser" className="select" name={name}>
    <option disabled={true}>{disOption}</option>
       {options.map((option, index)=>(
          <option key={index}>{option}</option>
    ))}
   
  </select>
</fieldset>
         </>
    )
}

export default Dropdown