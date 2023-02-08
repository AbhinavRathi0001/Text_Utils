
export default function About(props) {
    return (
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className='my3' >About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={{color:props.mode==='light'?'black':'white'}}>
                <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}}>
                            <strong>Lower Case</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the 'lower case' tab.</div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
                            <strong>Upper Case</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The upper case transformer will take any text that you have and will generate all the letters into upper case ones. <br/> It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.</div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
                            <strong>Preview Text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Preview text (sometimes referred to as "preheader text") is a brief description of what's in your email, shown as a preview in the inbox of most major email clients next to the subject line. It's a good idea to include preview text as it captures your audiences' attention and generally leads to higher open rates.<br/>Here's how Gmail displays preview text (highlighted).<br/>An email inbox, showing preview text displayed after the subject line<br/>And here's an example of how preview text (highlighted) looks on mobile.<br/>A mobile email inbox, showing preview text displayed after the subject line<br/>You can add preview text to campaigns of all formats, as well as journey emails and smart transactional emails created in the email builder.</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
