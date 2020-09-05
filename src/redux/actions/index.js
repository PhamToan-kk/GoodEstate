import {SIGN_IN_SUCCESS, SiGN_IN_FAIL} from '../actionTypes';

const testLogin=async()=>{
  const userPass={
    username: "duc",
    password: "12345",
    roles: ["admin", "moderator", "user"]
  }
  const request=await fetch('http://localhost:8080/api/auth/signin',{
    method:'post',
    body:JSON.stringify(userPass),
  });
  const data=request.json();
  return data;
}
export const signIn = (credentials) => {
  
  return {
    type: SIGN_IN_SUCCESS,
    payload: 
  }
  // return {
  //     type:SiGN_IN_FAIL,
  //     payload:
  // }
};
