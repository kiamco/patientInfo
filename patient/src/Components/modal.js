import React, { useState, useEffect } from 'react';
import Form from './patientForm';
import useModal from '../Hooks/useToggle';

const FormModal = (props) => {

    const [show, toggleModal] = useModal(false);
    const [patients, setPatients] = useState();

    const getFromData = (patientData) => {
        setPatients(patientData)
    }

    useEffect(() => {
        patients ? props.getData(patients) : console.log('asdas');
    }, [show, patients])

    return (
            <div>
                <button onClick={toggleModal}>Add patient</button>
                {show && <Form getPatientData={getFromData} />}
            </div>
    )
}

export default FormModal;