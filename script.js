function displayTab() {
    const input = document.getElementById('tabInput').value;
    const output = document.getElementById('tabPreview');

    // Validate tab format
    if (!validateTab(input)) {
        document.getElementById('validationMessage').textContent = "Invalid tab format! Check your input.";
        output.textContent = "";
        return;
    }

    document.getElementById('validationMessage').textContent = ""; // Clear error message
    output.textContent = input;
}

function validateTab(tab) {
    const lines = tab.split('\n');
    return lines.every(line => line.startsWith('e|') || line.startsWith('B|') || line.startsWith('G|') ||
        line.startsWith('D|') || line.startsWith('A|') || line.startsWith('E|') || line.trim() === '');
}

function insertChord(chord) {
    const textarea = document.getElementById('tabInput');
    textarea.value += chord;
}

function downloadTab() {
    const text = document.getElementById('tabInput').value;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "guitar_tab.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
