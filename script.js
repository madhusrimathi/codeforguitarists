// script.js

// References to DOM elements
const noteInput = document.getElementById('noteInput');
const stringSelect = document.getElementById('stringSelect');
const fretInput = document.getElementById('fretInput');
const addNoteBtn = document.getElementById('addNote');
const tabDisplay = document.getElementById('tabDisplay');
const playBtn = document.getElementById('playTab');
const clearBtn = document.getElementById('clearTab');

// Data model: each string will hold an array of frets
let tabData = {
    E: [],
    B: [],
    G: [],
    D: [],
    A: [],
    e: []
};

// Add note
addNoteBtn.addEventListener('click', () => {
    const string = stringSelect.value;
    const fret = fretInput.value.trim();

    if (string && fret !== '') {
        tabData[string].push(fret);
        fretInput.value = '';
        updateTabDisplay();
    } else {
        alert("Please select a string and enter a fret number!");
    }
});

// Update tab display
function updateTabDisplay() {
    let displayHTML = '';
    for (let stringName of Object.keys(tabData)) {
        displayHTML += `<div class="tab-line">${stringName} | ${tabData[stringName].join('—')}</div>`;
    }
    tabDisplay.innerHTML = displayHTML;
}

// Play tab (simulation)
playBtn.addEventListener('click', () => {
    let sequence = [];
    let maxLength = Math.max(...Object.values(tabData).map(arr => arr.length));

    for (let i = 0; i < maxLength; i++) {
        let notesAtBeat = [];
        for (let stringName of Object.keys(tabData)) {
            notesAtBeat.push(tabData[stringName][i] || '-');
        }
        sequence.push(notesAtBeat.join(' '));
    }

    alert("Playing tab:\n" + sequence.join('\n'));
});

// Clear tab
clearBtn.addEventListener('click', () => {
    for (let stringName in tabData) {
        tabData[stringName] = [];
    }
    updateTabDisplay();
});

// Initial display
updateTabDisplay();
