<template>
  <!-- Modal -->
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import content from '../../services/content.js'
export default {
  name: 'editModal',
  components: {content},
  props: ['id'],
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
