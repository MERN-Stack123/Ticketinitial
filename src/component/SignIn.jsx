import React, { useState } from 'react'
import { useFormik } from 'formik';
import SignIninitialValues from '../utils/SignIninitialValues'
import { SignInSchema } from '../utils/SignInSchema';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { BsCheck2Circle } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import {signinDataRequest, signinDataSuccess, signinDataFailure} from '../Redux/actions/signIn'
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();


    const handleSignup = () =>{
        navigate("/signup")
    }

    const handleForgotpassword = () =>{
        navigate("/forgotpassword")
    }

    const dispatch = useDispatch();
    const signinStatus = useSelector( (state) => state.signIn.status)
    const isLoading = useSelector((state) => state.signIn.loading)

    const formik = useFormik({
        initialValues: SignIninitialValues,
        validationSchema: SignInSchema,
        onSubmit: async (values, { setSubmitting }) => {
            dispatch(signinDataRequest());
    
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                dispatch(signinDataSuccess());
                console.log('Form values submitted:', values);
                formik.resetForm(); 
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 1000);

            } catch (error) {
                dispatch(signinDataFailure(error));
            } finally {
                setSubmitting(false); 
            }
        },
    });
        
      

  return (
    <div className=' bg-JazzyJade max-w-full py-16'>
        <div className=' bg-EssenceViolet p-20 max-w-2xl mx-auto'>
            <h1 className=' capitalize fontFamily-customRoboto font-bold italic text-5xl'>helpdesk system</h1>
            <h4 className=' py-4 text-xl font-normal'>Signin here</h4>
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

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-PressingmyLuck text-white p-2 mt-4 max-w-48 rounded-md mb-4 hover:bg-PressingmyLuck">
                        Sign In
                    </button>
                    <div className=' flex justify-between'>
                        <p className=' text-red-500 cursor-pointer' onClick={handleForgotpassword}>Forgot password</p>
                        <p className=' cursor-pointer font-normal' onClick={handleSignup}>Sign Up</p>
                    </div>
                </div>
                <div className=' flex justify-center items-center mx-auto'>
                    {showSuccessMessage && signinStatus === "success" && (
                        <div className=' flex justify-center items-center flex-col'>
                        <BsCheck2Circle className=' text-blue-700 text-4xl'/>
                        <h3 className=' text-lg'>Login successful! Welcome back.</h3>
                        </div>
                    )}

                    {signinStatus === "pending" && (
                    <div className=' flex justify-center items-center flex-col'>
                        <HashLoader color="#0000FF" size={50}/>
                    </div>
                    )}
                    {signinStatus === "error" && (
                    <div className=' flex justify-center items-center flex-col'>
                        <RiErrorWarningLine/>
                        <h3>Something went worng !</h3>
                        <h3>{signinStatus.error}</h3>
                    </div>
                    )}
                </div> 
            </form>
        </div>
    </div>
  )
}

export default SignIn