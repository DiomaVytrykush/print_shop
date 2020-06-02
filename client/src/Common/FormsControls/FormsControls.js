import React from 'react';
import './FormsControls.css';

export const Input = ({ input, meta: { error, touched }, ...props }) => {

    const hasError = error && touched;

    return (
        <div className="form__control">
            <div className={(hasError ? "error" : "")}>
                <input {...input} {...props} /><span></span>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = ({ input, meta: { error, touched }, ...props }) => {

    const hasError = error && touched;

    return (
        <div className="form__control">
            <div className={(hasError ? "error" : "")}>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const customFileInput = ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value;
    return <label htmlFor={input.name}>
        <input {...input} type={type} />
    </label>;
};