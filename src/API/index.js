import {instance} from "./config";


export const createTeacher = (uid, data) => instance.put(`/${uid}/.json`, data)

export const getTeacher = (uid) => instance.get(`/${uid}/.json`)

export const createClass = (uid) => instance.post(`/${uid}/class/.json`, {})

export const changeClassInfo = (uid, idClass, data) => instance.put(`/${uid}/class/${idClass}/.json`, data)

export const createPeople = (uid, id) => instance.post(`/${uid}/class/${id}/people/.json`, {})

export const changePeopleInfo = (uid, id, idPeople, data) => instance.put(`/${uid}/class/${id}/people/${idPeople}/.json`, data)

export const deletePeople = (uid , id , idPeople) => instance.delete(`/${uid}/class/${id}/people/${idPeople}/.json`)

export const deleteClass = (uid , id) => instance.delete(`/${uid}/class/${id}/.json`)

export const getTotalPeople = (uid , id) => instance.get(`/${uid}/class/${id}/num/.json`)

export const changeTotalNum = (uid , id, num) => instance.put(`/${uid}/class/${id}/num/.json`, num)