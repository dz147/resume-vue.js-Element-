<template>
	<div class="commentBox">
		<h3>发表评论</h3>
		<label>用户名：</label><input type="text" v-model="userName" /><br /><br />
		<p><b v-if="type">你回复&nbsp;{{name}}</b></p>
		<br /><label>内容：</label><textarea name="" value="请填写评论内容" v-model="commentText"></textarea>
		<button class="btn" @click="addComment">发表</button>
		<button class="btn" @click="canelComment">取消</button><br /><br /><br />
	</div>
</template>

<script>
	export default {
		name: 'article',
		props: ['type', 'name', "commenter"],
		data: function() {
			return {
				userName: "",
				commentText: ""
			}
		},
		methods: {
			addComment: function() {
				if (this.commentText === "" || this.userName === "") {
					alert("评论内容或者名称不能为空！");
					return
				}
				
				var uName = "";
				//this.$parent.type;
				var obj = JSON.parse(localStorage.getItem('comment'));
				
				if (obj != null) {
					for (var i = 0; i < obj.length; i++) {
						if (obj[i].name === this.userName) {
							uName = obj[i].name;
							
						}
					}
				}

				if (uName === "") {
					this.$emit("submit", this.commentText, this.userName);
					this.commentText = "";
				} else {
					this.$emit("submit", this.commentText, uName);
					this.commentText = "";
				}

			},
			canelComment: function() {
				this.$emit("canel");
				this.commentText = "";
			}
		}
	};
</script>