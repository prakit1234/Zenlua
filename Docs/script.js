// Function to send message to Discord webhook
function sendToDiscord(webhookUrl, message) {
    const data = {
        content: message,
        username: "GameidKaistealer",  // Customized bot name
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKxnamz2w3JOHUtyzTExt7z1NQqPjX06FOg&s"  // Customize tsthe avatar (optional)
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        const statusEl = document.getElementById('status');
        if (response.ok) {
            statusEl.textContent = "Message sent successfully!";
            statusEl.style.color = "green";
        } else {
            statusEl.textContent = `Error: Failed to send message. Status Code: ${response.status}`;
            statusEl.style.color = "red";
        }
    })
    .catch(error => {
        document.getElementById('status').textContent = `Error: ${error}`;
        document.getElementById('status').style.color = "red";
    });
}

// Add event listener to the Send button
document.getElementById('send-btn').addEventListener('click', () => {
    const webhookUrl = document.getElementById('webhook-url').value;
    const message = document.getElementById('message').value;

    sendToDiscord(webhookUrl, message);
});
