function login() {
  const name = document.getElementById('nameInput').value;
  if (name) {
    window.location.href = `welcome.html?name=${encodeURIComponent(name)}`;
  } else {
    alert("enter your name loser");
  }
}
