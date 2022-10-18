import { useState } from "react";
import React from 'react';
import '../Styles/Child.css';
const Selection = (props) => {
    let [style, setStyle] = useState({background: ''});
    let applyColor = props.applyColor;
     return(
        <div className='fix-box' onClick={() => applyColor(setStyle)} style={style}>
            <h2 className="subheading">Selection</h2>

        </div>
     );
}

export default Selection;
