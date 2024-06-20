import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from '@/components/Toolbar'

const Tiptap = ({ onChange, content }) => {
    const handleChange = (newContent: string) => {
        onChange(newContent)
    }

    const editor = useEditor({
        extensions: [StarterKit],
        editorProps: {
            attributes: {
                class: 'flex flex-col px-4 py-3 justify-start border-b border-r border-l text-slate-800 items-start w-full gap-2 font-medium text-[1rem] pt-4 rounded-bl-md rounded-br-md bg-slate-50 outline-none',
            },
        },
        onUpdate: ({ editor }) => {
            handleChange(editor.getHTML())
        },
    })

    return (
        <div className='w-full px-4'>
            <Toolbar editor={editor} content={content} />
            <EditorContent style={{ whiteSpace: 'pre-line' }} editor={editor} />
        </div>
    )
}

export default Tiptap
