import react, { useContext, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Context, Provider } from '../../context/userContext';
import LoadingBox from '../loadingBox/loadingBox';
const Signup = ({ type, color }) => {
  const { state: { user, error, loading }, userSignUp } = useContext(Context);
  console.log(loading, error, 'loading area check');
  const [firstname, setFirstName] = useState('');
  const [lastname, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  // const [error,seterro] = useState('aaaaaaaaa');
  const { register, handleSubmit, watch, errors } = useForm();
  // const pass = useRef({});
  // password.current = watch("password", "");
  const submmitHandler = (e) => {
    // e.preventDefault()

    // console.log(firstname,lastname,email,date,password,confirmPassword,'pass');
    userSignUp({ firstname, lastname, email, dateofbirth, password, confirmpassword });

  }
  // console.log({firstname});

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header"> <h2>Create an account</h2>
              {loading ? <div className="alert alert-success" role="alert">Please Check the email and verify email...</div> : null}
              {error ? <span className="alert alert-danger">{error}</span> : null}
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(submmitHandler)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">First name</label>
                  <input type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    ref={register({ required: true, })}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                    }}
                  />
                  {errors.firstname && <p style={{ color: "red" }}>This field is required</p>}
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Last name</label>
                  <input type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    aria-describedby="emailHelp"
                    ref={register({ required: true, })}
                    onChange={(e) => {
                      setlastName(e.target.value)
                    }}
                  />
                  {errors.lastname && <p style={{ color: "red" }}>This field is required</p>}
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    ref={register({ required: true, })}
                    onChange={(e) => {
                      setemail(e.target.value)
                    }}
                  />
                  {errors.email && <p style={{ color: "red" }}>This field is required</p>}
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Date Of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="datdateofbirthe"
                    name="datdateofbirthe"
                    ref={register({ required: true, })}
                    onChange={(e) => {
                      setDateofbirth(e.target.value)
                    }}
                  />
                  {errors.email && <p style={{ color: "red" }}>This field is required</p>}
                </div>


                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    ref={register({
                      required: {
                        value: true
                      },
                      // minLength:{
                      //     value:2,
                      //     message:"Passwords must be at least 2 characters in length"

                      // },
                      // maxLength:{
                      //     value:12,
                      //     message:"Passwords must be at least 2 characters in length"

                      // },
                    })}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  {errors.password && <p style={{ color: "red" }}>This field is required</p>}
                </div>


                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    name="confirmpassword"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required"
                      },
                      // validate: value =>
                      // value === confirmPassword.password || "The passwords do not match"

                    })}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                    }}

                  />
                  {errors.confirmpassword && <p style={{ color: "red" }}>{errors.confirmpassword.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <Link to='/signin'>SignIn</Link>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

// export default Signup;
export default () => {
  return (
    <Provider>
      <Signup />
    </Provider>
  )
}