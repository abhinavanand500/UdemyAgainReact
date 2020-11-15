import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
class StreamCreate extends React.Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className='field'>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                <div>{meta.error}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };
    render() {
        console.log(this.props);
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className='ui form'>
                <Field
                    name='title'
                    component={this.renderInput}
                    label='Enter Title'
                />
                <Field
                    name='description'
                    component={this.renderInput}
                    label='Enter Description'
                />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter any Title to proceed further";
    }
    if (!formValues.description) {
        errors.description =
            "You must enter any Description to proceed further";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: "streamCreate",
    validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
