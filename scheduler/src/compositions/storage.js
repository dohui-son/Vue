// localstorage에 데이터를 저장하는 코드
import {reactive, toRefs} from 'vue' //변수에 반응성을 더해주기위해 사용
//reactive는  객체에 반응성을 더해주는 함수
//toRefs는 객체으 ㅣ내부 속성들 모두에게 반응성을 더해준다

export const useStorage = () => {   //useStorage 함수를 만들고 이 함수를 ES모듈로 export시켜준다
    const KEY = 'my-todo-list'
    const storage_obj = reactive({storage_id: 0})
    const loadTodos = (initTodos) =>{
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
        temp_todos.forEach((todo,idx) =>{
            todo.id = idx
        })
        storage_obj.storage_id = temp_todos.length
        storage_obj.storage_id = temp_todos.length
        initTodos(temp_todos)
    }
    const saveTodos = (todos) =>{
        localStorage.setItem(KEY, JSON.stringify((todo.value)))
    }
    return {
        ...toRefs(storage_obj),
        loadTodos,
        saveTodos,
    }
}