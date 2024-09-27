function showAlert() {
    alert("Button clicked!");
}

function loadContent(section) {
    // Clear active state for all links
    document.querySelectorAll('header a').forEach(link => link.classList.remove('active'));

    // Set active state for clicked link
    if (section === 'home') {
        document.querySelector('header a:nth-child(1)').classList.add('active');
        document.getElementById('content').innerHTML = `
            <div id="home-content" class="content-section">
                <h1>Welcome to My Website</h1>
                <p>This is the home section of the website. You can add more content here.</p>
                <button onclick="showAlert()">Click Me!</button>
            </div>
        `;
    } else if (section === 'about') {
        document.querySelector('header a:nth-child(2)').classList.add('active');
        fetch('about.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            });
    }
}
