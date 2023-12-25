import React, { useState } from 'react'
import { useFormik } from 'formik';
import SignUpinitialValues from '../utils/SignUpinitialValues';
import { SignUpSchema } from '../utils/SignUpSchema';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { BsCheck2Circle } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import {signupDataRequest, signupDataSuccess, signupDataFailure} from '../Redux/actions/signUp'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();


    const handleSignin = () =>{
        navigate("/signin")
    }

    const handleForgotpassword = () =>{
        navigate("/forgotpassword")
    }

    const dispatch = useDispatch();
    const signupStatus = useSelector( (state) => state.signUp.status)
    const isLoading = useSelector((state) => state.signUp.loading)

    const formik = useFormik({
        initialValues: SignUpinitialValues,
        validationSchema: SignUpSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            dispatch(signupDataRequest());
    
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                dispatch(signupDataSuccess());
                console.log('Form values submitted:', values);
                resetForm(); 
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 1000);

            } catch (error) {
                dispatch(signupDataFailure(error));
            } finally {
                setSubmitting(false); 
            }
        },
    });
        
      

  return (
    <div className=' bg-JazzyJade max-w-full py-16'>
        <div className=' bg-EssenceViolet p-20 max-w-2xl mx-auto'>
            <h1 className=' capitalize fontFamily-customRoboto font-bold italic text-5xl'>helpdesk system</h1>
            <h4 className=' py-4 text-xl font-normal'>Signup here</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className=' max-w-lg mx-auto'>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        value={formik.values.username} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Username' 
                        className="mt-3 p-3 w-full border rounded-md"
                    />
                    {formik.errors.username && formik.touched.username ? (
                        <p className="text-red-500 text-start">{formik.errors.username}</p>
                    ) : null}


                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Password' 
                        className="mt-3 p-3 w-full border rounded-md"
                    />
                    {formik.errors.password && formik.touched.password ? (
                        <p className="text-red-500 text-start">{formik.errors.password}</p>
                    ) : null}


                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Email' 
                        className="mt-3 p-3 w-full border rounded-md"
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <p className="text-red-500 text-start">{formik.errors.email}</p>
                    ) : null}


                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white p-2 mt-4 max-w-48 rounded-md mb-4 hover:bg-blue-600">
                        Sign Up
                    </button>
                    <div className=' flex justify-between'>
                        <p className=' text-red-500 cursor-pointer' onClick={handleForgotpassword}>Forgot password</p>
                        <p className=' cursor-pointer font-normal' onClick={handleSignin}>Sign In</p>
                    </div>
                </div>
                <div className=' flex justify-center items-center mx-auto'>
                    {showSuccessMessage && signupStatus === "success" && (
                        <div className=' flex justify-center items-center flex-col'>
                        <BsCheck2Circle className=' text-blue-700 text-4xl'/>
                        <h3 className=' text-lg'>Registration successfull !</h3>
                        </div>
                    )}

                    {signupStatus === "pending" && (
                    <div className=' flex justify-center items-center flex-col'>
                        <HashLoader color="#0000FF" size={50}/>
                    </div>
                    )}
                    {signupStatus === "error" && (
                    <div className=' flex justify-center items-center flex-col'>
                        <RiErrorWarningLine/>
                        <h3>Something went worng !</h3>
                        <h3>{signupStatus.error}</h3>
                    </div>
                    )}
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp