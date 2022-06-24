<!-- 신규 할일 추가 - 유저에게서 새 할일을 입력받음 -->
<template>
  <section class="mb-5">
    <div class="container">
      <div class="row justify-content-center m-2">
        <div class="col border border-primary rounded">
          Todo : 현재 작업 진행중----------------------여기서부터 다시 진행
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, inject, ref } from "vue";
export default {
  name: "TodoListNew",
  setup() {
    const today = inject("Today");
    const addTodo = inject("addTodo");
    const val_obj = reactive({
      job: "",
      date: today,
      today: today,
    });

    const onAddTodo = () => {
      if (val_obj.job.length > 0) {
        addTodo(val_obj.job, val_obj.date);
        val_obj.job = "";
        val_obj.date = today;
      }
    };

    return {
      ...toRefs(val_obj),
      onAddTodo,
    };
  },
};
</script>
