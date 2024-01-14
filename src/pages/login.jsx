import React, { Component } from 'react'
import { useState } from 'react'

function Login() {

  const [estado, setEstado] = useState("bom dia");

    return (
      <div>
      <div>SAUDADAÇÃO DO DIA É : {estado}</div>
      <button onClick={()=>setEstado("boa noite")}>CLICA PRA MUDAR</button>
      </div>
    )
}

export default Login