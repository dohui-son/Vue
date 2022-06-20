<!-- TodoListMain컴포넌트 기획 : TodoListMenu로부터 filters의 키값을 받아, 연계된 함수 호출후 요구된 배열을 TodoList에 전달하는 역할-->
<template>
  <todo-list-menu v-on:change-filter="onChangeFilter" class="p-0">

  </todo-list-menu>
</template>

<script>
import  {ref, provide, inject, watch} from 'vue'
import  {useFilter} from "./useFilter";

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
        filter.value, todos.value],
        ([new_filter,new_todos], [old_filter, old_todos]) =>{
          pending_todos.value = getPendingTodos(todos)
          if(typeof new_filter != 'undefined'){
            let temp_todos = filters[new_filter].func(todos)
            filtered_todos.value = groupBy(temp_todos)
            use_category.value = filters[new_filter].category
          }
        },
        {immediate: true}


        return {
          filter, pending_todos,filtered_todos,use_category,onChangeFilter,
        }
  },
  components:{
    TodoList,
    TodoListMenu
  },
}
</script>