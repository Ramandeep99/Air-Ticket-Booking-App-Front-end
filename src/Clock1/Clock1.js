import React, { useEffect , useState } from "react";
import './Clock1.css'

const Clock = () => {

    var currentdate = new Date();
    var datetime = currentdate.toLocaleTimeString()

    const [count, setCount] = useState(datetime);

    const IncVal = () => {
 
        var currentdate = new Date();
        var currentDateTime = currentdate.toLocaleTimeString();
        setCount(currentDateTime);
    }

    setInterval(IncVal, 1000);

    return (
        <>
            <div className>
                <h1> {count} </h1>
            </div>

        </>
    )
}


const Clock1 = () => {

    //Make the DIV element draggagle:

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }

    }

    useEffect(() => {
        dragElement(document.getElementById("mydiv"));
    })

    return (

        <>
            <div id="mydiv">
                <div id="mydivheader"> Move </div>
                <Clock />
            </div>

        </>
    )
}

export default Clock1;