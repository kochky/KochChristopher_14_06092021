import '../css/ConfirmationMessage.css';

function ConfirmationMessage({setCreated}) {

    return (
        <div className="blocker">
            <div id="confirmation" className="modal">Employee Created!
                <div className='close-modal' onClick={()=>setCreated(false)}></div>
            </div>
        </div>
    )
}

export default ConfirmationMessage