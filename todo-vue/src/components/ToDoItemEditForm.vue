<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Editing  &quot;{{label}}&quot;
      </label>
      <input :id="id" ref="labelInput" type="text" autocomplete="off" v-model.lazy.trim ="newLabel"/>
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">Cancel
        <span class="visually-hidden">editing {{label}}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for {{label}}</span>
      </button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newLabel: this.label
    };
  },
  methods: {
    onSubmit() {
      if (this.newLabel && this.newLabel !== this.label) {
        this.$emit("item-edited", this.newLabel);
      }
    },
    onCancel() {
      this.$emit("edit-cancelled");
    }
  },
  mounted(){
    const labelInputRef = this.$refs.labelInput;
    labelInputRef.focus();
  }

};
</script>

<style scoped>
.edit-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: lightgray;
  display: block;
  margin-bottom: 5px;
  font-weight: lighter;
}
input {
  display: inline-block;
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  color: #34495E;

}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form > * {
  flex: 0 0 100%;
}
</style>