function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    showMessage('Username and password are required.');
    return;
  }

  if (localStorage.getItem(username)) {
    showMessage('User already exists. Please login.');
  } else {
    localStorage.setItem(username, password);
    showMessage('Registration successful! You can now login.');
  }
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'dashboard.html';
  } else {
    showMessage('Invalid username or password.');
  }
}

function showMessage(msg) {
  document.getElementById('message').innerText = msg;
}
