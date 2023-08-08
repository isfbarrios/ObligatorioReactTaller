import React, { useState, useEffect, useRef } from 'react';
import LogOut from './LogOut';
import Panels from './Panels';

function Header({ handleSession }) {

    const h1 = useRef();

    const ti = () => {
        const fechahora = new Date();
        return `${fechahora.getHours()}:${fechahora.getMinutes()}:${fechahora.getSeconds()}`;
    };

    useEffect(() => {
        const cl = setInterval(() => {
            h1.current.innerHTML = `${ti()}`;
        }, 1000);
        return () => clearInterval(cl);
    }, []);


    return (
        <header className="toolbar">
            <div className="sections">
                <div className="section-container">
                    <Panels />
                    <div className="time-panel">
                        <span ref={h1}>{ti()}</span>
                    </div>
                    <LogOut handleSession={handleSession} />
                </div>
            </div>
        </header>
    )
}

export default Header