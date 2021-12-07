import React from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";


  function Protected (props){
  let pro=props.pro
  const history=useHistory();

  useEffect (()=>{
    if(!localStorage.getItem('token')){
      history.push('/registration')
    }
  },[])
  return(
    <>
    <pro/>
    </>
  )
}
export default Protected