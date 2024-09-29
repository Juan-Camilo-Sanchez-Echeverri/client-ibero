import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { User } from './types/user';

/**
 * Componente App es el componente principal que maneja el estado de la aplicación.
 */
const App: React.FC = () => {
  // Estado para mantener la lista de usuarios
  const [users, setUsers] = useState<User[]>([]);

  /**
   * Agrega un nuevo usuario a la lista de usuarios.
   * @param user - El nuevo usuario a agregar.
   */
  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  /**
   * Elimina un usuario de la lista de usuarios por id.
   * @param id - El id del usuario a eliminar.
   */
  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
