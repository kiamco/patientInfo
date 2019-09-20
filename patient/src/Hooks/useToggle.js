import React, {useState} from 'react';

const useModal = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggle = () => {
        !value? setValue(true) : setValue(false);
    }

    return [value, toggle]
}

export default useModal;