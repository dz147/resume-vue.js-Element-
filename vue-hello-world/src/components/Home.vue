<template>
  <div class="home">
   <comment></comment>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import Comment from './comment/comment-comp.vue'

export default {
  name: 'home',
  components: {
    'HelloWorld':HelloWorld ,
		'comment': Comment
	},
}
</script>
