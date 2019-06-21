<template>
	<div class="container" style="margin-top: 75px;">
	<form>
		<div class="form-group">
			<label for="exampleInputEmail1">用户名：</label>
			<input type="email" class="form-control" id="username" placeholder="Email">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">密码：</label>
			<input type="password" class="form-control" id="password" placeholder="Password">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">确认密码：</label>
			<input type="password" class="form-control" id="RePassword" placeholder="Password">
		</div>
		<div class="form-group">
			<label for="exampleInputFile">上传头像</label>
			<input type="file" id="exampleInputFile">
			<p class="help-block">Example block-level help text here.</p>
		</div>
		<div class="checkbox">
			<label>
				<input type="checkbox"> Check me out
			</label>
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
