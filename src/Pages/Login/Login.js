import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
    }
    return (
        <div className='flex h-screen items-center justify-center'>
            <div class="card  w-96  shadow-xl">
                <div class="card-body justify-center">
                    <h2 class="text-center font-bold text-xl">Login</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                    <div class="divider">OR</div>
                    <div class="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} class="btn w-full btn-primary">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;