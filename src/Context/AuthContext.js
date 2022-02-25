import React, { useContext, useEffect, useState } from 'react';
const host = 'http://localhost:5000/';
//create authentication Context
const AuthContext = React.createContext();

//create custom hook for using authContext
export function useAuth() {
  return useContext(AuthContext)
}

//Authentication Context Component
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true);
  //create New user using email and password

  async function createUser(email, password, role) {
      const Url = host + 'user/register'
      let res = await fetch(Url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email_id": email,
          "password": password,
          "role": role,
        })
      })
      let user = await res.json(); 
      setCurrentUser(user);
      return user
    }
  
  async function authenticateUser(email, password) {
   
      const Url = host + 'user/login'
      let res = await fetch(Url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email_id": email,
          "password": password,
        })
      })
      let user = await res.json();
      setCurrentUser(user)
      return user;

  }
  async function mentorProfile(data) {
   
    const Url = host + 'mentor/profile'
    let res = await fetch(Url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...data})
    })
    let user = await res.json();
    return user;

}
  function logout() {
    return 0;
  }
  //listen for authentication change event
  useEffect(() => {
    setLoading(false);
  }, []);
  //value stored in context
  const value = {
    currentUser,
    createUser,
    authenticateUser,
    mentorProfile,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
