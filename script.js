function previewTab() {
    const input = document.getElementById("tabInput").value;
    const preview = document.getElementById("tabPreview");
    
    // Split input by lines
    const lines = input.split("\n");

    // Create an array for the guitar strings (6 strings in total)
    let tab = ['', '', '', '', '', ''];

    // Fill the array with each line of input corresponding to a string
    for (let i = 0; i < lines.length; i++) {
        tab[5 - i] = lines[i].trim();  // Reverse the order, as the top line is for the high E string
    }

    // Format the tab to display as 6 lines
    let formattedTab = tab.join("\n");

    // Display the tab
    preview.textContent = formattedTab;
}
