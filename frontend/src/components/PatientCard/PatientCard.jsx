import React from 'react';

const PatientCard =
    (
        {
            patient, onEdit,
            onDelete
        }
    ) => {
        return (
            <div className="patient-card">
                <h4>{patient.name}</h4>
                <p>Kor: {patient.age}</p>
                <p>Neme: {patient.gender}</p>
                <div className='btn-container'
                    style={{ width: "100%" }}>
                    <button onClick={
                        () =>
                            onEdit(patient)}>
                        Szerkesztés
                    </button>
                    <button onClick={
                        () =>
                            onDelete(patient._id)
                    }>
                        Törlés
                    </button>
                </div>
            </div>
        );
    };

export default PatientCard;
