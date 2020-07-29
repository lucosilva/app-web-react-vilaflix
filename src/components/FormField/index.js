import React from 'react';

function FormField({ label, type, value, placeholder, onChange }) {

    return (
        <div>
            <label>
                {`${label}: `}
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default FormField;