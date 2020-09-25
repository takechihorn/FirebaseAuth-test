<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>
      <p class="display-1 text--primary">ログイン</p>
      <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
      <v-text-field
        v-bind:type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="パスワード"
        @click:append="showPassword = !showPassword"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4" @click="login">ログイン</v-btn>
      <v-btn text color="green accent-4" @click="login">テストユーザーでログイン</v-btn>
    </v-card-actions>
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>todo</th>
          <th>limit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.todo">
          <td>{{todo.todo}}</td>
          <td>{{todo.limit}}</td>
        </tr>
      </tbody>
    </table>

    <div class="field is-grouped">
      <p class="control is-expanded">
        <input v-model="newTodo" class="input" type="text" placeholder="todo" />
      </p>
      <p class="control is-expanded">
        <input v-model="newLimit" class="input" type="text" placeholder="limit" />
      </p>
      <p class="control">
        <a class="button is-primary" @click="addTodo">add</a>
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "App",
  // computed: () => ({
  //   showPassword: false
  // }),
  data() {
    return {
      newTodo: "",
      newLimit: "",
      showPassword: false
    };
  },
  methods: {
    login() {
      console.log("login");
      this.$store.dispatch("login");
    },
    addTodo() {
      const todo = this.newTodo;
      const limit = this.newLimit;

      this.$store.dispatch("addTodo", { todo, limit });
      this.newTodo = "";
      this.newLimit = "";
    }
  },

  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>
