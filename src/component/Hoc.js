import React, { Component } from 'react'
import Movielist from './Movielist'
import SpinnerComp from './Spinner'

  const Hoc = (Component) =>{
          
              return props =>(props.isLoading ? <SpinnerComp/> : <Component {...props}/>)   
      
}

export default Hoc