import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../../css/TarjetasSedes.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const TarjetaSedes = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [sedes, setSedes] = useState([
        { name: 'Ave María', cc: '106168777', address: 'Calle 28N 6A 204' }
    ]);
    const [newName, setNewName] = useState('');
    const [newCc, setNewCc] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);
    const openEditModal = (index) => {
        setEditIndex(index);
        setNewName(sedes[index].name);
        setNewCc(sedes[index].cc);
        setNewAddress(sedes[index].address);
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => setIsEditModalOpen(false);

    const addSede = () => {
        if (newName && newCc && newAddress) {
            setSedes([...sedes, { name: newName, cc: newCc, address: newAddress }]);
            setNewName('');
            setNewCc('');
            setNewAddress('');
            closeAddModal();
        }
    };

    const updateSede = () => {
        if (newName && newCc && newAddress && editIndex !== null) {
            const updatedSedes = [...sedes];
            updatedSedes[editIndex] = { name: newName, cc: newCc, address: newAddress };
            setSedes(updatedSedes);
            setNewName('');
            setNewCc('');
            setNewAddress('');
            closeEditModal();
            setEditIndex(null);
        }
    };

    return (
        <>
            <button className="add-button" onClick={openAddModal}>
                <FontAwesomeIcon icon={faPlus} /> Añadir Sede
            </button>

            <main>
                <div className="background-circle circle-left"></div>
                <div className="background-circle circle-right"></div>

                <div className="card-container">
                    {sedes.map((sede, index) => (
                        <div className="card" key={index}>
                            <div className="icon"><FontAwesomeIcon icon={faHouse} /></div>
                            <h3>{sede.name}</h3>
                            <div className="actions" onClick={() => openEditModal(index)}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <br />
                            <hr />
                            <div className="info">
                                <strong>Administrador</strong>
                                <p>CC: {sede.cc}</p>
                                <p>{sede.address}</p>
                            </div>
                            <div className="progress-bar"></div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal de Añadir */}
            {isAddModalOpen && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeAddModal}>&times;</span>
                        <h3>Añadir Tarjeta</h3>
                        <input type="text" id="nameInput" placeholder="Nombre" value={newName} onChange={(e) => setNewName(e.target.value)} />
                        <input type="text" id="ccInput" placeholder="CC" value={newCc} onChange={(e) => setNewCc(e.target.value)} />
                        <input type="text" id="addressInput" placeholder="Dirección" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
                        <button onClick={addSede}>Guardar</button>
                    </div>
                </div>
            )}

            {/* Modal de Editar */}
            {isEditModalOpen && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeEditModal}>&times;</span>
                        <h3>Editar Tarjeta</h3>
                        <input type="text" placeholder="Nombre" value={newName} onChange={(e) => setNewName(e.target.value)} />
                        <input type="text" placeholder="CC" value={newCc} onChange={(e) => setNewCc(e.target.value)} />
                        <input type="text" placeholder="Dirección" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
                        <button onClick={updateSede}>Actualizar</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default TarjetaSedes;