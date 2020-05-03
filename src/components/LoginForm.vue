<template>
  <div class="login-form">
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native="onSubmit"
      ref="loginForm"
    >
      <ElFormItem
        label="Email"
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email" />
      </ElFormItem>
      <ElFormItem
        label="Password"
        prop="password"
        size="small"
      >
        <ElInput v-model="formData.password" type="password"/>
      </ElFormItem>

      <ElButton
        type="success"
        plain
        size="small"
        native-type="submit"
        :loading="loginInProgress"
      >
        Login
      </ElButton>
    </ElForm>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters('auth', ['loginInProgress']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit(e) {
      e.preventDefault();
      this.$refs.loginForm.validate((isValid) => {
        console.log(isValid);
        if (!isValid) return;
        this.login({ ...this.formData });
      });
    },
  },
};
</script>

<style scoped>

</style>
