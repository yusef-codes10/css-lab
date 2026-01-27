import { cards } from "./cards.js";
import { questions } from "./faq.js";

// 1- load the cards components
// 2- navigate through cards contents
console.log('js js js ');
console.log(questions);
const cardsSection = document.querySelector('.cards');

function loadContent() {
    // creating the divs, loading cards.js content here
    cards.forEach(
        card => {
            const div = document.createElement('div');
            div.classList.add('card');

            // 👇 THIS is the key line
            div.style.gridArea = card.girdArea;

            div.innerHTML = `
                <div class="langs-used"></div>
                <div class="card-title">${card.cardTitle}</div>
                <div class="card-discription">${card.cardDiscription}</div>
                <div class="card-btn">
                     <button>Check Component</button>
                </div>
            `;
            // declaring the langs-used
            const langsUsedContainer = div.querySelector('.langs-used');


            // adding langs
            card.langsUsed.forEach(
                lang => {
                    const langContainer = document.createElement('div');
                    langContainer.classList.add(lang);
                    langContainer.innerHTML = `<p>${lang}</p>`;

                    langsUsedContainer.appendChild(langContainer);
                }
            )

            cardsSection.appendChild(div);
        }
    )
}

// 
document.addEventListener('DOMContentLoaded',
    loadContent
)

// ketdown event for testing
document.addEventListener('keydown', 
    event => {
        if (event.key === 'Enter') {
            loadContent();
        }
    }
)


// TODO: 1- I need to saparate the langs-used into a depandant function 