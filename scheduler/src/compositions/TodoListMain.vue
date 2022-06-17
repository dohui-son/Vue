<template></template>

<script>
import  {ref, provide, inject, watch} from 'vue'
import  {useFilter} from "../modules/useFilter";

import TodoListMenu from "../components/TodoListMenu";
import TodoList from "../components/TodoList";

export default {
  name:'TodoListMain',
  setup(props){
    const {
      getPendingTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
        getAllTodos,
    } = useFilter()
    const filter  = ref(0)
    const filtered_todos = ref([])
    const pending_todos = ref([])
    const use_category = ref(false)
    const todos = inject('todos')

    const filters = {
      0:{
        str: 'PLANS',
        func: getActiveTodayTodos,
        category:false,
      },
      1:{
        str:'COMPLETE',
        func: getCompletedTodayTodos,
        category: false,
      },
      2:{
        str: 'TODAY LISTS',
        func: getAllTodayTodos,
        category:false,
      },
      3:{
        str:'WHOLE PLANS'
        func: getAllTodos,
        category:true
      },
    }

    provide('filters', filters)

    const groupBy = (todos) =>{
      return todos.reduce((acc, cur)=>{
        acc[cur['date']] = acc[cur['date']] || []
        acc[cur['date']].push(cur)
        return acc
      }, {})
    }

    const onChangeFilter = (filter_idx) =>{
      filter.value = Number(filter_idx)
    }

    watch(
        [()=>
        filter.value, todos.value]
    )
  }

}
</script>