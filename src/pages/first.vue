<template>
	<view>
		<title title="初见"></title>
		<view>
			<typed :content="title"></typed>
		</view>
	</view>
</template>

<script>
	import Title from '../components/Title.vue'
	import Typed from '../components/Typed'
	export default {
		components: {
			Typed,
			Title
		},
		data() {
			return {
				title: 'Hello ddddddddd dddddddddddddddd d'
			}
		},
		onLoad() {
			// wx.showModal({
			// 	title: 'Danica',
			// 	content: 'Be my queen?',
			// 	cancelText: '好的',
			// 	confirmText: '可以',
			// 	success (res) {
			// 		if (res.confirm) {
			// 			console.log('用户点击确定')
			// 		} else if (res.cancel) {
			// 			console.log('用户点击取消')
			// 		}
			// 	}
			// })
		},
		methods: {

		}
	}
</script>

<style>
 </style>
