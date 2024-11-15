// src/components/DoctorCard.js

import React from 'react';

const DoctorCard =
    (
        {
            doctor, onEdit,
            onDelete
        }
    ) => {
        return (
            <div className="doctor-card">
                <p>
                    {doctor.nev} -
                    {doctor.szak}
                </p>
                {/* <div className='btn-container'>
                    <button onClick={
                        () =>
                            onEdit(doctor)
                    }>
                        Szerkesztés
                    </button>
                    <button onClick={
                        () =>
                            onDelete(doctor._id)
                    }>
                        Törlés
                    </button>
                </div> */}
            </div>
        );
    };

export default DoctorCard;
