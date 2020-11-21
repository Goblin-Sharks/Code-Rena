import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card } from 'react-bootstrap';

const RegisterPage = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const questionForm = {
      username: username,
      password: password,
    };
    axios.post('http://localhost:5000/signup', questionForm);
    window.location = '/';
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" value={username} onChange={getName} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={getPassword} />
        </div>

        <div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
// <Card
//   style={{
//     width: '18rem',
//     textAlign: 'center',
//     margin: '18rem auto auto auto',
//   }}
// >
//   <Card.Body style={{}}>
//     <Card.Title>CodeArena Sign In</Card.Title>
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="text" placeholder="Enter username" />
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           value={password}
//           onChange={getPassword}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit" >
//         Submit
//       </Button>
//     </Form>
//   </Card.Body>
// </Card>;
export default RegisterPage;

// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import { Form, Input, Button } from 'antd';
// import axios from 'axios';
// function RegisterPage(props) {
//   const registerUser = (dataToSubmit) => {
//     const request = axios
//       .post('/signup', dataToSubmit)
//       .then((response) => response.data);
//     console.log(request);
//     return {
//       payload: request,
//     };
//   };
//   return (
//     <Formik
//       initialValues={{ username: '', password: '' }}
//       validationSchema={Yup.object().shape({
//         username: Yup.string().required('Name is required'),
//         password: Yup.string()
//           .min(6, 'Password must be at least 6 characters')
//           .required('Password is required'),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           let dataToSubmit = {
//             username: values.username,
//             password: values.password,
//           };
//           registerUser(dataToSubmit).then((response) => {
//             // response will be sent to the payload
//             if (response.payload.success) {
//               props.history.push('/');
//             } else {
//               alert(response.payload.message.err);
//             }
//           });

//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {(props) => {
//         const {
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//         } = props;
//         return (
//           <div>
//             <h2>Sign up</h2>
//             <Form style={{ minWidth: '375px' }} onSubmit={handleSubmit}>
//               <Form.Item required label="User Name">
//                 <Input
//                   id="name"
//                   placeholder="Enter user name"
//                   type="text"
//                   value={values.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.name && touched.name
//                       ? 'text-input error'
//                       : 'text-input'
//                   }
//                 />
//                 {errors.name && touched.name && (
//                   <div className="input-feedback">{errors.name}</div>
//                 )}
//               </Form.Item>

//               <Form.Item
//                 required
//                 label="Password"
//                 hasFeedback
//                 validateStatus={
//                   errors.password && touched.password ? 'error' : 'success'
//                 }
//               >
//                 <Input
//                   id="password"
//                   placeholder="Enter your password"
//                   type="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.password && touched.password
//                       ? 'text-input error'
//                       : 'text-input'
//                   }
//                 />
//                 {errors.password && touched.password && (
//                   <div className="input-feedback">{errors.password}</div>
//                 )}
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   onClick={handleSubmit}
//                   type="primary"
//                   disabled={isSubmitting}
//                 >
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// }
// export default RegisterPage;

//const dispatch = useDispatch();
//   return (
//     <Formik
//       initialValues={{ username: '', password: '' }}
//       validationSchema={Yup.object().shape({
//         username: Yup.string().required('Name is required'),
//         password: Yup.string()
//           .min(6, 'Password must be at least 6 characters')
//           .required('Password is required'),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           let dataToSubmit = {
//             username: values.username,
//             password: values.password,
//           };
//           //   dispatch(registerUser(dataToSubmit)).then((response) => {
//           //     // response will be sent to the payload
//           //     if (response.payload.success) {
//           //       props.history.push('/login');
//           //     } else {
//           //       alert(response.payload.err.errmsg);
//           //     }
//           //   });
//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {(props) => {
//         const {
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//         } = props;
//         return (
//           <div >
//             <h2>Sign up</h2>
//             <Form style={{ minWidth: '375px' }} onSubmit={handleSubmit}>
//               <Form.Item required label="User Name">
//                 <Input
//                   id="name"
//                   placeholder="Enter user name"
//                   type="text"
//                   value={values.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.name && touched.name
//                       ? 'text-input error'
//                       : 'text-input'
//                   }
//                 />
//                 {errors.name && touched.name && (
//                   <div className="input-feedback">{errors.name}</div>
//                 )}
//               </Form.Item>

//               <Form.Item
//                 required
//                 label="Password"
//                 hasFeedback
//                 validateStatus={
//                   errors.password && touched.password ? 'error' : 'success'
//                 }
//               >
//                 <Input
//                   id="password"
//                   placeholder="Enter your password"
//                   type="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.password && touched.password
//                       ? 'text-input error'
//                       : 'text-input'
//                   }
//                 />
//                 {errors.password && touched.password && (
//                   <div className="input-feedback">{errors.password}</div>
//                 )}
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   onClick={handleSubmit}
//                   type="primary"
//                   disabled={isSubmitting}
//                 >
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         );
//       }}
//     </Formik>
//   );
