import React, { createContext, useState, useContext } from 'react';
// Crear el contexto de autenticación
const LoginContext = createContext();
export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);


  const login = (username) => {
    // Simulando la creación de un token (en una app real, esto sería generado por un servidor)
    const token = `fake-token-${username}`;

    if (username == "admin@gmail.com") { //contraseña: 123456
      setAdmin(true);
    }

    localStorage.setItem('authToken', token);
    setUser(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setAdmin(false);
  };

  function verificacionLog() {
    return (
      new Promise((res, rej) => {
        const userToken = localStorage.getItem("authToken");
        if (userToken) {
          setUser(userToken);
          if (userToken == "fake-token-admin@gmail.com") {
            setAdmin(true);
            res();
          } else {
            res();
          }
        } else {
          res();
        }
      })
    )
  }

  return (
    <LoginContext.Provider value={{ user, admin, login, logout, verificacionLog }}>
      {children}
    </LoginContext.Provider>);
}
export const useLoginContext = () => useContext(LoginContext);

