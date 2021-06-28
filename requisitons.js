import {createStudent} from './functions.js'

const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const birthdate = document.querySelector("#birthdate");



export async function fetchData() {
    const response = await fetch("https://sheetdb.io/api/v1/95x5rahbue2m6");
    const data = await response.json();
    console.log(data)

    for (const item of data) {
        createStudent(item);
    }
}

export async function postData() {
    const data = {
        firstname: name.value,
        lastname: lastname.value,
        birthdate: birthdate.value,
       
    }
    await fetch("https://sheetdb.io/api/v1/95x5rahbue2m6", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .catch(error => console.log(error))

    console.log(data)
}

export async function putData(key, value) {
    await fetch(`https://sheetdb.io/api/v1/95x5rahbue2m6/${key}/${value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .then(response => response.json())
}

export async function deleteData(key, value) {
    await fetch(`https://sheetdb.io/api/v1/95x5rahbue2m6/${key}/${value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .then(response => response.json())
}