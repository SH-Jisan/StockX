import React , {useState} from 'react';
import Tempo from './Tempo.jsx';

const Popup = () =>{
    const [showPopup, setShowPopup] = useState(false);

    return(
        <>
            <div>
                <h1>Animated Reusable Popup</h1>
                <button onClick={()=> setShowPopup(true)}>Open</button>

                {showPopup && (
                    <Tempo onClose={()=> setShowPopup(false)}>
                        <h2>Zoom In Popup</h2>
                        <p>This Pop</p>
                    </Tempo>
                )}
            </div>
        </>
    );
};

export default Popup;