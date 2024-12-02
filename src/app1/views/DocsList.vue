<template>
  <div class="docs-list">
    <div class="docs-header">
      <h2>Documents List</h2>
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search documents..."
          @input="filterDocs"
        />
      </div>
    </div>

    <div class="docs-grid">
      <div v-for="doc in filteredDocs" :key="doc.id" class="doc-card" @click="viewDocument(doc)">
        <div class="doc-icon">📄</div>
        <div class="doc-info">
          <h3>{{ doc.title }}</h3>
          <p>{{ doc.date }}</p>
        </div>
      </div>
    </div>

    <n-avatar round>user</n-avatar>

    <a-button type="primary">查看</a-button>
  </div>
</template>

<script>
export default {
  name: 'DocsList',
  data() {
    return {
      searchQuery: '',
      docs: [
        {
          id: 1,
          title: 'Sample Document 1',
          date: '2024-03-20',
          url: 'http://static.shanhuxueyuan.com/test6.docx',
        },
        {
          id: 2,
          title: 'Sample Document 2',
          date: '2024-03-19',
          url: 'http://static.shanhuxueyuan.com/test6.docx',
        },
        // Add more sample documents as needed
      ],
    }
  },
  computed: {
    filteredDocs() {
      return this.docs.filter(doc =>
        doc.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },
  methods: {
    viewDocument(doc) {
      this.$router.push({
        name: 'DocViewer',
        params: { id: doc.id },
        // query: { url: doc.url },
      })
    },
    filterDocs() {
      // Implement additional filtering logic if needed
    },
  },
}
</script>

<style scoped>
.docs-list {
  padding: 20px;
}

.docs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 250px;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.doc-card {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.doc-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.doc-icon {
  font-size: 24px;
  margin-right: 15px;
}

.doc-info h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.doc-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}
</style>
