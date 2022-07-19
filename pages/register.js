import React, { useContext, useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid';
import Link from "next/link";
import { useForm } from 'react-hook-form';
import axios from "axios";
import {useRouter} from "next/router";
import { Store } from "../utils/Store";
import Head from 'next/head';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';



  const Register = () => {
      const {
        register,
        handleSubmit,
        // control,
        formState: { errors },
      } = useForm();

    const router = useRouter();
    const {state,dispatch} = useContext(Store)
    const {userInfo} = state;
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    useEffect(() => {
      if(userInfo){
          router.push( "/")
      }
  }, []);
  const submitHandler = async ({name, email, password, confirmPassword}) => {
    closeSnackbar();
    if (password!== confirmPassword){
      enqueueSnackbar("Password don't match",{variant: "error"})
      return;
    }
    try {
        const {data} = await axios.post("/api/users/register",{name, email, password})
        dispatch({type:"USER_LOGIN",payload:data})
        Cookies.set("userInfo",JSON.stringify(data))
        router.push("/")
        
    } catch (error) {
        alert(error.message)
    }
    

}

  return (
    <>
        <Head>
            <title>Register Page</title>
        </Head>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img    
              className="mx-auto h-12 w-auto"
              src="/images/image.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitHandler) } method="post" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  // name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  // name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  // name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.password.message}
                  </div>
                )}
                
              </div>
              <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                    </label>
                    <input
                    id="confirmPassword"
                    // name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                    {...register('confirmPassword', { required: true })}
                />
                {errors.confirmPassword && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.confirmPassword.message}
                  </div>
                )}
                </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Register
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p>
                    Already have an account?&nbsp; <Link href="/login">
                            <a className="text-yellow-500">
                                Login    
                            </a>
                        </Link>
                </p>
              </div>   
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;