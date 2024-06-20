"use client"

import { useState, useEffect } from "react";
import { Key } from 'lucide-react'
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'


const Page = () => {
    const [userName, setUsername] = useState('')
    const [userPassword, setPassword] = useState('')
    const [token, setToken] = useState("");
    const router = useRouter();

    /* useEffect(() => {
        // Store the token in local storage whenever it changes
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [token]); */


    //  const handleSubmit = async (event: any) => {
    //     event.preventDefault();
    //     const savedToken = localStorage.getItem('token');
    // };


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // const savedToken = localStorage.getItem('token');
        axios.post('https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/login/', {
            username: userName,
            password: userPassword
        })
            .then(function (response) {
                setToken(response.data.token);
                localStorage.setItem("Token", response.data.token)
                router.push('/dashboard')
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    //     axios.post('https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/login/', {
    //         username: userName,
    //         password: userPassword
    //     })
    //         .then(function (response) {
    //             setToken(response.data.token);
    //             router.push('/dashboard')
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    return (
        <>
            <form
                className="flex  border-slate-300 border-2 flex-col mx-auto mt-40 w-2/5 min-w-[400px] max-w-[400px] h-[420px] bg-slate-50 items-center align-middle rounded-md shadow-lg  "
                onSubmit={handleSubmit}>

                <div className=" p-2 my-10 h-60 w-4/5 ">
                    <div
                        className="rounded-md gap-2 items-center flex flex-col h-60 " >
                        <h1
                            className="mt-2 text-center font-bold lowercase text-xl "
                        >SignIn</h1>
                        <div className=" flex flex-col gap-2 w-full">
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
                                type="password "
                                placeholder="password"
                                value={userPassword}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button
                            type="submit"
                            className="block border-teal-500 border-2  p-2 rounded-md my-2 w-full text-teal-500 hover:bg-slate-700 hover:text-slate-50  hover:border-2 ease-in-out duration-300 active:border-slate-300 contrast-more:border-purple-400 focus:outline-none
                            font-bold text-xl"
                        > sign in </button>

                    </div>
                    <div>
                        <div
                            className="font-bold mt-6 flex items-center  justify-center align-middle  "
                        >
                            <p>dont have account?</p>
                            <Link href="/sign-up"
                                className=" flex m-4  text-teal-500 items-center justify-center align-middle"
                            >sign up</Link>
                        </div>
                    </div>
                </div>
            </form >
        </>
    )
}
export default Page;