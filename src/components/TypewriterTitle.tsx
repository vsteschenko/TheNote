"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';

type Props = {};

const TypewriterTitle = (props: Props) => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter: any) => {
                typewriter.typeString('Keep your inspiration flowing!').start().pauseFor(2500).deleteAll().typeString('Write down your thoughts!').start().pauseFor(2500).deleteAll().typeString('Stay productive!')

            }}
        />
    );
};
export default TypewriterTitle;