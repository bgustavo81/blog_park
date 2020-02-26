import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from "@material-ui/core/TextField";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button, FormHelperText } from '@material-ui/core';
import "../../styles/PostFormStyles.css";

const validate = values => {
    const errors = {}
    const requiredFields = [
      'Title',
      'Content',
      'VisitationDate'
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
    type,
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
    type,
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

const renderFormHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return 
    } else {
        return <FormHelperText style={{ marginTop: "-14px"}}>{touched && error}</FormHelperText>
    }
}

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState('2019-08-18T21:11:54');
    
    const handleDateChange = date => {
        setSelectedDate(date);
      };
    
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="VisitationDate"
            placeholder="mm/dd/yyyy"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </MuiPickersUtilsProvider>  
    )
}

const renderDatePickerField = ({
    value,
    input,
    label,
    meta: {touched, invalid, error},
    children,
    ...custom
}) => {
    return (
            <DatePicker 
                label={label}
                floatingLabelText={label}
                error={touched && invalid}
                errorText={touched && error}
                {...input}
                onChange={(event, index, value) => input.onChange(input.value)}
                children={children}
                {...custom}
                inputProps={{
                    name: 'VisitationDate',
                    input: value
                }}
            >
            {renderFormHelper({ touched, error })}
            </ DatePicker>
    )
}




const PostForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div className="PostForm">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
                <Field
                    name="Title"
                    component={renderTextTitleField}
                    label="Title"
                /> 
            </div>
            <div>
                <Field
                    name="VisitationDate"
                    component={renderDatePickerField}
                    label="VisitationDate"
                />
            </div>
            <div>
                <Field 
                    name="Content"
                    component={renderTextContentField}
                    label="Content"
                    multiline
                    rowsmax="4"
                />
            </div>
            <Button 
                variant="outlined" 
                color="primary" 
                type="submit" 
                disabled={pristine || submitting}
                >
                Submit
            </Button>
            <Button 
                variant="outlined" 
                disable={pristine || submitting} 
                onClick={reset}>
                Reset
            </Button>
        </form>
        </ div>
    )
}

export default reduxForm({
    form: 'postForm',
    validate: validate
})(PostForm);

