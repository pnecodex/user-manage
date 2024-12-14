import react, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form";
import { Context, Provider } from '../../context/userProfileContext';
import Header from './header';
import UserReadArea from './userReadArea';
import { useHistory } from 'react-router-dom';
const defaultImage = `${process.env.REACT_APP_API_URL}profileiamagedefaultimage.png`;
const initialVar = {
  imageFile: null,
  imageSrc: defaultImage,
}
const Dashboard = () => {
  const { state: { userprofile, error, message, loading }, userProfileCreate, userProfileby, userProfilUpdate } = useContext(Context);
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const [value, setValues] = useState(initialVar);
  console.log(userprofile,'userprofile');
  useEffect(async () => {
    await userProfileby(Cookies);
  }, [])

  const showProfile = e => {
    if (e.target.files && e.target.files[0]) {
      let imageFiles = e.target.files[0];
      const reader = new FileReader();
      reader.onload = x => {
        setValues({
          ...value,
          imageFile: imageFiles,
          imageSrc: x.target.result
        });
        console.log(value.imageSrc,'img');
      }
      reader.readAsDataURL(imageFiles);
    } else {
      setValues({
        ...value,
        imageFile: null,
        imageSrc: defaultImage
      })
    }
  }
  const SubmitHandler = (e) => {
    const formData = new FormData();
    formData.append('profileiamage', value.imageFile);
    if (!userProfileCreate(formData, Cookies)) {
      userProfilUpdate(formData, Cookies)
    }
    if (!userProfilUpdate(formData, Cookies)) {
      userProfileCreate(formData, Cookies)
    }
    history.push('/dashboard');
    window.location.reload();
  }
  const DefaultimageArea = () => {
    return (
      <>
      <img
        src={value.imageSrc}
        alt="Admin"
        className="rounded-circle"
        width={200}
        height={200}
        />
      </>
    )
  }
  const UserProfileimageArea = () => {
    return (
      <>
        {userprofile ? userprofile.map((r, i) => (
          <>
            {
              <img
                src={r.profileiamage ? process.env.REACT_APP_API_URL + r.profileiamage : null}
                alt="Admin"
                key={i}
                className="rounded-circle"
                width={200}
                height={200}
              />
            }
          </>
        )) : null}
      </>
    )
  }
  return (
    <div className="container">
      <div className="main-body">
        <Header />
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              {error ? <small className="alert alert-danger">{error}</small> : null}
              {message ? <small className="alert alert-success">{message}</small> : null}
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <form onSubmit={handleSubmit(SubmitHandler)}>
                    {                      
                      userprofile  ?
                        <UserProfileimageArea />
                        :
                        <DefaultimageArea />
                    }
                    <input type="file" ref={register({ required: true, })} onChange={showProfile} className="form-control" name="profileiamage" />
                    {errors.profileiamage && <p style={{ color: "red" }}>This field is required</p>}
                    <div className="p0" style={{ marginTop: '20px' }}>
                      <button className="btn btn-primary ">uploade</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-8">
            <UserReadArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider>
      <Dashboard />
    </Provider>
  )
}