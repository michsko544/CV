import React from 'react';
import './Main.css';
import Title from './Title.jsx';

const Main = (props) => {
    return (
        <main>
            <section className="main">
                {props.firstPage ? <Title data={props.data.personalData}/> : ""}
                {props.children}
            </section>
        </main>
    )
}

export default Main
