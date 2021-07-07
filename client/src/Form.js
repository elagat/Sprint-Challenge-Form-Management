import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  };

  componentDidMount() {
    this.fetchUsers();
  };

  fetchUsers = () => {
    fetch('http://localhost:5000/api/restricted/data')
      .then(response => {
        return response.json();
      })
      .then(users => {
        console.log('users', users)
        this.setState({ users: users })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render(props) {
    return (
      <div className='form'>
        <h1>Register Form</h1>
        <Form>
         <Field type='text' name='username' placeholder='Username' />
         {this.props.touched.username && this.props.errors.username && <p className="error">{this.props.errors.username}</p>}

         <Field type='password' name='password' placeholder='Password' />
         {this.props.touched.password && this.props.errors.password && <p className="error">{this.props.errors.password}</p>}

         <button type='submit'>Submit</button>
        </Form>

        {this.state.users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  };
}

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(8).required('Password must contain 8 characters'),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .get('http://localhost:5000/api/restricted/data', values)
      .then(response => {
        console.log('response.data', response.data);
        setStatus(response.data);
      })
      .catch(error => console.log('error', error.response));
  }
})(RegisterForm);

export default FormikForm;
