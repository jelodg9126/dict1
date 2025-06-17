

function Input({type,label}){

    return(
        <>
          
           <fieldset className="fieldset">
  <label className="fieldset-legend">{label}</label>
<input type={type} placeholder="Type here" className="input" />
</fieldset>

        </>
    )
}

export default Input