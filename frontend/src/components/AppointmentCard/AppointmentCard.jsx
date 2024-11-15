// src/components/AppointmentCard.js

import React from 'react';

const AppointmentCard =
    (
        {
            appointment,
            onEdit,
            onDelete
        }
    ) => {
        return (<div className="nyito">
            <div
                className="appointment-card" >
                <p>
                    <span>
                        Páciens: &nbsp;
                    </span>
                    {appointment.patientName}
                </p>
                <p>
                    <span>
                        Orvos: &nbsp;
                    </span>
                    {appointment.doctorName}</p>
                <p>
                    <span>
                        Időpont: &nbsp; 
                    </span>
                    {
                        new Date(appointment.date)
                            .toLocaleDateString()
                    }
                </p>
                {/* <div className='btn-container'>
                    <button onClick={
                        () =>
                            onEdit(appointment)
                    }>
                        Szerkesztés
                    </button>
                    <button onClick={
                        () =>
                            onDelete(appointment._id)
                    }>
                        Törlés
                    </button>
                </div> */}

            </div>
            </div>
        );
    };

export default AppointmentCard;
