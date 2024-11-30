<template>
  <div class="app-list">
    <h1>Applications</h1>
    <div class="app-grid">
      <div class="app-item" @click="navigateToApp('app1')">
        <h2>Management System 1</h2>
        <!-- Add icons or descriptions as needed -->
      </div>
      <div class="app-item" @click="navigateToApp('app2')">
        <h2>Management System 2</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  methods: {
    navigateToApp(app) {
      window.location.href = `/analysis/${app}.html`
    },
  },
}
</script>

<style scoped>
.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.app-item {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.app-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
