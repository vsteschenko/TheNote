"use client"

import { useState, useEffect } from "react";
import { Key, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import axios from "axios";
import { useRouter } from "next/navigation";

// interface handleSubmit {
//     userName: string;
//     password: string
// }

export default function Page() {
    // const [token, setToken] = useState('')
    const [userName, setUsername] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token, setToken] = useState(() => {
        // Retrieve the token from local storage when initializing state
        if (typeof window !== 'undefined') {
            const savedToken = localStorage.getItem('token');
            return savedToken ? savedToken : '';
        }
        return '';
    }); const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!userEmail || !userName || !userPassword) {
            console.error('All fields are required');
            return;
        }
        // Continue with the axios request...

        await axios.post('https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/signup/', {
            email: userEmail,
            username: userName,
            password: userPassword
        })
            .then((response) => {
                console.log(response);

                if (response.data.token) {
                    const newToken = response.data.token;
                    setToken(newToken);
                    localStorage.setItem('token', token);
                    router.push('/dashboard')
                };
            })
            .then()
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <form
                className="flex   border-slate-300 border-2 flex-col mx-auto mt-40 w-2/5 min-w-[400px] max-w-[400px] h-[420px] bg-slate-50 items-center align-middle rounded-md shadow-lg "
                onSubmit={handleSubmit}>
                <div className=" py-2 my-10 w-4/5">
                    <div className="gap-2 items-center flex flex-col " >
                        <h1
                            className="mt-2 text-center font-bold lowercase text-xl "
                        >SignUp</h1>
                        <input
                            className="block bg-slate-50 border-2 p-2 rounded-md w-full border-slate-200 hover:border-slate-300 hover:border-2 ease-in-out duration-300 text-lg focus:outline-none" type="email"
                            placeholder="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)} />

                        <input
                            className="block bg-slate-50 border-2 p-2 rounded-md w-full border-slate-200 hover:border-slate-300 hover:border-2 ease-in-out duration-300 focus:outline-none
                            text-lg"
                            type="text"
                            placeholder="username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)} />

                        <input
                            className="block bg-slate-50 border-2 p-2 rounded-md w-full border-slate-200 hover:border-slate-300 hover:border-2 ease-in-out duration-300 focus:outline-none
                            text-lg"
                            type="password"
                            placeholder="password"
                            value={userPassword}
                            onChange={(e) => setPassword(e.target.value)} />

                        <button
                            type="submit"
                            className="block border-teal-500 border-2  p-2 rounded-md my-2 w-full text-teal-500 hover:bg-slate-700 hover:text-slate-50  hover:border-2 ease-in-out duration-300 active:border-slate-300 contrast-more:border-purple-400 focus:outline-none
                            font-bold text-xl"
                        > sign up </button>
                        <div>
                            <div
                                className="font-bold mt-6 flex flex-col justify-center align-middle pb-20 "
                            >
                                <Link href="/sign-in"
                                    className=" flex m-4  text-teal-500 items-center justify-center align-middle"
                                > <ArrowLeft />Back to signin</Link></div>
                        </div>
                    </div>
                </div>
            </form >

        </>
    )

}
