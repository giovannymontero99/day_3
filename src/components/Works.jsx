import React, { useEffect, useState } from 'react';
import './Works.css';






const Works = ()=>{

    const [data,setData] = useState([]);
    const [classActive,setClassActive] = useState(false);
    


    useEffect(()=>{
        const getData = ()=>{
            fetch('http://localhost:3000/')
                .then(res => res.json() )
                .then( data => setData(data));
        }
        getData();
    },[]);


    return(
        <div className='Works'>
            <div className='targets-section' >
                    { data.map( work => 
                        <div key={work.id} className='target' >
                            <div className='target-title'>{work.title}</div>
                            <div className='target-descip'>{work.descip}</div>
                            <div className='target-btn' >
                                <div className='btn-border' onClick={ e => e.target.classList.toggle('btn-in-active') }>
                                    <div className='btn-in'>
                                    </div>
                                </div>
                            </div>
                        </div> ) }
            </div>
        </div>
    )
}

export default Works;