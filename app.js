import { cards } from "./cards.js";

// 1- load the cards components
// 2- navigate through cards contents

const componentSection = document.querySelector('.component-section');

function loadContent() {
    // creating the divs, loading cards.js content here
    cards.forEach(
        card => {
            const div = document.createElement('div');
            div.classList.add('card');

            div.innerHTML = `
                <div class="card-title">${card.cardTitle}</div>
                <div class="card-discription">${card.cardDiscription}</div>
                <div class="card-btn">
                     <button>Check Component</button>
                </div>
            `;

            componentSection.appendChild(div);
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