import React, { useState } from 'react';
import Tiptap from './ui/tiptap';

const NotePicker: React.FC = () => {
    const [content, setContent] = useState<string>('');

    const handleContentChange = (newContent: string) => {
        setContent(newContent);
    };

    return (
        <form className='max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10'>
            <div className="max-w-3xl text-center text-sky-300 mb-10">NotePicker</div>
            <Tiptap
                content={content}
                onChange={handleContentChange}
            />
        </form>
    );
};

export default NotePicker;
