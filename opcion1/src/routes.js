import React,{Fragment} from 'react'
import {Route} from "react-router-dom"

import UsuarioView from './View/UsuarioView'
export default function routes(){
  return(
    <Fragment>
      <Route path="/" exact component={UsuarioView} />
    </Fragment>
  )
}