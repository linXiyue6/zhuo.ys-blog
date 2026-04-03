<template>
    <h3>我是单文件组件</h3>
    <h3>propx传递数据</h3>

    <p>{{ title }}</p>
    <p>组件间相互传数据，这里把zujian.vue的数据传给VueBasic了所以这些数据会出现在VUeBasic
        如果父组件没有给子组件传递数据，那么子组件的props数据就会是默认值，现在VueBasicjiuan.vue
        没有给VueBasic传递数据，所以title的数据就是默认值，这里就是默认值，而VUeBasic中是“我是一个标题”
        一般情况下是只显示VueBasic页面，这里呈现zujian是因为笔记展示的需求
    </p>
    <h3>自定义事件</h3>
    <button @click="sendClickHandle">点击传递</button>

    <h2>组件生命周期</h2>
    <p>
        创建时：beforeCreate, created
        <br>渲染时/挂载时：beforeMount, mounted
        <br>更新时：beforeUpdate, updated
        <br>卸载/销毁时：beforeUnmount, unmounted
    </p>
    <p>{{ message }}</p>
    <button @click="message = '数据'">点击</button>
</template>

<script>

// 默认导出的对象
    export default {
    name: "Zujian",
    props:{
        title:{
            type: String,
            default: '默认标题',
        }
    },
    data(){
        return {
            message:'我是组件的数据'
        }
    },
    methods:{
        sendClickHandle(){
            //参数一：字符串，理论上是随便的，但是需要具有意义
            //参数二：传递的数据
            this.$emit('onEvent', '点击事件传递的数据')
        }
    },
    beforeCreate(){
        console.log('组件创造之前')
    },
    created(){
        console.log('组件创建完毕')
    },
    beforeMount(){
        console.log('组件渲染之前')
    },
    mounted(){
        console.log('组件挂载完毕')
        // 可能会把网络请求放在这里
    },
    beforeUpdate(){
        console.log('组件更新之前')
    },
    updated(){
        console.log('组件更新完毕')
    },
    beforeUnmount(){
        console.log('组件卸载之前')
        //把消耗性能的组件都处理掉
        //比如定时器
    },
    unmounted(){
        console.log('组件卸载完毕')

    }

}
</script>

<style scoped>
    h3 {
    color: red;
    }
</style>