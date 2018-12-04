<template>
	<div>
		<button type="button" @click="reload">清空评论</button>
		<articlecontent v-bind:article="article"></articlecontent>
		<commenttextarea v-bind:type="type" v-bind:name="oldComment" @submit="addComment" v-on:canel="canelCommit"></commenttextarea>
		<commemtcontent v-bind:comment="comment" @change="changCommmer" @del="deleteName"></commemtcontent>,
	</div>
</template>

<script>
	import articlecontent from './article'
	import commenttextarea from './commentList'
	import commemtcontent from './commentInputText'
	
	export default {
		data() {
			return {
				commenter: "", //评论人
				type: 0, //0为评论作者1为评论别人的评论2为评论别人的别人
				oldComment: null,
				chosedIndex: -1, //被选中的评论的index
				article: {
					title: "当归泡水喝的九大功效",
					time: "2018-11-18",
					read: 9999,
					content: "<p>当归是一种我们生活中经常使用到的药材</p><p>文章内容...... 自己领悟！！！</p>"
				},
				comment: []
			}
		},
		created: function() {
			const f = JSON.parse(localStorage.getItem('comment'));
			if (f != null) {
				this.comment = f;
			}
		},
		methods: {
			addComment: function(data, name) {
				var myLocalStorage = localStorage.setItem("comment", JSON.stringify(this.comment));
				this.commenter = name;
				if (this.type == 0) {
					this.comment.push({
						name: this.commenter,
						time: getTime(),
						content: data,
						reply: []
					});
					myLocalStorage
					//服务器端变
				} else if (this.type == 1) {
					this.comment[this.chosedIndex].reply.push({
						responder: this.commenter,
						reviewers: this.comment[this.chosedIndex].name,
						time: getTime(),
						content: data
					});
					//this.type = 0;
					myLocalStorage
				}
			},
			changCommmer: function(name, index) {
				this.oldComment = name;
				this.chosedIndex = index;
				this.type = 1;
			},
			canelCommit: function() {
				this.type = 0;
			},
			reload: function() {
				localStorage.clear();
				window.location.reload();
			},
			deleteName: function(name) {
				this.comment = this.comment.filter((c) => c.name != name);
				localStorage.setItem("comment", JSON.stringify(this.comment));
			}
		},
		components: {
			 articlecontent,
			 commenttextarea,
			 commemtcontent
		}
	};
	//格式化时间
	function getTime() {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var time = now.toLocaleTimeString();
		month.length < 2 ? "0" + month : month;
		day.length < 2 ? "0" + day : day;
		return year + "-" + month + "-" + day + time;
	}
</script>
