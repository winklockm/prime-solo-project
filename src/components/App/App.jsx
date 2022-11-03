import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Component Imports
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Overview from '../Overview/Overview';
import BottomNav from '../BottomNav/BottomNav';
import AboutPage from '../AboutPage/AboutPage';
import './App.css';
// Medical Team Imports
import MedicalTeamList from '../MedTeam/MedicalTeamList';
import MedicalTeamDetail from '../MedTeam/MedicalTeamDetail';
import MedicalTeamAdd from '../MedTeam/MedicalTeamAdd';
// Medication Imports
import MedicationList from '../Medication/MedicationList';
import MedicationDetail from '../Medication/MedicationDetail';
import MedicationAdd from '../Medication/MedicationAdd';
//Insurance Imports
import InsuranceList from '../Insurance/InsuranceList';
import InsuranceDetail from '../Insurance/InsuranceDetail';
import InsuranceAdd from '../Insurance/InsuranceAdd';

// MUI Imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { teal } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal[400],
    },
    secondary: {
      main: teal[900],
    },
  },
});

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <div>
      
      <CssBaseline />
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

          {/* // logged in shows medicalteam/detail/:id route with Detail component, else shows LoginPage */}
          <ProtectedRoute exact path="/medicalteam/detail/:id">
            <MedicalTeamDetail />
          </ProtectedRoute>

          {/* // logged in shows medicalteam/addnew route with AddNew component, else shows LoginPage */}
          <ProtectedRoute exact path="/medicalteam/addnew">
            <MedicalTeamAdd />
          </ProtectedRoute>

          {/* // logged in shows medication route with MedicationList component, else shows LoginPage */}
          <ProtectedRoute exact path="/medication">
            <MedicationList />
          </ProtectedRoute>

          {/* // logged in shows medication detail route with MedicationDetail component, else shows LoginPage */}
          <ProtectedRoute exact path="/medication/detail/:id">
            <MedicationDetail />
          </ProtectedRoute>

          {/* // logged in shows medication add route with MedicationAdd component, else shows LoginPage */}
           <ProtectedRoute exact path="/medication/add">
            <MedicationAdd />
          </ProtectedRoute>

          {/* // logged in shows insurance route with List component, else shows LoginPage */}
          <ProtectedRoute exact path="/insurance">
            <InsuranceList />
          </ProtectedRoute>

          {/* // logged in shows medication detail route with MedicationDetail component, else shows LoginPage */}
          <ProtectedRoute exact path="/insurance/detail/:id">
            <InsuranceDetail />
          </ProtectedRoute>

          {/* // logged in shows medication add route with MedicationAdd component, else shows LoginPage */}
           <ProtectedRoute exact path="/insurance/add">
            <InsuranceAdd />
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

          <Route exact path='/about'>
            <AboutPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <BottomNav />
        
      </div>
    </Router>
    </ThemeProvider>
  );

}

export default App;
