<template>
	<div class="hello">
		<label>
			姓名：<span>张东明</span>
		</label>
		<label>
			电话：<span>15768812162</span>
		</label>
		<label>
			专业：<span>软件工程</span>
		</label>
		<label>
			学历：<span>暨南学本科</span>
		</label>
		<div id="myChart" :style="{width: '600px', height: '400px'}"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	console.log(echarts);
	export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '我的技术能力' },
            tooltip: {},
            xAxis: {
                data: ["前端","后台","数据库","SSM","Vue","Bootstrap"]
            },
            yAxis: {},
            series: [{
                name: '分值',
                type: 'bar',
                data: [20, 36, 18, 25, 15, 12]
            }]
        });
    }
  }
}
</script>

<style>

</style>
