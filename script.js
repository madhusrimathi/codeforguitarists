function previewTab() {
  const input = document.getElementById("tabInput").value;
  const preview = document.getElementById("tabPreview");
  
  // Ensure 6 lines for the 6 guitar strings
  const lines = input.split("\n");

  // Fill up missing lines if less than 6
  while (lines.length < 6) {
    lines.push("");  // Empty string for missing lines
  }

  // Create an array for guitar strings and add the lines (from lowest string to highest)
  let formattedTab = lines.reverse().join("\n");
  
  preview.textContent = formattedTab;
}
