import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-[400px] card shadow-lg px-8 py-6'>
                <h1 className='text-center text-xl mb-4'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>
                        <span className='label-text'>Login</span>
                    </label>
                    <input {...register('email')} className="input input-bordered w-full mb-4" />
                    <label className='label'>
                        <span className='label-text'>Password</span>
                    </label>
                    <input {...register('password')} className="input input-bordered w-full" />
                    <label className='label mb-4'>
                        <span className='label-text-alt'>Forgot password?</span>
                    </label>
                    <input type="submit" className='btn w-full mb-2' />
                    <div className='flex justify-center mb-4'>
                        <span className='font-light text-sm'>New to doctors portal? <span className='text-primary'>Create new account</span></span>
                    </div>
                    <h2 className='text-center border-b border-gray-300 leading-[1px] mb-6'>
                        <span className='bg-white px-3'>OR</span>
                    </h2>
                    <button className="btn btn-outline w-full capitalize text-xl font-normal">Continue with google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;