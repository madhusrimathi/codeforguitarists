// script.js

// Constants
const strings = ["E", "A", "D", "G", "B", "e"];
const positions = 16; // number of time positions/beats

// Elements
const tabGridBody = document.querySelector("#tabGrid tbody");
const techIcons = document.querySelectorAll(".tech-icon");

let selectedTechnique = null;

// Initialize tab grid rows with empty cells
function createTabGrid() {
  tabGridBody.innerHTML = "";
  strings.forEach((string) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-string", string);

    // String name cell
    const th = document.createElement("th");
    th.textContent = string;
    tr.appendChild(th);

    // Add empty cells for each position
    for (let i = 1; i <= positions; i++) {
      const td = document.createElement("td");
      td.setAttribute("data-pos", i);
      td.setAttribute("contenteditable", "true");
      td.setAttribute("aria-label", `${string} string, position ${i}`);
      td.spellcheck = false;
      tr.appendChild(td);
    }

    tabGridBody.appendChild(tr);
  });
}

// Clear any invalid inputs (only allow fret numbers or empty)
function sanitizeCellInput(cell) {
  const val = cell.textContent.trim();
  if (val === "") return;
  if (!/^\d+$/.test(val)) {
    cell.textContent = "";
  } else {
    // Limit fret number to 0–24
    const fret = parseInt(val, 10);
    if (fret < 0 || fret > 24) {
      cell.textContent = "";
    } else {
      cell.textContent = fret.toString();
    }
  }
}

// Handle cell input sanitization on blur
function setupCellListeners() {
  tabGridBody.querySelectorAll("td").forEach((cell) => {
    cell.addEventListener("blur", () => {
      sanitizeCellInput(cell);
    });

    // Apply technique icon on click if selected
    cell.addEventListener("click", () => {
      if (selectedTechnique) {
        // Toggle technique on cell
        if (cell.classList.contains(`tech-${selectedTechnique}`)) {
          cell.classList.remove(`tech-${selectedTechnique}`, "tech-applied");
          cell.removeAttribute("title");
        } else {
          cell.classList.add(`tech-${selectedTechnique}`, "tech-applied");
          cell.setAttribute("title", selectedTechnique.replace(/([A-Z])/g, ' $1').toLowerCase());
        }
      }
    });
  });
}

// Technique icon click handler
techIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      selectedTechnique = null;
    } else {
      techIcons.forEach((i) => i.classList.remove("active"));
      icon.classList.add("active");
      selectedTechnique = icon.getAttribute("data-tech");
    }
  });
});

// Initialize grid and listeners
createTabGrid();
setupCellListeners();

