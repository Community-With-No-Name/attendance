const API_URL = "https://sms-vv4i.onrender.com/api/v1";
// const API_URL = "https://scoolz.herokuapp.com/api/v1";
const LOGGED_IN = (schoolId: any) => `${API_URL}/schools/${schoolId}`;
export const LOGIN_URL = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/token`;
export const STUDENTS = (schoolId: any, off: any) =>
  `${LOGGED_IN(schoolId)}/students?limit=420&offset=${off}`;
  export const STUDENTBASIC =(schoolId) => `${LOGGED_IN(schoolId)}/attendance?limit=1000`
export const HOMEROOMS = (schoolId) =>`${LOGGED_IN(schoolId)}/classes`; 

export const GETSCHOOL = (slug: any) => `${API_URL}/schools/${slug}`;
export const STARTATTENDANCE =(schoolId)=> `${LOGGED_IN(schoolId)}/start-attendance`
export const MARKATTENDANCE = (schoolId) => `${LOGGED_IN(schoolId)}/mark-attendance`