<template>
  <div class="learn">
    <h2>📝 前端学习笔记</h2>
    <p class="desc">记录我从 0 基础开始学习前端的小 Demo & 练习作品，温馨提示，此处看源码中的批注会更重要</p>

    <div class="search-box">
      <el-input
        v-model="searchKey"
        placeholder="搜索标题/标签"
        clearable
        @input="handleSearch"
      />
    </div>

    <div class="demo-grid">
      <div class="demo-card" v-for="item in showList" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p class="demo-desc">{{ item.desc }}</p>
        <div class="tags">
          <span v-for="tag in item.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <div class="btn-group">
  <a :href="item.isVue ? item.vuePath : item.preview" target="_blank" class="btn preview">在线预览</a>
          <button @click="showCode(item)" class="btn code">查看源码</button>
        </div>
      </div>
    </div>

    <!-- 源码弹窗 -->
    <el-dialog v-model="codeVisible" title="源码查看" width="80%" top="20px">
      <pre class="code-box">{{ currentCode }}</pre>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElDialog, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'

const demoList = ref([
  { file: '01基本骨架.html', title: 'HTML 基本骨架', desc: '搭建 HTML5 标准文档结构', tags: ['HTML', '基础'] },
  { file: '02标签的写法.html', title: 'HTML 标签写法', desc: '掌握双标签、单标签的规范', tags: ['HTML', '基础'] },
  { file: '03标签的关系.html', title: '标签嵌套关系', desc: '理解父子、兄弟、后代元素关系', tags: ['HTML', '基础'] },
  { file: '04注释.html', title: 'HTML 注释', desc: '练习注释的写法与作用', tags: ['HTML', '基础'] },
  { file: '05标题标签.html', title: '标题标签 h1-h6', desc: '练习标题层级与语义化', tags: ['HTML', '基础'] },
  { file: '06段落标签.html', title: '段落标签 p', desc: '学习段落文本排版', tags: ['HTML', '基础'] },
  { file: '07换行与水平线.html', title: '换行与水平线', desc: '练习 br 与 hr 标签的使用', tags: ['HTML', '基础'] },
  { file: '08文本格式的标签.html', title: '文本格式标签', desc: '学习 strong、em、u 等文本样式', tags: ['HTML', '基础'] },
  { file: '09图像标签.html', title: '图像标签 img', desc: '练习图片引入与属性设置', tags: ['HTML', '基础'] },
  { file: '10超链接标签.html', title: '超链接标签 a', desc: '学习页面跳转与锚点', tags: ['HTML', '基础'] },
  { file: '11音频标签和视频标签.html', title: '音视频标签', desc: '练习 audio、video 媒体播放', tags: ['HTML', '多媒体'] },
  { file: '12表格.html', title: 'HTML 表格', desc: '学习 table 标签的基本结构', tags: ['HTML', '布局'] },
  { file: '13表单input.html', title: '表单 input', desc: '练习各类输入框与控件', tags: ['HTML', '表单'] },
  { file: '14下拉菜单.html', title: '下拉菜单 select', desc: '学习下拉选择框用法', tags: ['HTML', '表单'] },
  { file: '15有序列表.html', title: '有序列表 ol', desc: '练习带编号的列表布局', tags: ['HTML', '布局'] },
  { file: '16无序列表.html', title: '无序列表 ul', desc: '学习项目符号列表', tags: ['HTML', '布局'] },
  { file: '17块元素和行内元素.html', title: '块元素与行内元素', desc: '理解元素类型与排版规则', tags: ['HTML', '基础'] },
  { file: '18新标签.html', title: 'HTML5 新标签', desc: '学习 header、footer 等语义化标签', tags: ['HTML', '语义化'] },
  { file: '背景属性.html', title: 'CSS 背景属性', desc: '练习 background 系列样式设置', tags: ['CSS', '样式'] },
  { file: '表格标签.html', title: 'CSS 表格样式', desc: '美化 HTML 表格的样式', tags: ['CSS', '布局'] },
  { file: '定位.html', title: 'CSS 定位 Position', desc: 'relative/absolute/fixed 定位', tags: ['CSS', '布局'] },
  { file: '动画.html', title: 'CSS 动画 Animation', desc: '学习 @keyframes 动画', tags: ['CSS', '动画'] },
  { file: '媒体查询.html', title: 'CSS 媒体查询', desc: '学习不同显示设备不同样式', tags: ['CSS', '媒体查询'] },
  { file: '雪碧图.html', title: 'CSS 雪碧图', desc: '在大图片中扣小图片', tags: ['CSS', '雪碧图'] },
  { file: '浮动.html', title: 'CSS 浮动 Float', desc: '浮动布局与清除浮动', tags: ['CSS', '布局'] },
  { file: '关系选择器.html', title: 'CSS 关系选择器', desc: '后代、子代、兄弟选择器', tags: ['CSS', '选择器'] },
  { file: '盒子模型.html', title: 'CSS 盒子模型', desc: 'margin、padding、border', tags: ['CSS', '基础'] },
  { file: '呼吸.html', title: 'CSS 呼吸灯效果', desc: 'CSS 动画渐变效果', tags: ['CSS', '动画'] },
  { file: '快捷键.html', title: '开发快捷键', desc: 'VS Code 常用快捷键', tags: ['工具'] },
  { file: '列表.html', title: 'CSS 列表样式', desc: '列表美化', tags: ['CSS', '布局'] },
  { file: '外部样式.html', title: 'CSS 外部样式表', desc: 'link 引入 CSS', tags: ['CSS', '基础'] },
  { file: '外部样式2.html', title: '样式优先级', desc: '行内/内嵌/外部优先级', tags: ['CSS', '基础'] },
  { file: '文本属性.html', title: 'CSS 文本属性', desc: 'text-align, text-indent', tags: ['CSS', '样式'] },
  { file: '新特性.html', title: 'CSS 新特性', desc: 'CSS3 新增用法', tags: ['CSS', '进阶'] },
  { file: '选择器.html', title: 'CSS 基础选择器', desc: '标签、类、ID、通配符', tags: ['CSS', '选择器'] },
  { file: '字体属性.html', title: 'CSS 字体属性', desc: 'font、color、weight', tags: ['CSS', '样式'] },
  { file: '综合案例.html', title: '综合案例', desc: 'HTML+CSS 综合练习', tags: ['实战'] },
  { file: 'index_1.html', title: '旧版首页', desc: '首页结构练习', tags: ['HTML'] },
  { file: 'element对象属性.html', title: 'element对象_属性', desc: 'element的对象属性练习', tags: ['JS'] },
  { file: '事件处理程序.html', title: '事件处理', desc: '事件处理程序', tags: ['JS'] },
  { title: 'Vue3 入门',desc: 'setup、ref、reactive 基础使用',tags: ['Vue', '基础'],isVue: true,vuePath: '/demos/vue-basic'},
  { title: 'Vue3 条件渲染',desc: 'v-if 基础使用',tags: ['Vue', '基础'],isVue: true,vuePath: '/demos/vue-v-if'},
  { title: 'Vue3 组件',desc: 'vue组件 基础使用',tags: ['Vue', '基础'],isVue: true,vuePath: '/demos/zujian'},
  { title: 'Vue3引入第三方',desc: 'vue引入第三方以轮播图为例',tags: ['Vue', '基础'],isVue: true,vuePath: '/demos/Carousel'},
  { title: 'Axios网络请求',desc: 'Axios',tags: ['Vue', '基础'],isVue: true,vuePath: '/demos/AxiosUse'},
])

