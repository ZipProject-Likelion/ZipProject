import React from 'react';
import axios from 'axios';

export default function Profile() {
  const user = localStorage.getItem('user');
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    axios
    .post('/users/auth/logout/')
    .then((res)=>console.log(res))
    .catch(err=>console.log(err));

    window.location.href = "/";
  };

  return (
    <div >
    {user && <div>{user}님 환영합니다.</div>}
    <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}