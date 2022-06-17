<template></template>
<script>
import {ref,watch,computed,inject} from 'vue'
export default {
  name:'TodoListMenu',
  emits:['change-filter'],
  setup(props,context){
    const filters = inject('filters')
    const filter = ref(0)
    const state = computed(()=> {
      return filters[filter.value].str
    })
    watch(
        ()=> filter.value,
        (filter) =>{
          context.emit('change-filter',filter)
        }
    )
    return {
      state,
      filter,
      filters,
    }
  }

}
</script>