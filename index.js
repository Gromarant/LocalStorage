const contactsKey = 'users';

//form initialization
const setContactList = () => {
  localStorage.setItem(contactsKey, JSON.stringify([]));
  const list = document.createElement('ul');
  list.className = 'contactList';
  document.querySelector('main').appendChild(list);
}
setContactList();

//2. Guardar en Local Storage 
const handleForm = (e) => {
  e.preventDefault();
  
  const user = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.messge.value,
    url: e.target.url.value,
  }

  let users = JSON.parse(localStorage.getItem(contactsKey))
  users.push(user);
  localStorage.setItem(contactsKey, JSON.stringify(users));
  paintOnDom(contactsKey);

  e.target.name.value = '';
  e.target.email.value = '';
  e.target.messge.value = '';
  e.target.url.value = '';
};
document.querySelector('form').addEventListener('submit', handleForm);


//3. Mostrar los datos de los contactos guardados en el DOM
function paintOnDom(contactsArr) {
  const contacts = JSON.parse(localStorage.getItem(contactsArr));

    const cards = contacts.map(contact => `<li>
                                              <article>
                                                <img src="${contact.url}" alt="foto de perfil de ${contact.name}">
                                                <h2 class="name">${contact.name}</h2>
                                                <p class="email">${contact.email}</p>
                                                <p class="message">${contact.message}</p>
                                                <input class="btn remove-contact" type="button" value="Quitar"></input>
                                              </article>
                                            </li>`)
    document.querySelector('.contactList').innerHTML = cards.join('\n');

    document.querySelectorAll('.remove-contact').forEach(button => button.addEventListener('click', removeContact))
}

function removeContact(e) {
  const targetContactEmail = e.target.parentElement.querySelector('.email').textContent;
  const contacts = JSON.parse(localStorage.getItem(contactsKey));
  const filteredContacts = contacts.filter(contact => contact.email !== targetContactEmail);
  localStorage.setItem(contactsKey, JSON.stringify(filteredContacts));
  paintOnDom(contactsKey);
}

const cleanLocalStoragekey = (key) => localStorage.removeItem(key);
document.querySelector('.clear-ls').addEventListener('click', () => cleanLocalStoragekey(contactsKey));