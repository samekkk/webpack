function clearContent() {
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = "";
        contentDiv.className = '';
    } else {
        console.error('Element with id "content" not found.');
    }
}

export { clearContent };