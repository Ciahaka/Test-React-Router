import React, {useEffect} from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useNavigate} from 'react-router-dom';

const Profile=()=>{
  const navigate = useNavigate()
  return(
    <div>
      Profile
      <Routes>
        <Route path={'/setting'} element={<div>Setting</div>}/>
      </Routes>
      <button onClick={()=>{navigate('/login')}}>Logout</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>Main</NavLink>----
      <NavLink to={'/login'} style={{color: 'green'}}>Login</NavLink>----
      <NavLink to={'/profile'}>Profile</NavLink>----
      <NavLink to={'/profile/setting'} style={(params) => {
        return {color: params.isActive ? 'red' : 'black'}
      }}>Setting</NavLink>---
      <NavLink to={'/menu'}>Menu</NavLink>---
      <NavLink to={'/menu/submenu'}>Submenu</NavLink>----
      <a
        href={'https://mirpodvoha.by'}
        target={'_blank'}
        rel={'no-referrer nofollow no-opener '}
      >
        CliK
      </a>

      <Routes>
        <Route path={'/*'} element={<div>404</div>}/>
        <Route path={'/'} element={<div>Main</div>}/>
        <Route path={'/login'} element={<div>Login</div>}/>
        {/*<Route path={'/profile/setting'} element={<div>Setting</div>}/>*/}
        <Route path={'/profile/*'} element={<Profile/>}/>
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
