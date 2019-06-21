<template>
	<div class="container" style="margin-top: 75px;">
	<form class="form-horizontal">
		<div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
			<div class="col-sm-10">
				<input type="username" class="form-control" id="inputUsername" placeholder="Email">
			</div>
		</div>
		<div class="form-group">
			<label for="inputPassword3" class="col-sm-2 control-label">密码</label>
			<div class="col-sm-10">
				<input type="password" class="form-control" id="inputPassword" placeholder="Password">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<div class="checkbox">
					<label>
						还没有注册？点击<router-link to="/register">注册</router-link>
					</label>
				</div>
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="submit" class="btn btn-default">Sign in</button>
			</div>
		</div>
	</form>
	</div>
</template>

<script>
	export default {
		name: "loginView"
	}
</script>

<style scoped>

</style>
