
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import axios from "axios"



export function NewNoteDialog() {


    const [newNoteTitle, setNewNoteTitle] = useState("new note")

    const handleNewNoteTitle = async (e: any) => {
        e.preventDefault();
        const savedToken = localStorage.getItem('Token');

        axios.post('https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/note/', {
            text: newNoteTitle,
        }, {
            headers: { Authorization: `Token ${savedToken}` }
        }).then(response => console.log(response))

    }
    // const handleNewNoteTitle = async (e: any) => {
    //     e.preventDefault();
    //     const savedToken = localStorage.getItem('token');
    //     console.log(savedToken);
    //     console.log(newNoteTitle);
    //     await axios.post('https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/note/', {
    //         text: newNoteTitle
    //     }, {
    //         headers: { Authorization: `Token ${savedToken}` }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="hover:bg-slate-800 hover:text-white ease-in-out duration-300 transition-all">New Note</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Note</DialogTitle>
                    <DialogDescription>
                        Type a title of your new note. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full p-2">
                    <div className=" items-center gap-4">
                        <Input
                            onChange={(e) => setNewNoteTitle(e.target.value)}
                            // onChange={() => handleNewNoteTitle()}
                            id="name"
                            defaultValue="new note title"
                            className="w-full rounded-md "
                            placeholder="New note title"
                        />
                    </div>
                </div>
                <DialogFooter className="flex gap-2 justify-between ease">
                    <Button type="reset" variant={"secondary"}
                        className="hover:bg-slate-700 hover:text-white ease-in-out transition-all duration-200 ">Cancel</Button>
                    <Button type="submit"
                        onClick={handleNewNoteTitle}
                        variant={"default"} className="hover:bg-slate-700 hover:text-white ease-in-out transition-all duration-200">Create new note</Button>

                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
export default NewNoteDialog