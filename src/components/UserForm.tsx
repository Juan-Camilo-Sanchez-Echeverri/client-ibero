import React, { useState } from 'react';
import { User } from '../types/user';

interface UserFormProps {
  addUser: (user: User) => void;
}

/**
 * Componente UserForm permite la creación de un nuevo usuario.
 * @param addUser - Función para agregar un nuevo usuario a la lista de usuarios.
 */
const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  // Estados locales para almacenar el nombre y el email del usuario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    addUser(newUser);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default UserForm;
