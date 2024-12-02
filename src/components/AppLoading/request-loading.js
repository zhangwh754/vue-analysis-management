import { ref, computed } from 'vue'

const count = ref(0)

const loading = computed({
  get() {
    return count.value > 0
  },
  set(val) {
    if (val) {
      count.value = count.value + 1
    } else {
      count.value = Math.max(count.value - 1, 0)
    }
  },
})

export default loading
