"use client";
import React, { useState } from 'react';
import Field from './Input';
import Button from './Button';
import Image from 'next/image';
import { useUserContext,UserLogged } from '@/provider/authProvider';
import { useRouter } from 'next/navigation';
import { fectUser } from './actions';

const ComponentHeader = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, updateTask } = useUserContext()!;
    const [isSignUp, setIsSignUp] = useState(user.isLoggedUser);


    const handleSubmit = async () => {
        const userDB = await fectUser(email);
        if (userDB.props.data.password === password) {
            alert("Session Started");
            const newUser = {
                _id: userDB.props.data.id,
                name: userDB.props.data.name,
                password: userDB.props.data.password,
                username: userDB.props.data.username
            }
            updateTask(newUser, true);
            router.push("/");
        } else {
            alert("Please try again")
        }
    };

    const handleSignUpClick = () => {
        router.push("/signup");
    };
    const endSesion = () => {
        updateTask(user.user, false);
        router.push("/");
    };

    return (
        <div className='bg-darkBlue rounded-3xl py-5 drop-shadow-lg m-11 flex flex-col items-center pr-7 pl-7'>
            <div className="flex justify-center bg-gray-100 rounded-full mb-5">
                <Image className='m-2' src='/user.png' alt="Screenshots of the dashboard" width={100} height={100} />
            </div>
            <h2 className="text-center text-3xl font-semibold text-turquoise">
                {isSignUp ? user.user.name : 'Login'}
            </h2>
            <div className="flex justify-center w-full">
                {isSignUp ? (
                    <>
                        <div className="flex flex-col items-center my-4 mx-2">
                            <Button width={"350px"} title={"Cerrar Sesión"} purpose={endSesion} />
                            <div color="black" className="mt-4 text-center font-normal text-black">
                                <a href="/" className="font-medium text-gray-900 text-lg text-white">
                                    Return
                                </a>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center my-4 w-full lg:grid-cols-6 space-y-8">
                        <Field text_Field={email} setText_Field={setEmail} titule={'Email:'} type={"text"} name={"email"} />
                        <Field text_Field={password} setText_Field={setPassword} titule={'Password:'} type={"password"} name={"password"} />
                        <Button width={"350px"} title={"Login"} purpose={handleSubmit} />
                        <div className="mt-4 text-center font-normal text-teal-400">
                            You don't have an account?{" "}
                            <button className="font-medium text-gray-900 text-lg text-white" onClick={handleSignUpClick}>
                                Sing Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentHeader;
