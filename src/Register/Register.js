import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-[400px] card shadow-lg px-8 py-6'>
                <h1 className='text-center text-xl mb-4'>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>
                        <span className='label-text'>Name</span>
                    </label>
                    <input {
                        ...register('name', { required: 'Provide your name' })
                    } className="input input-bordered w-full mb-4" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    <label className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input {
                        ...register('email', { required: 'Provide your email' })
                    } className="input input-bordered w-full mb-4" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    <label className='label'>
                        <span className='label-text'>Password</span>
                    </label>
                    <input {...register(
                        'password',
                        {
                            required: 'Provide your password',
                            minLength: { value: 6, message: 'Password at least 6 characters longer' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password needs to be stronger' }
                        })}
                        className="input input-bordered w-full" />
                    <label className='label'>
                        <span className='label-text-alt'>Forgot password?</span>
                    </label>
                    {errors.password && <p className='text-red-600  mb-4'>{errors.password?.message}</p>}
                    <input type="submit" className='btn w-full mb-2' />
                    <div className='flex justify-center mb-4'>
                        <span className='font-light text-sm'>Already have an account? <span className='text-primary'>Login</span></span>
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

export default Register;