import { useState } from 'react';
import Modal from '../Modal/Modal.js';
import './Card.css';


export default function Card({ data, handleClick }) {
    const [isSelected, setIsSelected] = useState(false);

    function showModal() {
        setIsSelected(true);
    }
    function closeModal() {
        setIsSelected(false);
    }
    return (
        <div className='card-main'>
            <img src={data.image} alt={data.name} />
            <div className='container'>
                <p>{data.name}</p>
                <button onClick={showModal}>Open Modal</button>
                <hr />
                {isSelected && <Modal data={data} onClick={closeModal} />}
            </div>
        </div>
    );
    
}