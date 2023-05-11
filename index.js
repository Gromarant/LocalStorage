/*1. Crear un formulario de contacto con los siguientes campos:
Nombre,Email, Mensaje, URL imagen */

/*2. Guardar en Local Storage los datos de contacto enviados de cada usuario,
* La structura de datos de usuarios consistirá en un array de objetos [{..},{..},{..}...{..}] almacenado en Local Storage */
const handleForm = (e) => {
  e.preventDefault();
  
  const contactData = [{
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.messge.value,
    url: e.target.url.value
  }]
  localStorage.setItem('contactData', JSON.stringify(contactData));
  showData('contactData');
};
document.querySelector('form').addEventListener('submit', handleForm);


/*3. Mostrar los datos de los contactos guardados en el DOM */
const showData = (name) => {
  const localData = JSON.parse(localStorage.getItem(name));
  const entries = Object.entries(localData[0]);
  for (let key of entries) {
    document.querySelector(`.${key[0]}`).innerHTML = `${key[1]}`;
  }
}


/*4. Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave */
const addMoreData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
                                                        .then(res=>res.json())
                                                        .then(users => safeOnLocal('contactData', users.results))
                                                        .catch(error => console.log(error));
}
const safeOnLocal = (key, usersData) => {
  JSON.parse(localStorage.getItem(key));
  localStorage.setItem(key, JSON.stringify(usersData));
}
addMoreData();

/* 2. Avanzado - Local Storage
Crea botón para borrar todos los contactos guardados en Local Storage */
const clearBtn = document.querySelector('input.clear-ls');
clearBtn.addEventListener('click', () => localStorage.clear());

/* Crea botón para borrar un contacto en concreto de Local Storage. */
const removeBtn = document.querySelector('.remove-contact');
const contactToRemove = document.querySelector('#contactName');

const handleRemove = () => {
  if (contactToRemove) {
    localStorage.removeItem(contactToRemove.value)
  };
}
removeBtn.addEventListener('click', handleRemove);