import React, { useState } from 'react'
import { useFormik } from 'formik';
import ForgotPasswordinitialValues from '../utils/ForgotPasswordinitialValues'
import { ForgotPasswordSchema } from '../utils/ForgotPasswordSchema';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { BsCheck2Circle } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import {forgotDataRequest, forgotDataSuccess, forgotDataFailure} from '../Redux/actions/forgotPassword'
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();


    const handleSignin = () =>{
        navigate("/signin")
    }

    const handleForgotpassword = () =>{
        navigate("/forgotpassword")
    }

    const dispatch = useDispatch();
    const forgotpasswordStatus = useSelector((state) => state.forgot.status)
    const isLoading = useSelector((state) => state.forgot.loading)

    const formik = useFormik({
        initialValues: ForgotPasswordinitialValues,
        validationSchema: ForgotPasswordSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            dispatch(forgotDataRequest());
    
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                dispatch(forgotDataSuccess());
                console.log('Form values submitted:', values);
                resetForm(); 

                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 1000);

            } catch (error) {
                dispatch(forgotDataFailure(error));
            } finally {
                setSubmitting(false); 
            }
        },
    });
        
      

  return (
    <div className=' bg-JazzyJade max-w-full py-16'>
        <div className=' bg-EssenceViolet p-20 max-w-2xl mx-auto'>
            <h4 className=' py-4 font-normal'>Don’t worry, Enter your email below and we will 
            send you a link to change password. 
            </h4>
                <form onSubmit={formik.handleSubmit}>
                    <div className=' max-w-lg mx-auto'>
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

                        <div className=' flex justify-center items-center mx-auto flex-col'>
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full bg-blue-500 text-white p-2 mt-6 max-w-48 rounded-md hover:bg-blue-600">
                                Submit
                            </button>
                            <button 
                                type="submit" 
                                onClick={handleSignin}
                                className="w-full bg-blue-500 text-white p-2 mt-4 max-w-48 rounded-md hover:bg-blue-600">
                                Sign In
                            </button>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center mx-auto'>
                        {showSuccessMessage && forgotpasswordStatus === "success" && (
                            <div className=' flex justify-center items-center flex-col'>
                            <BsCheck2Circle className=' text-blue-700 text-4xl'/>
                            <h3 className=' text-lg'>Registration successfull !</h3>
                            </div>
                        )}

                        {forgotpasswordStatus === "pending" && (
                        <div className=' flex justify-center items-center flex-col'>
                            <HashLoader color="#0000FF" size={50}/>
                        </div>
                        )}
                        {forgotpasswordStatus === "error" && (
                        <div className=' flex justify-center items-center flex-col'>
                            <RiErrorWarningLine/>
                            <h3>Something went worng !</h3>
                            <h3>{forgotpasswordStatus.error}</h3>
                        </div>
                        )}
                    </div>
                </form>
        </div>
    </div>
  )
}

export default ForgotPassword