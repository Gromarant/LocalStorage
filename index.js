/* Guardar en Local Storage los datos de contacto enviados de cada usuario */
const handleForm = (e) => {
  e.preventDefault();

  const contactData = [
    {name: e.target.name.value},
    {email: e.target.email.value},
    {message: e.target.messge.value},
    {url: e.target.url.value}
  ]
  localStorage.setItem('contactData', JSON.stringify(contactData));
};
document.querySelector('form').addEventListener('submit', handleForm);
