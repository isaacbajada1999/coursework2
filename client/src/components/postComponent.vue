<template>
<div class ="container">
    <router-link to="/postComponent" >Show me post component</router-link>
  <h1>Create a new course</h1>
  <div class="create-post">
    <label for="create-topic">Add topic: </label>
<br>
      <br>
    <input type="text" id="create-topic" v-model="topic" placeholder="enter" required>
<br>
    <br>
      <label for="create-price">Add a price: </label>
      <br>
      <br>
      <input type="text" id="create-price" v-model="price" placeholder="enter">
    <br>
      <br>
    <label for="create-location">Add a location: </label>
      <br>
      <br>
    <input type="text" id="create-location" v-model="location" placeholder="enter">
      <br>
      <br>
    <label for="create-provider">Add a provider: </label>
      <br>
      <br>
    <input type="text" id="create-provider" v-model="provider" placeholder="enter">
      <br>
      <br>
    <button v-on:click="insertPost">Create course</button>

  </div>
  <hr>
  <p class="error" v-if="error">{{ error }}</p>
<div class="posts-container">
  <div class="post"
       v-for="(post, index) in posts"
       v-bind:item="post"
       v-bind:index="index"
       v-bind:key="post._id">

    <br>

      <p>Course topic:</p>
    <p class="text">{{post.topic}}  </p>

    <p>Course price:</p>
    <p class="text"> {{post.price}}    </p>
    <p>Course location:</p>
    <p class="text">{{post.location}}  </p>
    <p>Created by:</p>
    <p class="text"> {{post.provider}}   </p>
    <button v-on:click="deletePost(post._id)">Delete course</button>
<br>
      <br>

<br>
      <br>
      <input  type="text"  v-model="post.topic"/>
      <input  type="text"  v-model="post.price"/>
      <br>
      <br>
      <input  type="text"  v-model="post.location"/>
      <br>
      <br>
      <input  type="text"  v-model="post.provider"/>
      <button v-on:click="updatePost(post._id)">Update course</button>
</div>

  </div>
</div>
</template>

<script>
import postService from '../postService';

export default {
  name: 'postComponent',
  data() {
    return {
      posts: [],
      error: '',
      topic: '',
      price: '',
      location: '',
      provider: ''




    }
  },
  async created() {
    try {

      this.posts = await postService.getPosts();
    } catch (err) {
      this.error = err.message;

    }
  },
  methods: {

    async insertPost() {
      await postService.insertPost(this.topic, this.price, this.location, this.provider);
      this.posts = await postService.getPosts();
    },

      async updatePost(id) {
          var updatedTopic = prompt("Please enter new value", "New post value")
          await postService.updatePost(id, updatedTopic);
          this.posts = await postService.getPosts();
      },


    async deletePost(id) {
      await postService.deletePost(id);
      this.posts = await postService.getPosts();
    }
  }
      };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

  .post{
    background-color: #228B22;
    position: relative;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .create-post input{
   margin-left: 20px;
  }

  .create-post label{
    margin-left: 30px;

  }

</style>
