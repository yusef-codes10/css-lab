import { cards } from "./cards.js";

// 1- load the cards components
// 2- navigate through cards contents

const cardsSection = document.querySelector('.cards');

function loadContent() {
    // creating the divs, loading cards.js content here
    cards.forEach(
        card => {
            const div = document.createElement('div');
            div.classList.add('card');

            div.innerHTML = `
                <div class="langs-used"></div>
                <div class="card-title">${card.cardTitle}</div>
                <div class="card-discription">${card.cardDiscription}</div>
                <div class="card-btn">
                     <button>Check Component</button>
                </div>
            `;
            // declaring the langs-used
            const langsUsedContainer = document.querySelector('.langs-used');


            // adding langs
            card.langsUsed.forEach(
                lang => {
                    const langContainer = document.createElement('div');
                    lang.classList.add(lang);
                    lang.innerHTML = `<p>${lang}</p>`;


                }
            )

            cardsSection.appendChild(div);
        }
    )
}

// ketdown event for testing
document.addEventListener('keydown', 
    event => {
        if (event.key === 'Enter') {
            loadContent();
        }
    }
)