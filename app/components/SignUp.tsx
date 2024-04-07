
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Field from './Input'
import Button from './Button'
import { useUserContext } from '@/provider/authProvider';
import {postUser} from './actions'
const ComponentHeader = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { user, setUser }: any = useUserContext();
    const [isSignUp, setIsSignUp] = useState(user.isLoggedUser);
    const { updateTask }: any = useUserContext();

    const handleSubmit = async () => {
        if(password===confirmPassword){
            if(await postUser(fullName,email,username,password)){
                alert('Registered user, Login')
                router.push("/login");
            }else{
                alert('Registration error');
            }
        }else{
            alert('Passwords do not work')
        }
    };

    const handleBackToLoginClick = () => {
        setIsSignUp(false);
        router.push("/login");
    };
    const endSesion = () => {
        updateTask(user.user, false);
        router.push("/");
    };
    return (
        <div className='bg-darkBlue rounded-3xl py-10 drop-shadow-lg m-11 stack md:m-5 md:flex md:flex-col md:items-center md:pr-7 md:pl-7'>
            <div className="justify-center flex items-center rounded-full mb-4">
                <Image className='m-3 w-18 h-18 md:w-30 md:h-30' src='/user.png' alt="Screenshots of the dashboard" width={100} height={100} />
            </div>
            <h2 className="text-center text-3xl font-semibold text-turquoise">
                {isSignUp ? user.user.name : 'Sign Up'}
            </h2>
            <div className="justify-center w-full md:flex">
                {!isSignUp ? (
                    <>
                        <div className="flex flex-col items-center my-4 mx-2">
                            <Field text_Field={email} setText_Field={setEmail} titule={'Email:'} type={"text"} name={"email"} />
                            <Field text_Field={fullName} setText_Field={setFullName} titule={'Full Name:'} type={"text"} name={"full-name"} />
                            <Field text_Field={username} setText_Field={setUsername} titule={'Username:'} type={"text"} name={"username"} />
                        </div>
                        <div className="flex flex-col items-center my-4 mx-2">
                            <Field text_Field={password} setText_Field={setPassword} titule={'Password:'} type={"password"} name={"password"} />
                            <Field text_Field={confirmPassword} setText_Field={setConfirmPassword} titule={'Confirm Password:'} type={"password"} name={"confirm-password"} />
                            <Button width={"350px"} title={"Sign Up"} purpose={handleSubmit} />
                            <div color="black" className="mt-4 text-center font-normal text-teal-400">
                                Have an account?{" "}
                                <button className="font-medium text-gray-900 text-lg text-white" onClick={handleBackToLoginClick}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
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
                )}
            </div>
        </div>

    );
    };
    export default ComponentHeader;