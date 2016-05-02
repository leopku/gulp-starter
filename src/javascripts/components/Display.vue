<template>
	<div>
		<h3>Count is {{ counterValue }}</h3>
	</div>
</template>

<script>
	export default {
		vuex: {
			getters: {
				counterValue: function (state) {
					return state.count
				}
			}
		}
	}
</script>
