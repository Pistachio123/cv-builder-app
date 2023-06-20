import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ResumeArt from './screens/Resumes/ResumeArt.jsx';
import ResumeCS from './screens/Resumes/ResumeCS.jsx';
import ResumeLaw from './screens/Resumes/ResumeLaw.jsx'
import ResumeMD from './screens/Resumes/ResumeMD.jsx'
import PortfolioScreen from './screens/PortfolioScreen.jsx';


// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/create-cs-resume' element={<ResumeCS />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/create-art-resume' element={<ResumeArt />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/create-medicine-resume' element={<ResumeMD />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/create-law-resume' element={<ResumeLaw />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/portfolio' element={<PortfolioScreen />} />
      </Route>
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);