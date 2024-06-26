"use client"
import { Button } from '@/components/ui/button'
import Tiptap from '@/components/ui/tiptap'
import Link from 'next/link'
import React from 'react'
// import NotePicker from '@/components/NotePicker'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className="min-h-screen">
                <div className="max-width-7xl mx-auto p-10">
                    <div className="h-14">
                        <div className="flex justify-between items-center md:flex-row flex-col"></div></div>
                    <div className="flex items-center">
                        <Link href="/">
                            <Button></Button></Link>
                    </div>             </div>
            </div>
        </>
        // <Tiptap />
        // <NotePicker />
    )
}

export default page