<!--컴포넌트 템플릿을 정의하는 <template> 파트-->
<template>
  <div  id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>ToDo List</h1>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <h2 id="list-summary" ref="listSummary" tabindex="-1">{{listSummary}}</h2>
    <ul aria-labelledby="list-summary" class="stack-large">
<!--      ARIA는 HTML요소에 접근 가능한 설명용 텍스트를 넣을 수 있다. 그 방법이 바로 ARIA의 속성 중 label과 관련된 속성을 사용하는 것이다. aria-labelledby는 화면에 현재 요소를 설명할 텍스트가 있을 경우에 해당 텍스트 영역과 현재 요소를 연결할 때 사용-->
      <li v-for="item in ToDoItems" :key="item.id">
      <to-do-item :label="item.label"  :done="item.done" :id="item.id"
                  @checkbox-changed="updateDoneStatus(item.id)"
                  @item-deleted="deleteToDo(item.id)"
                  @item-edited = "editToDo(item.id, $event)"
      > </to-do-item>
<!--        Note that you need to use the v-bind syntax, because otherwise true is passed as a string.-->
      </li>
    </ul>
</div>
</template>

<!--스크립트를 작성하는 <script> 파트-->

<script>
import ToDoItem from './components/ToDoItem.vue'
import uniqueId from 'lodash.uniqueid' //고유아이디 부여 npm install --save lodash.uniqueid
import ToDoForm from "@/components/ToDoForm";

// <script> 태그 안에 반드시 기본으로 export되는 (하단 코드의 export default 구문 참고) JS 오브젝트가 있어야 한다
export default {
  name: 'app',
  components: {
    //You can register components locally here
    ToDoItem,
    ToDoForm
  }
  ,
  data(){
    return {
      ToDoItems: [
        {id: uniqueId('todo-'), label: ' Ex 1. waking up 9 a.m', done: true}, //uniqueId() returns the specified prefix — todo- — with a unique string appended to it
        {id: uniqueId('todo-'), label: ' Ex 2. add todo by yourself', done: false}
      ]
    }
  },
  methods:{
    addToDo(toDoLabel){
      console.log('To-do add from app');
      console.log('Data from children to parent : ', toDoLabel)
      this.ToDoItems.push({id:uniqueId('todo-'), label:toDoLabel, done:false})
    },
    updateDoneStatus(toDoId){
      const toDoToUpdate = this.ToDoItems.find(item=>item.id === toDoId)
      toDoToUpdate.done = !toDoToUpdate.done
    },
    deleteToDo(toDoId){
      const itemIndex = this.ToDoItems.findIndex(item => item.id === toDoId);
      this.ToDoItems.splice(itemIndex, 1);
      this.$refs.listSummary.focus();
    },
    editToDo(toDoId, newLabel){
      const toDoToEdit = this.ToDoItems.find(item => item.id ===toDoId);
      toDoToEdit.label = newLabel;
    }
  },

  computed: { //want to run this method whenever a ToDoItem emits a checkbox-changed event, and pass in its item.id as the parameter
    listSummary() {
      const numberFinishedItems = this.ToDoItems.filter(item =>item.done).length
      return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
    }
  }
}
</script>

<!--스타일링 정보를 작성하는 <style> 파트-->
<style> //scoped 속성을 추가하면 Vue는 그 안의 내용을 SFC(단일 파일 컴포넌트) 내부 범위에서만 적용   <style scoped lang="scss">
/* Global styles */
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;

}
.btn:hover{
  background-color: #41B883;
  color: white;
}
.btn__danger {
  color: #fff;

  background-color: lightslategray;
  border-color: lightslategray;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__danger:focus {
  outline-color: lightslategray;
}
.btn__primary {
  color: #fff;
  background-color: #34495E;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 auto;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;

}
[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
[class*="stack"] > * {
  margin-top: 0;
  margin-bottom: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
/* End global styles */
#app {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  #app {
    padding: 4rem;
  }
}
#app > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
#app > form {
  max-width: 100%;
}
#app h1 {
  display: block;
  min-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
</style>
