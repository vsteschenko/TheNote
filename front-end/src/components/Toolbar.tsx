import React from 'react';
import { Editor, isActive } from '@tiptap/react';
import {
    Hold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Underline,
    Quote,
    Undo,
    Redo,
    Code,
    Bold,
} from 'lucide-react';

type Props = {
    editor: Editor | null;
    content: string;
};

const Toolbar = ({ editor, content }: Props) => {
    if (!editor) {
        return null;
    }

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, command: string) => {
        e.preventDefault();
        editor.chain().focus().toggleMark(command).run();
    };

    const renderButton = (command: string, Icon: React.ElementType, isActive: boolean) => (
        <button
            onClick={(e) => handleButtonClick(e, command)}
            className={
                isActive
                    ? 'bg-slate-500 text-white p-2 rounded-lg border-2 border-slate-400 block'
                    : 'bg-slate-50 text-teal-500 outline-teal-700 border-2 p-2 rounded-lg block border-teal-500'
            }
        >
            <Icon size={18} />
        </button>
    );

    return (
        <div className="px-2 py-2 bg-slate-200 rounded-tl-md rounded-tr-md flex justify-between items-start gap-4 w-full flex-wrap border-2 shadow-xl">
            <div className="flex justify-start items-center gap-3 w-full lg:w-10/12 flex-wrap">
                {renderButton('bold', Bold, editor.isActive('bold'))}
                {renderButton('italic', Italic, editor.isActive('italic'))}
                {renderButton('underline', Underline, editor.isActive('underline'))}
            </div>
        </div>
    );
};

export default Toolbar;
