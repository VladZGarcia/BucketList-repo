import { Dream } from '../models/Dream';
import { displayUsername } from '../utils/displayUserName.js';

displayUsername();

function renderDreams(): void {
    const bucketList: Dream[] = JSON.parse(localStorage.getItem('bucketList') || '[]');
  const dreamList = document.querySelector('.dream-list') as HTMLUListElement;
  dreamList.innerHTML = ''; // Clear existing items

  bucketList.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'dream-list_item';

    li.innerHTML = `
      <input
        class="dream-check"
        type="checkbox"
        name="dream-check"
        id="dream-check-${item.id}"
        ${item.checked ? 'checked' : ''}
      />
      <label for="dream-check-${item.id}">
        ${item.dream},
        <span class="dream-theme">${item.theme}</span>
      </label>
      <button type="button" class="delete-btn" data-id="${item.id}">
        <img src="../assets/images/trash_delete.png" />
      </button>
    `;

    // Event listener för delete button
    li.querySelector('.delete-btn')?.addEventListener('click', () => {
      // Ta bort item från bucketList
      const updatedList = bucketList.filter(dream => dream.id !== item.id);
      localStorage.setItem('bucketList', JSON.stringify(updatedList));
      renderDreams(); // Re-render the list
    });

    dreamList.appendChild(li);
  });
}

renderDreams();