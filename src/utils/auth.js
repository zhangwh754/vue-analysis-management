export const TOKEN_KEY = 'AUTH_TOKEN'

export function checkToken() {
  return localStorage.getItem(TOKEN_KEY) != null
}

export function setToken(value) {
  localStorage.setItem(TOKEN_KEY, value)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
  window.location.href = '/analysis/index.html'
}
