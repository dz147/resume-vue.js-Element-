<template>
	<div class="comList">
	<span class='comment-author'>{{comment.author}}:&nbsp;&nbsp;&nbsp;</span>
	<span class='comment-content'>{{comment.commentTime}}&nbsp;&nbsp;&nbsp;
	{{comment.content}}</span>
	<i href @click.prevent='deleteMe' class="el-icon-delete"></i>
	</div>
</template>
<script>
	export default {
		props: ['comment'],
		methods: {
			deleteMe() {
				this.$emit('shanchuwo', this.comment.id);
			}
		}
	};
</script>