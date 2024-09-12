import React, { useState } from "react";
import "./_InscriptionForm.styles.scss";

const RegisterUser = () => {
  const [role, setRole] = useState(""); // Estado para el rol seleccionado
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="inscription-form" onSubmit={handleSubmit}>
      <h2>Formulario de Inscripción</h2>

      {/* Nombre completo */}
      <div className="form-group">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Correo electrónico */}
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>

      {/* Teléfono */}
      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />
      </div>

      {/* Selección de rol */}
      <div className="form-group">
        <label htmlFor="role">Rol</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Selecciona tu rol</option>
          <option value="asistente">Asistente General</option>
          <option value="ponente">Ponente</option>
          <option value="expositor">Expositor</option>
          <option value="voluntario">Voluntario</option>
          <option value="organizador">Organizador</option>
        </select>
      </div>

      {/* Campos adicionales según el rol */}
      {role === "asistente" && (
        <div className="form-group">
          <label htmlFor="sessions">Talleres o sesiones</label>
          <input
            type="text"
            id="sessions"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Especifica los talleres o sesiones"
            required
          />
        </div>
      )}

      {role === "ponente" && (
        <div className="form-group">
          <label htmlFor="presentation">Título de la presentación</label>
          <input
            type="text"
            id="presentation"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Título de tu presentación"
            required
          />
        </div>
      )}

      {role === "expositor" && (
        <div className="form-group">
          <label htmlFor="stand">Nombre del stand o empresa</label>
          <input
            type="text"
            id="stand"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Nombre del stand o empresa"
            required
          />
        </div>
      )}

      {role === "voluntario" && (
        <div className="form-group">
          <label htmlFor="availability">Disponibilidad horaria</label>
          <select
            id="availability"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona tu disponibilidad</option>
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>
        </div>
      )}

      {role === "organizador" && (
        <div className="form-group">
          <label htmlFor="function">Función dentro del equipo</label>
          <input
            type="text"
            id="function"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Especifica tu función"
            required
          />
        </div>
      )}

      {/* Botón de envío */}
      <button type="submit" className="submit-btn">
        Enviar
      </button>
    </form>
  );
};

export default RegisterUser;
