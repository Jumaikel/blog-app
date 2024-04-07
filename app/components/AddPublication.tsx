'use client'
import React, { useState } from 'react';
import Field from './Input';
import Button from './Button';
import { post } from './actions';
import { useUserContext } from '@/provider/authProvider';
const ComponentHeader = () => {
    const { user } = useUserContext()!;
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = async () => {
        if (user.isLoggedUser) {
            if (await post(user.user.username, title, body)) {
                alert('Successful publication');
            }
        } else {
            alert('Publication failed');
        }
    };

    return (
        <div className='bg-darkBlue rounded-3xl py-5 drop-shadow-lg m-11 flex flex-col items-center pr-7 pl-7 w-max'>
            <div className="flex flex-col items-center my-4 lg:grid-cols-6 space-y-8">
                <Field text_Field={title} setText_Field={setTitle} titule={'Titulo'} type={"text"} name={"user"} />
                <Field text_Field={body} setText_Field={setBody} titule={'Descripción'} type={"text"} name={"user"} />
                <Button width={"350px"} title={"Post"} purpose={handleSubmit} />
                <a href="/" className="font-medium text-lg text-white cursor-pointer hover:text-teal-400">
                    Return
                </a>
            </div>
        </div>
    );
};

export default ComponentHeader;