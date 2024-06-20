"use client"
import axios from 'axios'
import { Button } from '../../components/ui/button'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Props = {};
const DashboardPage = () => {
    const [notes, setNotes] = useState([]);
    const [user, setUser] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("Token")
        axios.get("https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/note/"
            , {
                headers:
                {
                    Authorization: `Token ${token}`
                }
            }
        )
            .then(async (response) => {
                const notesArray = response.data.map((item: { text: any }) => item.text);
                const userArray = response.data.map((item: { user: any }) => item.user);
                const dateArray = response.data.map((item: { date: string | number | Date }) => {
                    const date = new Date(item.date);
                    return date.toLocaleString();
                });
                setNotes(notesArray);
                setUser(userArray);
                setDate(dateArray);
                // console.log(userArray);
                // console.log(response.data);
                console.log(dateArray);

            }
            )
            .catch((error) => { console.log(error); })
    }, [])


    const handleNotes = async () => { }

    return (

        <div className=" p-10 w-full ">
            <div className="m-auto">
                <div className=" rounded-md  flex justify-between flex-col items-center md:flex-row  border-slate-300 bg-inherit border-2 shadow-lg">
                    <div className=" flex items-center">
                        <Link href="/"><Button className='border-slate-300 bg-inherit border-r-2 hover:text-white ease-in-out duration-200 text-slate-400  ' ><ArrowLeft className="mr-1 h-5 w-5  " strokeWidth={2} />Back</Button></Link>
                        <div className="w-30 ml-2 font-bold text-2xl ">
                            <h1 className='uppercase font-medium'>The Notes</h1>
                        </div>
                        <Link href="./sign-in"></Link>
                        <div className='w-4'>

                        </div>
                        <Link href="/dashboard/new-note/" className='border-slate-300 bg-inherit border-l-2 hover:text-white ease-in-out duration-200 text-slate-400  ' >New</Link>
                    </div>
                </div>
                <div className="h-full text-center">
                    {notes === null || notes.length === 0
                        ? <h1 className='text-gray-500'>No notes yet.</h1>
                        : notes.map((note, index) => (
                            // Card
                            <div key={index} className='hover:m-4 hover:shadow-sm ease-in-out duration-300  w-full mt-3 border-2 border-slate-300 p-4  shadow-lg rounded-lg'>
                                {/* Note body */}
                                <p className='text-left h-40 gap-2 p-2'>{note}</p>
                                <div className='flex gap-2 text-slate-500 border-t pt-4 border-slate-300f'>
                                    <p className='ext-slate-300'> author: {user[index]}</p>
                                    <p className=''> created: {date[index]}</p>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </div>
    )
}

export default DashboardPage