<div id="demo">
	{{message}}
	<input v-model="message">
</div>

<script>
	var vm = new Vue({
		el: '#demo',
		data: {
			message: 'Hello Vue.js!'
		}
	});
</script>
