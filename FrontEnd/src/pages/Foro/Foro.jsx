import React from 'react';

import { faqData } from "./preguntas";

const Foro = () => {

    return (
        <>
            <div className='container mt-5'>
                <div className='alert alert-dark display-1' style={{ textAlign: 'center' }}>Preguntas Frecuentes</div>
                <ul className='list-group'>
                     {faqData.map((item, index) => (
                        <li key={index} className='list-group-item'>
                            <strong>{index + 1}. {item.question}</strong>
                            <p>{item.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}
export default Foro;
