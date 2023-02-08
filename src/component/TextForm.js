import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
let newText = text.toLowerCase();
setText(newText);
props.showAlert("Converted to LowerCase","success")
    }
    const handleClear=()=>{
let newText = "";
setText(newText);
props.showAlert("Text Cleared","success")

    }
    const handleCopy=()=>{
navigator.clipboard.writeText(text);
props.showAlert("Text Copied","success")

    }
    const handleSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Clear Spaces","success")

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');    //Hooks function on react website

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
</div>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-danger mx-3 my-2" onClick={handleClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleSpace}>Clear Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter(elem=>elem!=='').length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(elem=>elem!=='').length}  Minutes Read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
