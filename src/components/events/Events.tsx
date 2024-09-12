import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase"; // Importamos Firestore
import "./_ParticipantsTable.styles.scss"; // Archivo de estilos

const ParticipantsTable = () => {
  const [participants, setParticipants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchParticipants = async () => {
      const querySnapshot = await getDocs(collection(db, "registrations"));
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParticipants(data);
    };

    fetchParticipants();
  }, []);

  const handleStatusChange = async (id: any, newStatus: any) => {
    const participantDoc = doc(db, "registrations", id);
    await updateDoc(participantDoc, { status: newStatus });
    setParticipants((prev: any) =>
      prev.map((p: any) => (p.id === id ? { ...p, status: newStatus } : p))
    );
  };

  const handleRoleChange = async (id: any, newRole: any) => {
    const participantDoc = doc(db, "registrations", id);
    await updateDoc(participantDoc, { role: newRole });
    setParticipants((prev: any) =>
      prev.map((p: any) => (p.id === id ? { ...p, role: newRole } : p))
    );
  };

  const filteredParticipants = participants.filter(
    (p: any) =>
      p.fullName.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="participants-table-wrapper">
      <h2>Lista de Participantes</h2>

      <div className="search-bar">
        <input
          type="search"
          placeholder="Buscar por nombre o correo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="participants-table">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredParticipants.length > 0 ? (
            filteredParticipants.map((participant: any) => (
              <tr key={participant.id}>
                <td>{participant.fullName}</td>
                <td>{participant.email}</td>
                <td>{participant.phone}</td>
                <td>
                  <select
                    value={participant.role}
                    onChange={(e) =>
                      handleRoleChange(participant.id, e.target.value)
                    }
                  >
                    <option value="asistente">Asistente General</option>
                    <option value="ponente">Ponente</option>
                    <option value="expositor">Expositor</option>
                    <option value="voluntario">Voluntario</option>
                    <option value="organizador">Organizador</option>
                  </select>
                </td>
                <td>
                  <select
                    value={participant.status || "pendiente"}
                    onChange={(e) =>
                      handleStatusChange(participant.id, e.target.value)
                    }
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="aprobado">Aprobado</option>
                    <option value="rechazado">Rechazado</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() =>
                      handleStatusChange(
                        participant.id,
                        participant.status === "aprobado"
                          ? "pendiente"
                          : "aprobado"
                      )
                    }
                  >
                    Cambiar Estado
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-results">
                No se encontraron participantes
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsTable;
