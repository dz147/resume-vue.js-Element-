<template>
        <div>
            <cinput @woyaobaocun="zhendeyaobaocuna" class="inputTest"></cinput>
			<div >
            <clist @shanchuwo="zhendeyaoshanchu" v-bind:comments="comments" v-loading="loading"></clist>
			</div>
		</div>
</template>


<script>
import commentInput from './comment-input';
import commentList from './comment-list';
export default {
    data() { return {
        comments: [],
		loading:false
    }},
    methods: {
        updateLocal() {
            localStorage.setItem('vvv-comments', JSON.stringify(this.comments));
        },
        zhendeyaobaocuna(res) {
			this.loading = true;
            this.comments.push(res);
			var la = this
			setTimeout(function(){
				la.loading = false;
				la.updateLocal();
			},1000);
			
        },
        zhendeyaoshanchu(id) {
            this.comments = this.comments.filter((c) => c.id != id);
            this.updateLocal();
        }
    },
    components: {
        cinput: commentInput,
        clist: commentList
    },
    created() {
        const cs = localStorage.getItem('vvv-comments');
        if (cs) {
            this.comments = JSON.parse(cs);
        }
    }
}
</script>