<template>
    <div class ="container">

        <div class="create-post">
            <label for="create-name">Add user: </label>
            <br>
            <br>
            <input type="text" id="create-name" v-model="name" placeholder="enter">
            <label for="create-email">Add topic: </label>
            <br>
            <br>
            <input type="text" id="create-email" v-model="email" placeholder="enter">
            <label for="create-password">Add topic: </label>
            <br>
            <br>
            <input type="text" id="create-password" v-model="password" placeholder="enter">
            <label for="create-user-type">Add topic: </label>
            <br>
            <br>
            <input type="text" id="create-user-type" v-model="user_type" placeholder="enter">
            <button v-on:click="createUser" >Create user</button>

        </div>
        <hr>
        <p class="error" v-if="error">{{ error }}</p>
        <div class="posts-container">
            <div class="post"
                 v-for="(user, index) in users"
                 v-bind:item="user"
                 v-bind:index="index"
                 v-bind:key="user._id">
            </div>

        </div>
    </div>
</template>

<script>

    import userService from "../userService";

    export default {
        name: 'userComponent',
        data() {
            return {
                users: [],
                error: '',
                name: '',
                email:'',
                password:'',
                user_type:''
            }
        },
        async created() {
            try {

                this.users = await userService.getUsers();

            } catch (err) {
                this.error = err.message;

            }
        },
        methods: {

            async createUser() {
                await userService.createUser(this.name, this.email, this.password, this.user_type);

               // window.location.href = 'profilecomponent';
                alert('Welcome back-' + this.email);
                window.location.href = '/profilecomponent' + '#' + this.email;

                this.users = await userService.getUsers();
            },
        }
    };
</script>
