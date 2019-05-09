import './styles.scss';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import highland from "highland";
import $ from "jquery";
const _ = highland;

const mouse$ = _("mousemove", $(document))
    .map(e => ({
        x: e.clientX,
        y: e.clientY
    }));

const MouseTracker = props => (
    <div className="mouse-tracker">
        ({props.x || 0}, {props.y || 0})
    </div>
);

const App = () => {
    const [pos, setPos] = useState({ x: 0, y: 0});

    useEffect(() => {
        mouse$.each(e => {
            console.log(e)
            setPos({
                x: e.x,
                y: e.y
            });
        });
    }, []);
    
    return (
        <div className="container">
            <MouseTracker x={pos.x} y={pos.y} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#app"));
