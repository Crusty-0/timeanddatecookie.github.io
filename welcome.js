const params = new URLSearchParams(window.location.search);
const name = params.get('name') || 'guest';
document.getElementById('welcomeMessage').textContent = `welcome ${name}`;

function updateDateTime() {
  const now = new Date();
  document.getElementById('dateTime').textContent = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);
