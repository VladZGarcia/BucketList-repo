import { showFieldError, showToast } from '../utils/userInteraction.js';
import { Dream } from '../models/Dream.js';
import { simpleIDGenerator } from '../utils/idGenerator.js';
    
// Load bucketList from localStorage if it exists
let bucketList: Dream[] = [];
const storedList = localStorage.getItem('bucketList');
if (storedList) {
    bucketList = JSON.parse(storedList);
}

const addDreamForm = document.querySelector<HTMLFormElement>('form') as HTMLFormElement;
const dreamInput = document.getElementById('dream') as HTMLInputElement;
const themeSelect = document.getElementById('dream-select') as HTMLSelectElement;

function handleAddDream(event: Event): void {
    event.preventDefault();

    const dream = dreamInput.value.trim();
    const theme = themeSelect.options[themeSelect.selectedIndex]?.text.trim() || 'default';

    // Validera
    if (!dream) {
        showFieldError('dream', 'Vänligen ange ett mål.');
        return;
    }
    if (theme === 'default') {
        showFieldError('dream-select', 'Vänligen välj ett tema.');
        return;
    }
    // Rensa eventuella felmeddelanden
    showFieldError('dream', '');
    showFieldError('dream-select', '');
    
    // Skapa nytt bucket list item
    const newItem: Dream = {
        id: simpleIDGenerator(bucketList),
        dream: dream,
        theme: theme,
        checked: false
    };

    // Lägg till i bucket list
    bucketList.push(newItem);
    
    // Spara till localStorage
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
    
    showToast('Målet har lagts till!', 'success');
    
    // Rensa formuläret
    addDreamForm.reset();
}

addDreamForm.addEventListener('submit', handleAddDream);
