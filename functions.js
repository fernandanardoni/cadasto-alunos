import { postData, fetchData, deleteData } from './requisitons.js';

const submit = document.querySelector("#submit")
const menu = document.querySelector(".navigation")
const list = document.querySelector(".list");
const form = document.querySelector(".form");

export function displayForm() {
    menu.style.height = "10%";
    form.style.display = 'flex';
    list.style.display = "none",

    submit.addEventListener("click", () => {
        postData();
        alert("Cadastro realizado com sucesso!");
    })
}

export function manageStudents() {
    menu.style.height = "10%";
    list.style.display = "flex";
    form.style.display = "none";

    fetchData();
}


export function createStudent(item) {
    const student = document.createElement("div");
    const studentName = document.createElement("p")
    const studentBirthDate = document.createElement("p")
    const deleteStudent = document.createElement("button");
    const editStudent = document.createElement("button");
    student.setAttribute("class", "student-container");
    studentName.textContent = item.firstname + " " + item.lastname;
    studentBirthDate.textContent = item.birthdate;
    deleteStudent.textContent = "Excluir";
    editStudent.textContent = "Editar";
    editStudent.setAttribute("disabled", "true")
    student.appendChild(studentName);
    student.appendChild(studentBirthDate);
    student.appendChild(editStudent);
    student.appendChild(deleteStudent);
    list.appendChild(student);

    deleteStudent.onclick = () => {
        deleteData("firstname", item.firstname);
        list.removeChild(student);
    }
}



