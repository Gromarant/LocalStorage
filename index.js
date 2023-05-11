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
showData('contactData');