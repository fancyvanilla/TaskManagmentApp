import axios from 'axios';

const baseUrl="http://localhost:8080/todoApp";
export const login=(user)=>axios.post(baseUrl+"/login",user);
export const signup=(user)=>axios.post(baseUrl+"/signup",user);
export const getUser=(userId) => axios.get(baseUrl+"/users/"+userId);
export const getTasks=(userId)=>axios.get(baseUrl+"/tasks/"+userId);
export const addTask=(task)=>axios.post(baseUrl+"/addtask",task);
export const deleteTask=(userId,taskId)=>axios.post(baseUrl+"/deletetask",{userId:userId,taskId:taskId});
export const validateUser=(userId,token) => axios.post(baseUrl+"/Auth",{userId:userId,token:token});
export const updateTask=(task)=>axios.post(baseUrl+"/updatetask",task);
