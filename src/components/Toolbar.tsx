import React from 'react';
import { Editor, isActive } from '@tiptap/react';
import {
    // Hold,
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
import '@/components/ui/tiptap';

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
        switch (command) {
            case 'bold':
                editor.chain().focus().toggleBold().run();
                break;
            case 'italic':
                editor.chain().focus().toggleItalic().run();
                break;
            case 'underline':
                editor.chain().focus().toggleUnderline().run();
                break;
            case 'strikethrough':
                editor.chain().focus().toggleStrike().run();
                break;
            case 'list':
                editor.chain().focus().toggleBulletList().run();
                break;
            case 'listOrdered':
                editor.chain().focus().toggleOrderedList().run();
                break;
            case 'heading':
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                break;
            case 'quote':
                editor.chain().focus().toggleBlockquote().run();
                break;
            case 'code':
                editor.chain().focus().toggleCodeBlock().run();
                break;
            case 'undo':
                editor.chain().focus().undo().run();
                break;
            case 'redo':
                editor.chain().focus().redo().run();
                break;
            default:
                break;
        }
    };

    const renderButton = (command: string, Icon: React.ElementType, isActive: boolean) => (
        <button
            onClick={(e) => handleButtonClick(e, command)}
            className={
                isActive
                    ? 'bg-slate-900 text-white p-2 rounded-lg border-2 border-white block'
                    : 'bg-50 text-slate-900  border-2 p-2 rounded-lg block border-slate-900'
            }
        >
            <Icon size={16} />
        </button>
    );

    return (
        <div className="px-2 py-2 bg-slate rounded-tl-md rounded-tr-md flex justify-between items-start gap-4 w-full flex-wrap border ">
            <div className="flex justify-between items-center gap-3 w-full flex-wrap">
                <div className='flex gap-2'>
                    {renderButton('bold', Bold, editor.isActive('bold'))}
                    {renderButton('italic', Italic, editor.isActive('italic'))}
                    {renderButton('underline', Underline, editor.isActive('underline'))}
                </div>
                <div className='flex gap-2'>
                    {renderButton('undo', Undo, editor.isActive('undo'))}
                    {renderButton('redo', Redo, editor.isActive('redo'))}
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
