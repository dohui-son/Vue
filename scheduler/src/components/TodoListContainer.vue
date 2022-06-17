<template></template>
<script>
import {ref,readonly, provide} from 'vue'
export default {
 name : 'TodoListContainer',
 setup(){
   // provide(readonly)/inject
   const todos = ref([])
//   todos변수는 ref를 통해서 생성된 프록시 객체이므로 실제 배열값은 value를 통해 접근 가능
   provide('todos', readonly(todos))
   const initTodos = (init_todos) =>{
     todos.value = init_todos
   }
   const addTodo = (todo, date) => {}
   const removeTodo = (id) => {}
   const completeTodo = (id) => {}

   provide('addTodo', addTodo)
   provide('removeTodo', removeTodo)
   provide('completeTodo', completeTodo)
 }
}
</script>