demoList.value.forEach(item => {
  if (!item.isVue) { // 只有 HTML 才拼接
    item.preview = `/demos/${item.file}`
  }
})

// 搜索
const searchKey = ref('')
const showList = computed(() => {
  if (!searchKey.value) return demoList.value
  const k = searchKey.value.toLowerCase()
  return demoList.value.filter(i =>
    i.title.toLowerCase().includes(k) ||
    i.desc.toLowerCase().includes(k) ||
    i.tags.some(t => t.toLowerCase().includes(k))
  )
})
const handleSearch = () => {}

// 弹窗显示源码
const codeVisible = ref(false)
const currentCode = ref('')
const showCode = async (item) => {
  try {
    const res = await fetch(item.preview)
    const text = await res.text()
    currentCode.value = text
    codeVisible.value = true
  } catch (e) {
    currentCode.value = '加载失败'
  }
}
</script>

<style scoped>
.learn {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
.desc {
  color: #666;
  margin-bottom: 20px;
}
body.dark .desc {
  color: #ccc;
}
.search-box {
  margin-bottom: 24px;
  max-width: 400px;
}
.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.demo-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
body.dark .demo-card {
  background: #2a2a2a;
}
.demo-desc {
  font-size: 14px;
  color: #666;
}
body.dark .demo-desc {
  color: #ccc;
}
.tags { display: flex; gap: 6px; margin: 10px 0; }
.tag {
  font-size: 12px;
  background: #f2f2f2;
  padding: 3px 8px;
  border-radius: 6px;
}
body.dark .tag {
  background: #383838;
  color: #ddd;
}
.btn-group {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
.btn {
  padding: 6px 10px;
  font-size: 13px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
}
.preview {
  background: #42b983;
  text-decoration: none;
}
.code {
  background: #666;
}
.code-box {
  background: #f6f6f6;
  padding: 16px;
  border-radius: 8px;
  max-height: 60vh;
  overflow: auto;
  white-space: pre-wrap;
  font-size: 13px;
}
body.dark .code-box {
  background: #222;
  color: #eee;
}
</style>