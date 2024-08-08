/**
 * 封装了 element-message
 * this.$message.success("success");
 * -> import messageSuccess from './common/message.js'
 * -> (vm.)messageError(this, '登录失败');
 * o -> this
 * e -> str
 */

function messageInfo(o, e) {
	o.$message.info(e);
}

function messageSuccess(o, e) {
	o.$message.success(e);
}

function messageError(o, e) {
	o.$message.error(e);
}

function messageWarn(o, e) {
	o.$message.warn(e);
}

function windowReload() {
	window.location.reload();
}

function routerPush(o, e) {
	o.$router.push(e);
}

module.exports = {
	messageInfo,
	messageSuccess,
	messageError,
	messageWarn,
	windowReload,
	routerPush,
};
