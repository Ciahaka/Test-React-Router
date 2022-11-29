import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>Main</NavLink>----
      <NavLink to={'/login'}>Login</NavLink>----
      <NavLink to={'/profile'}>Profile</NavLink>----
      <NavLink to={'/profile/setting'}>Setting</NavLink>---
      <NavLink to={'/menu'}>Menu</NavLink>---
      <NavLink to={'/menu/submenu'}>Submenu</NavLink>

      <Routes>
        <Route path={'/*'} element={<div>404</div>}/>
        <Route path={'/'} element={<div>Main</div>}/>
        <Route path={'/login'} element={<div>Login</div>}/>
        {/*<Route path={'/profile/setting'} element={<div>Setting</div>}/>*/}
        <Route path={'/profile/*'} element={(
          <div>
            Profile
            <Routes>
              <Route path={'/setting'} element={<div>Setting</div>}/>
            </Routes>
          </div>
        )}/>
        {/*<Route path={'/menu/submenu'} element={<div>Submenu</div>}/>*/}
        <Route path={'/menu'} element={(
          <div>
            Menu
            <Outlet/>
          </div>
        )}>
          <Route path={'/menu/submenu'} element={<div>Submenu</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
