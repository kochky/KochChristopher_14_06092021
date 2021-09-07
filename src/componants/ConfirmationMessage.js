

function ConfirmationMessage({setCreated}) {

    return (
        <div class="blocker">
            <div id="confirmation" className="modal">Employee Created!
                <div class='close-modal' onClick={()=>setCreated(false)}></div>
            </div>
        </div>
    )
}


export default ConfirmationMessage