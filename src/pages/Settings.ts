// här är det bara level-up!
import { name } from "../utils/variables.js";
import logOut from "../utils/logout.js";


const nameInput = document.getElementById("name-input") as HTMLInputElement;

const confirmThemeInput = document.querySelector(".confirm-theme-input") as HTMLButtonElement;

// Controllerar om det finns ett sparat namn i localStorage
const savedName = localStorage.getItem("name");
if (savedName) {
    nameInput.value = savedName;
} else {
    nameInput.value = name;
}

nameInput.addEventListener("click", () => {
    // Rensa fältet när användaren klickar på det
    nameInput.value = "";
});

const confirmName = document.querySelector(".confirm-input") as HTMLButtonElement;

confirmName.addEventListener("click", () => {
    // Trimma och spara namnet
    
    if (nameInput.value) {
        nameInput.value = nameInput.value.trim();
        localStorage.setItem("name", nameInput.value);        
    }
    // ta bort name från localStorage om input är tomt
    if (nameInput.value === "") {
        localStorage.removeItem("name");
    }

});

// lägg till teman
let themes: string[] = [];
// ladda teman från localStorage
const storedThemes = localStorage.getItem("themes");
if (storedThemes) {
    themes = JSON.parse(storedThemes);
}

const themeInput = document.getElementById("theme-input") as HTMLInputElement;
// Lägg till nytt tema
function addTheme() {
    const newTheme = themeInput.value.trim();
    if (newTheme) {
        themes.push(newTheme);
        localStorage.setItem("themes", JSON.stringify(themes));
        themeInput.value = "";
        renderThemes();
    }
}
confirmThemeInput.addEventListener("click", addTheme);

function renderThemes(): void {
    // hämta teman från localStorage
    const storedThemeList: string[] = JSON.parse(localStorage.getItem("themes") || "[]");
    const themeList = document.getElementById("theme-list") as HTMLUListElement;
    themeList.innerHTML = ''; // Rensa befintliga teman
    

    // Rendera teman
    if (storedThemeList.length === 0) {
        themeList.innerHTML = '<li><p>Inga teman tillagda än.</p></li>';
        return;
    }
    storedThemeList.forEach(theme => {
        const li = document.createElement("li");
        li.className = "theme-list_item";
        
        li.innerHTML = `<p>${theme}</p>
        <button type="button" class="delete-theme">
        <img src="../assets/images/trash_delete.png" />
            </button>`;
            li.querySelector(".delete-theme")?.addEventListener("click", () => {
                // Ta bort tema från listan
                const index = themes.indexOf(theme);
                if (index > -1) {
                    themes.splice(index, 1);
                    localStorage.setItem("themes", JSON.stringify(themes));
                    renderThemes(); // Återrendera listan
                }
            });
            themeList.appendChild(li);
       });
   }


renderThemes();

// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn?.addEventListener("click", logOut);

