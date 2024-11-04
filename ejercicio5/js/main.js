document.addEventListener('DOMContentLoaded', (event) => {
      const lista = document.getElementById('lista');
      const addButton = document.getElementById('addButton');
  
      addButton.addEventListener('click', () => {
          const newItem = document.createElement('li');
          const itemCount = lista.children.length + 1;
          newItem.textContent = `Elemento ${itemCount}`;
          newItem.className = 'list-group-item';
          lista.appendChild(newItem);
      });
  });