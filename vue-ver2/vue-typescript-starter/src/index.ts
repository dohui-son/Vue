import Vue from 'vue'

new Vue({
    el: '#app',
    template: `
    <div>
      <div>Hello {{name}}!</div>
      Name: <input type="text" v-model="name">
    </div>
  `,
    data: {
        name: 'World'
    }
})
