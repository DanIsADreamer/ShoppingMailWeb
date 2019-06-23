<template>
	<div class="container" style="margin-top: 75px;">
	<form>
		<div class="form-group">
			<label>用户名：</label>
			<input type="email" class="form-control" id="username" placeholder="用户名">
		</div>
    <div class="form-group">
      <label>昵称：</label>
      <input type="email" class="form-control" id="nickname" placeholder="昵称">
    </div>
		<div class="form-group">
			<label>密码：</label>
			<input type="password" class="form-control" id="password" placeholder="密码">
		</div>
		<div class="form-group">
			<label>确认密码：</label>
			<input type="password" class="form-control" id="RePassword" placeholder="确认密码">
		</div>
    <div class="form-group">
      <label>邮箱：</label>
      <input type="email" class="form-control" id="email" placeholder="邮箱">
    </div>
    <div class="form-group">
      <label>邮箱：</label>
      <input type="date" class="form-control" id="birthday" placeholder="生日">
    </div>
		<div class="form-group">
			<label for="exampleInputFile">上传头像</label>
			<input type="file" id="exampleInputFile">
			<p class="help-block">Example block-level help text here.</p>
		</div>
		<button type="submit" class="btn btn-default">Submit</button>
	</form>
	</div>
</template>

<script>
	export default {
		name: "RegisterView"
	}
</script>

<style scoped>

</style>
