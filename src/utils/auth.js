export function checkAuth() {
  return localStorage.getItem('isAuthenticated') === 'true';
}

export function setAuth(value) {
  localStorage.setItem('isAuthenticated', value);
}

export function clearAuth() {
  localStorage.removeItem('isAuthenticated');
}

export function logout() {
  localStorage.removeItem('token')
  window.location.href = '/index.html'
} 