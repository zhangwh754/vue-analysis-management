<template>
  <div>
    <vue-office-docx :src="docx" style="height: 100vh" @rendered="rendered" />
    <h2>Hello World</h2>
  </div>
</template>

<script>
import VueOfficeDocx from '@vue-office/docx'
import '@vue-office/docx/lib/index.css'

export default {
  components: {
    VueOfficeDocx,
  },
  data() {
    return {
      docx: 'http://static.shanhuxueyuan.com/test6.docx',
    }
  },
  methods: {
    rendered() {
      console.log('渲染完成')
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  @include overflow(2);
}
</style>
