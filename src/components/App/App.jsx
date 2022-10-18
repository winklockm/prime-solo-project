import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Overview from '../Overview/Overview';

import Detail from '../Detail/Detail';
import BottomNav from '../BottomNav/BottomNav';
import AddNew from '../AddNew/AddNew';
import MedicalTeamList from '../MedicalTeamList/MedicalTeamList';


import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            
            {/* // logged in shows overview route with overview component, else shows LoginPage */}
          <ProtectedRoute exact path="/overview">
            <Overview />
          </ProtectedRoute>

          {/* // logged in shows medicalteam route with List component, else shows LoginPage */}
          <ProtectedRoute exact path="/medicalteam">
            <MedicalTeamList />
          </ProtectedRoute>

          {/* // logged in shows medicalteam/addnew route with AddNew component, else shows LoginPage */}
          <ProtectedRoute exact path="/medicalteam/addnew">
            <AddNew />
          </ProtectedRoute>

          {/* // logged in shows medicalteam/detail/:id route with Detail component, else shows LoginPage */}
          <ProtectedRoute exact path="/medicalteam/detail/:id">
            <Detail />
          </ProtectedRoute>

          {/* // logged in shows medication route with List component, else shows LoginPage */}
          <ProtectedRoute exact path="/medication">
            <MedicalTeamList />
          </ProtectedRoute>

          {/* // logged in shows insurance route with List component, else shows LoginPage */}
          <ProtectedRoute exact path="/insurance">
            <MedicalTeamList />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /overview page
              <Redirect to="/overview" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route exact path="/registration">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /overview page
              <Redirect to="/overview" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route exact path="/home">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /overview page
              <Redirect to="/overview" />
              :
              // Otherwise, show the Login page
              <LoginPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <BottomNav />
        {/* <Footer /> */}
      </div>
    </Router>
  );

}

export default App;
