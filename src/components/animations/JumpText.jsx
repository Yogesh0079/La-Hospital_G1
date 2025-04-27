import React from 'react';
import { animate } from 'animejs';
import { useEffect } from 'react';

const JumpText = ({inputText, loop, loopDelay}) => {
    console.log(inputText)
    useEffect(() => {
            animate('.main-animate-text',
                {
                // Property keyframes
                y: [
                { to: '1rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
                ],
                // Property specific parameters
                rotate: {
                    from: '-1turn',
                    delay: 0
                },
                delay: (_, i) => i * 50, // Function based value
                ease: 'inOutCirc',
                loopDelay: loopDelay,
                loop: loop
            }
        );
    }, []);
    return (
        <div className="jump-text">
            {inputText.split(' ').map((word, index) => (
                <span key={index} className="main-animate-word">
                    {word.split('').map((text, i) => {
                        console.log(text);
                        return <span key={i} className="main-animate-text">{text}</span>;
                    })}
                </span>
            ))}
        </div>
    );
};

export default JumpText;