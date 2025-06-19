

function Input({type,label, name, onChange}){

    return(
        <>
          
           <fieldset className="fieldset">
  <label className="fieldset-legend">{label}</label>
<input type={type} placeholder="Type here" className="input" name={name}/>
</fieldset>

        </>
    )
}

export default Input