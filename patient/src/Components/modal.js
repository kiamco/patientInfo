import React, {useState,useEffect} from 'react';
import Form from './patientForm';

const FormModal = (props) => {

    const [show, setShow] = useState(false);

    const toggleModal = () => {
        !show ? setShow(true) : setShow(false);
    }

    useEffect(()=> {

    }, [show])

    return(
        <div>
            <button onClick={toggleModal}>Add patient</button>
            {show && <Form />}
        </div>
    )
}

export default FormModal;