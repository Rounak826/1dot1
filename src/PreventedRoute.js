import { Navigate } from 'react-router-dom';
import {useAuth} from './Context/AuthContext';

export default function PreventedRoute({ children }) {
    const {currentUser} = useAuth();
    console.log(currentUser);
    return !currentUser? children: (!currentUser.user ? children : <Navigate to="/" />);
  }