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
  const [currentUser, setCurrentUser] = useState(null);
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
    sessionStorage.setItem('user',JSON.stringify(user));
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
    sessionStorage.setItem('user',JSON.stringify(user));
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
  async function fetchCategory(data) {
    const Url = host + 'list/category'
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
  async function pushMentor(data){
    const Url = host + 'push/category/mentor'
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
  async function getOverview(){
    const Url = host + 'user/overview'
    let res = await fetch(Url, {
      method: 'GET',
      headers: {
        "Accept": "*/*"
      }
    })
    let response = await res.json();
    return response;
  }
  
  function logout() {
    sessionStorage.setItem('user',null);
    setCurrentUser(null);
    sessionStorage.clear();
  }
  
  //listen for authentication change event
  
  useEffect(() => {
    const checkUser =JSON.parse( sessionStorage.getItem('user'))
    setLoading(false);
    if(!currentUser){
      setCurrentUser(checkUser)
    }
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
    fetchCategory,
    pushMentor,
    getOverview,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
