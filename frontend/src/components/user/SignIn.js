import react, { Fragment, useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Context, Provider } from '../../context/userContext';
import LoadingBox from '../loadingBox/loadingBox';
const Signin = () => {
    const { state: { user, error, loading }, userSignUp, userSignIn } = useContext(Context);
    console.log(error, 'loading');

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [loader,setLoader] = useState(true);
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();
    const submmitHandler = async (e) => {
        // e.preventDefault()

        // console.log(firstname,lastname,email,date,password,confirmPassword,'pass');
        await userSignIn({ email, password });
    }

    useEffect(()=>{
        setTimeout(() => {
           setLoader(false) 
        }, 1000);
    })
    return (
        <Fragment>
            {
                loader  ?
                    <LoadingBox type="spin"  color="blue" />
                    :
                    loading ? 
                    <LoadingBox type="spin"  color="blue" />
                    :
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">SignIn
                                        {error ? <div className="alert alert-danger">{error}</div> : null}
                                    </div>

                                    <div className="card-body">


                                        <form onSubmit={handleSubmit(submmitHandler)} className="needs-validation" novalidate>



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
                                                        minLength: {
                                                            value: 2,
                                                            message: "Passwords must be at least 2 characters in length"

                                                        },
                                                        maxLength: {
                                                            value: 12,
                                                            message: "Passwords must be at least 2 characters in length"

                                                        },
                                                    })}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }}
                                                />
                                                {errors.password && <p style={{ color: "red" }}>This field is required</p>}
                                            </div>




                                            <button type="submit" className="btn btn-primary">Submit</button>

                                        </form>
                                        <Link to='/'>SignUp</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
        </Fragment>

    );
}

// export default Signup;
export default () => {
    return (
        <Provider>
            <Signin />
        </Provider>
    )
}