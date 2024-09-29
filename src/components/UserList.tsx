import React from 'react';
import { User } from '../types/user';

interface UserListProps {
  users: User[];
  deleteUser: (id: number) => void;
}

/**
 * Componente UserList muestra una lista de usuarios y permite la eliminación de usuarios.
 * @param users - Array de objetos de usuario.
 * @param deleteUser - Función para eliminar un usuario por id.
 */
const UserList: React.FC<UserListProps> = ({ users, deleteUser }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) <button onClick={() => deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
