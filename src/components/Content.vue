<template>
  <div>
    <div v-for="p in pageContent" v-if="auth === false" :key="p.id" :id="p.id" v-html="p.content" class="content">
    </div>
    <div v-for="p in pageContent" v-if="auth === true" :key="p.id" :id="p.id" v-html="p.content" v-on:click="editContent($event)" class="content content-edit">
    </div>
  </div>
</template>

<script>
import content from '../../services/content.js'
import editModal from '../components/editModal.vue'
export default {
  name: 'Content',
  components: {content, editModal},
  props: ['id'],
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageContent: content.loadAll(this.id),
      auth: true
    }
  },
  methods: {
    editContent: function (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.content {
  margin-bottom: 20px;
}

.content-edit {
  border: 2px dashed #ccc;
    opacity: 1;
    background-color: transparent;
}

.content-edit:hover {
    opacity: 0.8;
    background-color: #eee;
    cursor: pointer;
}
</style>
