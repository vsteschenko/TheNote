import React, { useState, useEffect } from 'react';
import Tiptap from './ui/tiptap';
import axios from 'axios';

interface NotePickerProps {
    newNoteTitle: string;
    setNewNoteTitle: (title: string) => void;
}

const NotePicker: React.FC<NotePickerProps> = ({ newNoteTitle, setNewNoteTitle }) => {
    const [content, setContent] = useState<string>('');
    const [savedToken, setSavedToken] = useState<string>(''); // Assuming you manage the token state here

    const handleContentChange = (newContent: string) => {
        const cleanedContent = newContent.replace(/<\/?p>/g, ''); // Remove <p> and </p> tags

        setContent(cleanedContent); // Update content state
        setNewNoteTitle(cleanedContent); // Update newNoteTitle state
    };

    useEffect(() => {
        if (content) { // Only run the effect if content is not empty
            axios.post('https://lovely-project-with-oleg-e553e563fe5a.herokuapp.com/note/', {
                text: content,
            }, {
                headers: { Authorization: `Token ${savedToken}` }
            }).then(response => console.log(response))
                .catch(error => console.error(error)); // Handle errors
        }
    }, [content, savedToken]); // Dependencies array, effect runs when content or savedToken changes

    return (
        <form className=' w-full place-items-center h-[240px] pt-10 mb-10'>
            <Tiptap
                content={content}
                onChange={handleContentChange}
            />
        </form>
    );
};

export default NotePicker;