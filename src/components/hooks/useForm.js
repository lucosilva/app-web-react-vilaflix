import { useState } from 'react';
function useForm(valueInit) {

    const [dataForm, setDataForm] = useState(valueInit);

    function handleChange(key, newValue) {
        setDataForm({
            ...dataForm,
            [key]: newValue
        });
    }

    function handleRegister(create) {
        create(dataForm);
        clearForm();
    }

    function getDataForm(){
        return dataForm;
    }
    function clearForm(){
        setDataForm(valueInit);
    }

    return { handleChange, handleRegister, getDataForm }

}

export default useForm;