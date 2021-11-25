import '../css/ConfirmationMessage.css';

function ConfirmationMessage({setCreated}) {

    return (
        <div className="blocker" onClick={()=>setCreated(false)}>
            <div id="confirmation" className="modal">Employee Created!
                <div className='close-modal' ></div>
            </div>
        </div>
    )
}

export default ConfirmationMessage