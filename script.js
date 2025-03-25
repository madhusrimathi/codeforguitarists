function updatePreview() {
    const input = document.getElementById('tabInput').value;
    const preview = document.getElementById('tabPreview');
    preview.textContent = input;
}

function downloadTab() {
    const tabContent = document.getElementById('tabInput').value;
    const blob = new Blob([tabContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'guitar_tab.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
