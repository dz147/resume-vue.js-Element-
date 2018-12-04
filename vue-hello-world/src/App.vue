<template>

	<el-container>
		<el-aside width="225px">
			<img src="./assets/resume.jpg" width="170px" height="140px" style="margin-left: 20px;margin-top: 50px;" /><br />
			<div class="myInfo" id="app">
				<h3>-------基本信息-------</h3>
				<p>姓名：{{name}}</p>
				<p>出生：{{birthday}}</p>
				<p>意向：{{intention}}</p>
				<p>邮箱：{{mailbox}}</p>
				<p>电话：{{tel}}</p>
				<p>博客：<a :href="blogs">东子IT之路</a> </p>
			</div>
		</el-aside>
		<el-main>
			<el-tag type="success"><strong class="str-size">教育背景</strong> </el-tag>
			<div class="resume-info" style="margin-bottom: 180px;">
				<div class="resume-ui">
					<ul>
						<li><strong>时间</strong>
							<div>
								<p>2018.03-2023.01</p>
								<p>2017.07-2019.06</p>
							</div>
						</li>
						<li><strong>学院</strong>
						<div>
							<p>暨南大学(在读)</p>
							<p>南方IT学院</p>
						</div>
						</li>
						<li><strong>专业</strong>
						<div>
							
							<p>软件工程</p>
							<p>软件工程</p>
						</div>
						</li>
					</ul><p></p>
				</div>
				
			</div>
			<el-tag type="success"><strong class="str-size">项目经历</strong> </el-tag>
			<div class="resume-info">
				<ul class="ui-text">
					<li>项目名称：9°DUKEJI（9°度科技）</li>
					<li>开发周期：2018.06-2018-07</li>
					<li>功能分析：该项目为自营网站，客户能够在后台轻松的添加和管理产品，查看用户的订单，网站首页能够展示产品，模糊查询，</li>
					<li>单产品的详细内容，以及个人购物车，订单的查看。最后提供支付接口。责任描述：项目中担任项目组长，对项目进行了业务流程的分析、</li>
					<li>以及数据库的设计，项目中主要负责控制层的编码工作，完善后台功能代码。</li>
					<li>运用技术：SSM框架,Vue+Element,微信支付API</li>
					<li>项目感言：每个人的能力都是不一样的，我们要让自己拥有一双善于发现的眼睛，
						去发现他人的长处，让每一个人发挥自己的特长，最终在自己的工作岗位上发挥最大的作用。</li>
				</ul>
			</div>
			<el-tag type="success"><strong class="str-size">专业技能</strong> </el-tag>
			<div class="resume-info">
				<ul class="ui-text">

					<li>数据库:熟悉SQL语言，能够熟练使用SQL语句创建表，约束，视图，存储过程及触发器；</li>
					<li>了解使用SQL Server, MySql数据库进行的应用程序开发；</li>
					<li>熟悉数据库设计规范，有一定的数据库设计经验；掌握语言编程规范；</li>
					<li>前端熟练掌握HTML5，CSS3、JS、JQuery、Ajax，能够使用主流前端框架vue、Bootstrap、Layui。</li>
					<li>后台掌握编写JDBC操作数据库，熟练掌握java语言编程，面向对象以及面向接口编程，</li>
					<li>了解多线程，掌握使用Java基础API，操作IO流，以及熟练使用SSM（Spring、Spring MVC、Mybatis）主流框架独立进行Web开发</li>
				</ul>
			</div>
			<el-tag type="success"><strong class="str-size">校园经历</strong> </el-tag>
			<div class="resume-info">
				<ul class="ui-text">
					<li>在校期间担任过为期一年的班长，负责班级的日常管理、上传下达的通知。</li>
					<li>参加过学校组织的德育文化活动，并担任组长获得优秀团队奖，参加过校纪校规获得过三等奖。</li>
				</ul>
			</div>
			<el-tag type="success"><strong class="str-size">自我评价</strong> </el-tag>
			<div class="resume-info">
				<ul class="ui-text">
					<li>具有一定管理能力，团队协作能力、沟通能力，逻辑推理和再学习能力，业余时具有整理与写博客的习惯。</li>
					<li>为人积极进取，勇于挑战，诚实守信，有毅力,为人热情可靠，工作勤奋刻苦，</li>
					<li>有较好的团队意识，集体荣誉感，抗压能力和强烈的责任感。</li>
					<li>业余爱好关注国内经济走向和IT行业发展动态，及城市IT走势，热爱阅读和电影，喜爱篮球体育运动及旅游。</li>
				</ul>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data() {
			return {
				name: '张东明',
				birthday: '1998-07-21',
				intention: 'java后台开发',
				mailbox: '1920098158@qq.com',
				tel: '15768812162',
				blogs: 'https://www.cnblogs.com/dzcici/',
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>

<style>
	#app {
		width: 100%;
		line-height: 50px;
		padding: 0.5em;
	}

	.ui-text {
		line-height: 40px;
	}

	.resume-info {
		border-top: 1px solid #000000;
	}

	.resume-ui ul {
		list-style: none;
		
	}
	.resume-ui ul li{}
	
	.resume-ui li {
		margin-right: 200px;
		float: left;
		font-size: 18px;
	}

	

	.str-size {
		font-size: 20px;
	}

	.el-aside {
		background-color: darkorange;
		color: #FFFFFF;
	}

	.el-main {
		background-color: #FFFFFF;
		color: #333;
	}

	body>.el-container {
		margin-bottom: 40px;
	}
</style>
