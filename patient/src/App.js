import React, {useState, useEffect}from 'react';
import './Styles/CSS/index.css';
import FormModal from './Components/modal';
import PatientGroup from './Components/patientGroup';
function App() {

  const [patients, setPatients] = useState([]);

  const getPatients = (patientData) => {
    setPatients([...patients,patientData]);
  }

  useEffect(() => {
    console.log(patients)
  }, [patients])

  return (
    <div className="App">
      <FormModal getData={getPatients}/>
    </div>
  );
}

export default App;
