import React from 'react';
import { HashRouter, Route, Routes  } from 'react-router-dom';
import Login from './components/pages/Login';

const page = () => {
  return (
    <HashRouter>
      <Routes>
        {/* 渲染登录组件 */}
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default page