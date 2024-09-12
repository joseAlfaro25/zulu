import React, { useState } from "react";
import "./_ParticipantsTable.styles.scss";

interface Participant {
  id: number;
  fullName: string;
  email: string;
  status: string;
  role: string;
}

const initialParticipants: Participant[] = [
  {
    id: 1,
    fullName: "Juan Pérez",
    email: "juan@example.com",
    status: "Activo",
    role: "Asistente",
  },
  {
    id: 2,
    fullName: "Maria Gomez",
    email: "maria@example.com",
    status: "Pendiente",
    role: "Ponente",
  },
  {
    id: 3,
    fullName: "Carlos Ruiz",
    email: "carlos@example.com",
    status: "Inactivo",
    role: "Expositor",
  },
];

const Table = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredParticipants = participants.filter(
    (participant) =>
      participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    setParticipants(
      participants.map((participant) =>
        participant.id === id
          ? { ...participant, status: newStatus }
          : participant
      )
    );
  };

  const handleRoleChange = (id: number, newRole: string) => {
    setParticipants(
      participants.map((participant) =>
        participant.id === id ? { ...participant, role: newRole } : participant
      )
    );
  };

  return (
    <div className="participants-table-wrapper">
      <h2>Gestión de Participantes</h2>

      {/* Campo de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nombre o correo"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Tabla de participantes */}
      <table className="participants-table">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Correo Electrónico</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredParticipants.length > 0 ? (
            filteredParticipants.map((participant) => (
              <tr key={participant.id}>
                <td>{participant.fullName}</td>
                <td>{participant.email}</td>
                <td>
                  <select
                    value={participant.status}
                    onChange={(e) =>
                      handleStatusChange(participant.id, e.target.value)
                    }
                  >
                    <option value="Activo">Activo</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </td>
                <td>
                  <select
                    value={participant.role}
                    onChange={(e) =>
                      handleRoleChange(participant.id, e.target.value)
                    }
                  >
                    <option value="Asistente">Asistente</option>
                    <option value="Ponente">Ponente</option>
                    <option value="Expositor">Expositor</option>
                    <option value="Voluntario">Voluntario</option>
                    <option value="Organizador">Organizador</option>
                  </select>
                </td>
                <td>
                  <button className="btn-edit">Editar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="no-results">
                No se encontraron participantes
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
