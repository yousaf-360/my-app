import React, { useState, useEffect } from 'react';
import './Modal.css';


export default function Modal({ data, onClick }) {
    const [isLoading, setIsLoading] = useState(false);
    const [homeData, setHomeData] = useState();

    const fetchHomeworld = async (data) => {
        const homeWorld = await fetch(data.homeworld);
        const dataHome = await homeWorld.json();
        setHomeData(dataHome);
        setIsLoading(true);
    }
    useEffect(() => {
        fetchHomeworld(data);
    }, []);
    if (!data) return null;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };

    return (
        <>
            {isLoading &&
                <>
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-button" onClick={onClick}>Close</button>
                            <div className="card">
                                <h1>{data.name}</h1>
                                <h2>Mass : {data.mass}</h2>
                                <h2>Height : {data.height}</h2>
                                <h2>Date person was added : {data.height}</h2>
                                <h2>Number of films person appears in  : {(data.films).length}</h2>
                                <h2>Created at : {formatDate(data.created)}</h2>
                                <h2>Home World  : {homeData.name}</h2>
                                <h2>Terrain  : {homeData.terrain}</h2>
                                <h2>Climate  : {homeData.climate}</h2>
                                <h2>Number of Residents  : {(homeData.residents).length}</h2>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}