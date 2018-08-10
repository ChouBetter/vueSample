<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <img src="@/assets/logo.png" class="image" />
    <h3 class="title">Master Login</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="Account"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" v-on:click="valFunc">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        account: "",
        checkPass: ""
      },
      rules2: {
        account: [
          {
            required: true,
            message: "Please Input Your Account",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: /^\w{4,16}$/,
            message: "Account Format Fault",
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            message: "Please Input Your Password",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: /^\w{4,16}$/,
            message: "Password Format Fault",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    valFunc() {
      this.$refs["ruleForm2"].validate(valid => {
        if (valid) this.loginFunc();
      });
    },
    loginFunc() {
      console.log(
        JSON.stringify({
          username: this.ruleForm2.account,
          password: this.ruleForm2.checkPass
        })
      );
    }
  }
};
</script>

<style scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 80px auto;
  border: 2px solid #8492a6;
  width: 350px;
  padding: 35px 35px 15px 35px;
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.image {
  display: block;
  margin: auto;
  width: 128px;
  height: 128px;
}
</style>
