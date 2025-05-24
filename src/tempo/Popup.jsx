import React , {useState} from 'react';
import Tempo from './Tempo.jsx';
import UserForm from './UserForm.jsx';
import UserInfo from './UserInfo.jsx';

const Popup = () =>{

    const [showModal , setShowModal] = useState(false);
    const [user , setUser] = useState(null);

    const openModal = () => setShowModal(true);


    const handleSave = (data)=>{
        setUser(data);
        setShowModal(false);
    }

    return(
        <>
            <div style={{padding:"50px" , textAlign: "center"}}>
                <h1>Popup Zoom</h1>
                <button onClick={openModal}>Open</button>

                < Tempo isOpen={showModal} onClose={() => setShowModal(false)}>
                    {({requestClose}) => (
                        <>
                            <h2>Enter User Info</h2>
                            <UserForm
                                onSave={(formData) => {
                                    setUser(formData);
                                }}
                                requestClose={requestClose}
                            />
                        </>
                    )}
                </Tempo>

                <UserInfo user={user}/>
            </div>
        </>
    );
};

export default Popup;