import React from 'react';
import ColourComponent from './ColourComponent';

function Component2() {
    return (
        <div>
            <ColourComponent
                color="pink"
                name="Akshay"
                message="We are learning Full Stack Web Development."
                text="black"
            />
            <ColourComponent
                color="cyan"
                name="Manisha"
                message="We are learning React."
                text="white"
            />
            <ColourComponent
                color="#345678"
                name="Ankit"
                message="We are learning JavaScript."
                text="red" />
            <ColourComponent />
        </div>
    );
}

export default Component2;
