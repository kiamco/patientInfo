import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const PatientForm = props => {
    const {
        errors,
        touched,
        values,
        status,
        history
    } = props

    const [patientInfo, setPatientInfo] = useState([]);

    useEffect(() => {
        if (status) {
            setPatientInfo([...patientInfo, status]);
        }
    }, [patientInfo,status])

    return (
        <div className='form-container'>
            <Form>
                <Field type='input' className='input' name='name' placeholder='name' />
                <Field type='input' className='input' name='other' placeholder='other' />
                <Field component='textarea' className='input' name='description' placeholder='description' />
                <button type='submit'> Submit </button>
            </Form>
        </div>
    )
}

const formiKHOC = withFormik({
    mapPropsToValues({ name, other, description }) {
        return {
            name: name || '',
            other: other || '',
            description: description || ''
        }
    },
    validationSchema: Yup
        .object()
        .shape({
            name: Yup
                .string()
                .required("input required"),
        }),
    handleSubmit(values, { setStatus, resetForm }) {
        setStatus(values);
        resetForm();
    }
})(PatientForm);

export default formiKHOC;