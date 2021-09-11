const InputText= (props)=>(
        <input 
        type="text" className="container-md"
        value={props.value}
        onKeyUp={props.onKeyUpInput}
        onChange={props.onInputTextChange}/>
    );

export default InputText;