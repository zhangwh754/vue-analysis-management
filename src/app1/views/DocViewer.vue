<template>
  <div>
    <vue-office-docx :src="docx" style="height: 100vh" @rendered="rendered" />
    <h2>Hello World</h2>
  </div>
</template>

<script setup>
import VueOfficeDocx from '@vue-office/docx'
import '@vue-office/docx/lib/index.css'

const docx = ref('http://static.shanhuxueyuan.com/test6.docx')

const obj1 = reactive({ a: 1 })

const rendered = () => {
  console.log('渲染完成')
}

useRequest()
</script>

<style lang="scss" scoped>
h2 {
  @include overflow(2);
}
</style>
