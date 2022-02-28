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
  const [currentUser, setCurrentUser] = useState(null)
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
      body: JSON.stringify({ ...data })
    })
    let response = await res.json();
    return response;

  }
  async function menteeProfile(data) {

    const Url = host + 'mentee/profile'
    let res = await fetch(Url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
    let response = await res.json();
    return response;

  }
  async function fetchRequests(data) {
    const Url = host + 'mentor-requests'
    let res = await fetch(Url, {
      method: 'GET'
    })
    let response = await res.json();
    return response;
  }
  async function fetchMentor(id) {
    console.log({id});
    const Url = host + 'mentor'
    let res = await fetch(Url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        id:id
      })
    })
    let response = await res.json();
    return response;
  }
  async function respondRequest(data){
    const Url = host + 'mentor-requests/respond'
    let res = await fetch(Url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    let response = await res.json();
    return response;
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
    menteeProfile,
    fetchRequests,
    fetchMentor,
    respondRequest,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
