import {instance} from "./config";


export const createTeacher = (uid, data) => instance.put(`/${uid}/.json`, data)

export const getTeacher = (uid) => instance.get(`/${uid}/.json`)

export const createClass = (uid) => instance.post(`/${uid}/class/.json`, {})

export const changeClassInfo = (uid, idClass , data) => instance.put(`/${uid}/class/${idClass}/.json`, data)