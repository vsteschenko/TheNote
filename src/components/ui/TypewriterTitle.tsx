import Typewriter from 'typewriter-effect'

import React from 'react'

type Props = {}

const TypewriterTitle = (props: Props) => {
    return (
        <Typewriter options={{
            loop: true,
        }}
            onInit={
                (typewriter) => {
                    typewriter.typeString('Take notes with ease.')
                        .pauseFor(2000)
                        .deleteAll()
                }
            } />
    )
}

export default TypewriterTitle