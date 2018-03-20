import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <fieldest>
                <label htmlFor="username">Username</label>
                <Field component="input" type="text" name="username" placeholder="Username"/>
            </fieldest>
            <button type="submit">Submit</button>
        </form>
    )
}

Form = reduxForm({
    form: 'default'
})(Form)

class FormPage extends React.Component {
    constructor() {
        super()
        this.submit = values => {
            console.log(values)
        }
    }

    render() {
        return <Form onSubmit={this.submit.bind(this)} />
    }
}

export default FormPage