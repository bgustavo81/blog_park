import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import "../../styles/PostFormStyles.css";

const validate = values => {
    const errors = {}
    const requiredFields = [
      'title',
      'content',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    return errors
  }

const renderTextTitleField = ({
    input,
    label,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        id="standard-basic"
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const renderTextContentField = ({
    input,
    label,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax="6"
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);


const PostForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="PostForm">
            <div>
                <Field
                    name="title"
                    component={renderTextTitleField}
                    label="title"
                /> 
            </div>
            <div>
                <Field 
                    name="content"
                    component={renderTextContentField}
                    label="content"
                    multiline
                    rowsMax="6"
                />
            </div>
            <Button
                variant="outlined"
                size="large" 
                color="primary" 
                type="submit" 
                disabled={pristine || submitting}
                >
                Submit
            </Button>
            <Button 
                variant="outlined"
                size="large" 
                disabled={pristine || submitting} 
                onClick={reset}>
                Reset
            </Button>
            <Link to='/posts' style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="large">
                    Cancel
                </Button>
            </Link>
        </form>
    )
}

export default reduxForm({
    form: 'postForm',
    validate: validate
})(PostForm);

