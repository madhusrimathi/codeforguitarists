function displayTab() {
    const input = document.getElementById('tabInput').value;
    const output = document.getElementById('tabOutput');
    output.textContent = input;
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
