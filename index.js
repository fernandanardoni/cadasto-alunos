import {manageStudents, displayForm} from './functions.js';


const addStudent = document.querySelector("#adicionar");
const manage = document.querySelector("#manage");


addStudent.addEventListener("click", () => {
    displayForm();
})

manage.addEventListener("click", () => {
    manageStudents();
})




















