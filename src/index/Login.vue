<template>
  <div class="login-container">
    <AppLoading v-if="loading"></AppLoading>
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { setToken } from '@/utils/auth'
import { ref } from 'vue'
import { getSurveyListData } from './request'
import AppLoading from '@/components/AppLoading/index.vue'
import loading from '@/components/AppLoading/request-loading.js'

const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  try {
    // Add your login logic here
    const token = 'your-token' // Replace with actual login API call
    setToken(token)

    // Redirect to app list instead of last app
    window.location.href = '/analysis/app-list.html'
  } catch (error) {
    console.error('Login failed:', error)
    error.value = 'Login failed. Please try again.'
  }
}

onMounted(() => {
  getSurveyListData()
})
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
