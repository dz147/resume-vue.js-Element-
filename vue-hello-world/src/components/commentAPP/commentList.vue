<template>
	<div class="commentBox">
		<h3>评论</h3>
		<p v-if="comment.length==0">暂无评论，我来发表第一篇评论！</p>
		<div v-else>
			<div class="comment" v-for="(item,index) in comment" v-bind:index="index" :key="item.name">
				<b>{{item.name}}<span>{{item.time}}</span></b>
				<p style="cursor:pointer" @click="changeCommenter(item.name,index)">{{item.content}}
					<a href="#" @click.prevent="deleteName(item.name)">删除</a></p>
				<div v-if="item.reply.length > 0" :key="item.reply">
					<div class="reply" v-for="reply in item.reply" >
						<b>{{reply.responder}}<span>{{reply.time}}</span></b>
						<p style="cursor:pointer" @click="changeCommenter(reply.responder,index)">
						{{reply.content}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['comment'],
		methods: {
			changeCommenter: function(name, index) {
				this.$emit("change", name, index);
			},
			deleteName: function(name) {
				this.$emit("del", name);
			}
		}
	};
</script>
