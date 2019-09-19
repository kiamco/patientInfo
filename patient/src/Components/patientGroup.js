import React, {useState,useEffect, useContext} from 'react';
const PatientGroup = () => {

    const [patients, setPatients] = useState({});

    const getPatients = (patientData) => {
        setPatients(patientData);
    }

    useEffect(()=> {
    },[patients])
    return(
        <div>

        </div>
    )
}

export default PatientGroup;