"use client"
import axios from 'axios'
import { Button } from '../../components/ui/button'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import NewNoteDialog from '@/components/CreateNoteDialog'

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
            })
            .then(async (response) => {
                const notesArray = response.data.map((item: { text: string }) => item.text);
                const userArray = response.data.map((item: { user: any }) => item.user);
                const dateArray = response.data.map((item: { date: string | number | Date }) => {
                    const date = new Date(item.date);
                    return date.toLocaleString();
                });
                setNotes(notesArray);
                setUser(userArray);
                setDate(dateArray);
            })
            .catch((error) => { console.log(error); })
    }, [])

    return (
        <div className="p-10 w-full border-2">
            <div className="m-auto">
                <div className="rounded-md rounded-r-md flex justify-between flex-col items-center md:flex-row border-slate-300 bg-inherit">
                    <div className="flex items-center">
                        <Link href="/">
                            <Button className='first-letter:rounded-l-md h-full hover:bg-slate-800 hover:text-white ease-in-out transition-all duration-200' variant={"outline"}>
                                <ChevronLeft className="" strokeWidth={2} />Back
                            </Button>
                        </Link>
                        <div className="w-30 font-bold text-2xl">
                            <h1 className='font-semibold font-mono p-2'>Notes</h1>
                        </div>
                        <Link href="./sign-in"></Link>
                        <NewNoteDialog />
                    </div>
                </div>
            </div>
            <div className="grid sm:col-3 span-col-3 md:col-5 col-1 gap-3 first-letter:h-full text-center">
                {notes.length === 0
                    ? <h1 className='text-gray-500'>No notes yet.</h1>
                    : notes.map((note, index) => (
                        <div key={index} className='hover:shadow-xl ease-in-out duration-300 w-full mt-3 border-2 border-slate-300 p-4 rounded-lg'>
                            <p className='text-left h-40 gap-2 p-2'>{note}</p>
                            <div className='flex gap-2 text-slate-500 border-t pt-4 border-slate-300'>
                                <p className='text-slate-300'>author: {user[index]}</p>
                                <p>created: {date[index]}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default DashboardPage
// import axios from 'axios'
// import { Button } from '../../components/ui/button'
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { ChevronLeft } from 'lucide-react'
// import NewNoteDialog from '@/components/CreateNoteDialog'

// type Props = {};
// const DashboardPage = () => {
//     const [notes, setNotes] = useState([]);
//     const [user, setUser] = useState([]);
//     const [date, setDate] = useState([]);

//     useEffect(() => {
//         const token = localStorage.getItem("Token")
//         axios.get("https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/note/"
//             , {
//                 headers:
//                 {
//                     Authorization: `Token ${token}`
//                 }
//             }
//         )


//             .then(async (response) => {
//                 const notesArray = response.data.map((item: { text: string }) => item.text);
//                 const userArray = response.data.map((item: { user: any }) => item.user);
//                 const dateArray = response.data.map((item: { date: string | number | Date }) => {
//                     const date = new Date(item.date);
//                     return date.toLocaleString();
//                 });
//                 setNotes(notesArray);
//                 setUser(userArray);
//                 setDate(dateArray);
//                 //console.log(notesArray);

//                 // console.log(userArray);
//                 // console.log(response.data);
//                 // console.log(dateArray);

//             }
//             )
//             .catch((error) => { console.log(error); })
//     }, [])


//     const handleNotes = async () => { }

//     return (

//         <div className=" p-10 w-full border-2">
//             <div className="m-auto">
//                 <div className=" rounded-md rounded-r-md  flex justify-between flex-col items-center md:flex-row  border-slate-300 bg-inherit">
//                     <div className=" flex items-center">
//                         <Link href="/"><Button className=' first-letter:rounded-l-md h-full hover:bg-slate-800 hover:text-white ease-in-out transition-all duration-200' variant={"outline"}><ChevronLeft className="" strokeWidth={2} />Back </Button></Link>
//                         <div className="w-30  font-bold text-2xl ">
//                             <h1 className=' font-semibold font-mono p-2'> Notes</h1>
//                         </div>
//                         <Link href="./sign-in"></Link>
//                         <NewNoteDialog />
//                     </div>

//                 </div>
//             </div>
//             <div className=" grid sm:col-3 span-col-3 md:col-5 col-1 gap-3 first-letter:h-full text-center">
//                 <div className='hover:border-slate-900'>

//                 </div>
//                 {notes === null || notes.length === 0
//                     ? <h1 className='text-gray-500'>No notes yet.</h1>
//                     : notes.map((note, index) => (
//                         <>
//                             <div key={index} className=' hover:shadow-xl ease-in-out duration-300  w-full mt-3 border-2 border-slate-300 p-4 rounded-lg'>
//                                 {/* Note body */}
//                                 <p className='text-left h-40 gap-2 p-2'>{note}</p>
//                                 <div className='flex gap-2 text-slate-500 border-t pt-4 border-slate-300f'>
//                                     <p className='text-slate-300'> author: {user[index]}</p>
//                                     <p className=''> created: {date[index]}</p>
//                                 </div>
//                             </div>
//                         </>
//                     ))}

//             </div>
//         </div>

//     )
// }

// export default DashboardPage