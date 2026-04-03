export const getArticleList = () => {
  return [
    {
      id: 1,
      title: 'Vue3 入门学习总结',
      desc: 'Composition API、setup、响应式原理',
      date: '2025-01-01',
      tag: '前端',
      category: 'Vue3',
      content: `
    <p>Vue3 是目前国内使用最广泛的前端框架之一，它带来了更好的性能、更强大的组合式 API，让代码维护和复用变得更加简单。这篇文章记录我学习 Vue3 的核心知识点，方便自己快速回顾。</p>

    <h2>一、Vue3 核心特性</h2>
    <p>Vue3 相比 Vue2 有非常大的升级，主要特点如下：</p>
    <ul>
      <li>使用 Proxy 实现响应式，性能更高、功能更强</li>
      <li>推出 Composition API（组合式 API），代码更易维护</li>
      <li>支持 Tree-Shaking，打包体积更小</li>
      <li>对 TypeScript 支持非常友好</li>
    </ul>

    <h2>二、setup 语法</h2>
    <p>setup 是 Vue3 的入口函数，所有组合式 API 都在里面使用。</p>
    <ul>
      <li>在 beforeCreate 之前执行</li>
      <li>内部没有 this</li>
      <li>可以直接使用 ref、reactive、computed 等</li>
    </ul>

    <h2>三、响应式基础</h2>
    <p>Vue3 提供了两个最常用的响应式 API：</p>
    <ul>
      <li>ref：用于基本数据类型（数字、字符串、布尔）</li>
      <li>reactive：用于对象、数组等复杂类型</li>
    </ul>

    <h2>四、学习心得</h2>
    <p>Vue3 是前端必须掌握的框架，组合式 API 让代码逻辑更清晰，非常适合中大型项目。我会继续深入学习，把 Vue3 真正用熟、用好。</p>
    `
    },
    {
      id: 2,
      title: 'CSS 响应式布局技巧',
      desc: 'Flex、Grid、媒体查询',
      date: '2025-01-05',
      tag: 'CSS',
      category: 'css',
      content: `
    <p>CSS 响应式布局是现代网页开发的核心，能让页面适配不同设备（电脑、手机、平板），提升用户体验。整理了3个最常用的响应式技巧，简单好记、直接能用。</p>

    <h2>一、Flex 布局（一维布局首选）</h2>
    <p>Flex 是一维布局，适合单行或单列的均匀分布，开发中最常用。</p>
    <ul>
      <li>给父容器设置 display: flex;</li>
      <li>justify-content：控制水平方向对齐（center/space-between）</li>
      <li>align-items：控制垂直方向对齐（center/stretch）</li>
      <li>flex-wrap: wrap; 实现自动换行，适配小屏幕</li>
    </ul>

    <h2>二、Grid 布局（二维布局首选）</h2>
    <p>Grid 是二维布局，适合复杂的多行多列布局，灵活高效。</p>
    <ul>
      <li>给父容器设置 display: grid;</li>
      <li>grid-template-columns：控制列数和列宽</li>
      <li>grid-gap：设置元素之间的间距</li>
    </ul>

    <h2>三、媒体查询（适配不同屏幕）</h2>
    <p>根据屏幕宽度切换样式，是响应式的核心。</p>
    <ul>
      <li>语法：@media (max-width: 768px) { ... }</li>
      <li>常用断点：768px（平板）、576px（手机）</li>
      <li>可修改字体、布局、间距，适配小屏幕</li>
    </ul>

    <h2>四、学习心得</h2>
    <p>响应式布局不用死记硬背，掌握 Flex、Grid 和媒体查询，就能应对大部分开发场景，多练习就能熟练运用。</p>
    `
    },
    {
      id: 3,
      title: 'HTML 核心知识点总结',
      desc: '标签、语义化、基础结构',
      date: '2025-01-10',
      tag: 'HTML',
      category: 'html',
      content:  `
    <p>作为前端开发的基石，HTML（超文本标记语言）是构建网页结构的核心，结合我近期的学习练习，整理了HTML最常用、最基础的核心知识点，适合前端入门者回顾，也作为自己的学习沉淀。</p>
<h2>一、HTML 基础认知</h2>
<p>HTML 是超文本标记语言，核心作用是「搭建网页骨架」，无需复杂逻辑，专注于页面结构的呈现，是前端开发的入门第一步，也是所有前端项目的基础。</p>
<p>核心特点：</p>
<ul>
  <li>纯文本标记语言，无需编译，直接用浏览器打开就能运行</li>
  <li>由一系列标签组成，标签通常成对出现（双标签），少数为单标签</li>
  <li>所有前端项目（Vue、React）的底层，本质都是HTML结构</li>
</ul>

<h2>二、HTML 核心标签（必掌握）</h2>
<h3>1. 文档结构标签（页面骨架）</h3>
<p>每个HTML文件的基础结构，必须包含以下标签，是所有页面的通用骨架：</p>
<ul>
  <li>&lt;!DOCTYPE html&gt;：声明文档类型为HTML5，必须放在页面最顶部</li>
  <li>&lt;html&gt;：根标签，包裹整个HTML文档</li>
  <li>&lt;head&gt;：头部，存放页面元信息（标题、编码、样式引用）</li>
  <li>&lt;title&gt;：页面标题，显示在浏览器标签栏</li>
  <li>&lt;body&gt;：主体，存放页面所有可见内容</li>
</ul>
<p>示例代码（可直接复制练习）：(os:其实可以直接shift+1+回车自动填充，简直是简单高效)</p>
<code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;HTML基础&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;HTML入门练习&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code>

<h3>2. 文本与媒体标签</h3>
<p>用于展示页面内容，是博客、学习笔记的核心标签：</p>
<ul>
  <li>&lt;h1&gt;-&lt;h6&gt;：标题标签，h1级别最高（页面唯一），h6级别最低</li>
  <li>&lt;p&gt;：段落标签，用于包裹正文文本</li>
  <li>&lt;img&gt;：图片标签，格式：&lt;img src="图片路径" alt="图片描述"&gt;</li>
  <li>&lt;a&gt;：超链接标签，用于页面跳转、链接到外部资源</li>
  <li>&lt;audio&gt;、&lt;video&gt;：音视频标签，用于嵌入音视频资源</li>
</ul>

<h3>3. 列表标签（高频使用）</h3>
<p>常用于展示学习笔记、文章列表，分为有序列表和无序列表：</p>
<ul>
  <li>无序列表：&lt;ul&gt; + &lt;li&gt;，用于展示无需排序的内容（如学习笔记列表）</li>
  <li>有序列表：&lt;ol&gt; + &lt;li&gt;，用于展示有顺序的内容（如步骤、教程）</li>
</ul>
<p>示例（学习笔记列表常用）：</p>
<code>&lt;ul&gt;
  &lt;li&gt;CSS 盒子模型&lt;/li&gt;
  &lt;li&gt;CSS 浮动布局&lt;/li&gt;
  &lt;li&gt;CSS 定位（relative/absolute/fixed）&lt;/li&gt;
  &lt;li&gt;CSS 动画效果&lt;/li&gt;
&lt;/ul&gt;</code>

<h2>三、HTML 学习心得</h2>
<p>学习HTML的过程中，我深刻体会到「基础的重要性」——HTML看似简单，却是所有前端项目的根基，无论是Vue、React项目，还是简单的静态页面，底层都是HTML结构。</p>
<p>前期练习时，我通过编写多个HTML小Demo，熟练掌握了各类标签的用法，也明白了「语义化标签」的重要性——用正确的标签做正确的事，不仅能提升代码可读性，还能助力SEO。</p>
<p>后续我会持续更新HTML相关的学习笔记，记录更多基础知识点和练习Demo，夯实前端基础。</p>
  `
    },
    {
      id: 4,
      title: 'CSS 核心知识点总结',
      desc: '盒子模型、浮动、定位、动画',
      date: '2025-01-15',
      tag: 'CSS',
      category: 'css',
      content: `
<p>CSS（层叠样式表）是网页的「皮肤」，负责美化HTML结构，让单调的页面变得美观、有层次感，结合我近期的学习练习，整理了CSS最核心、最常用的知识点，适合前端入门者回顾和巩固。</p>
<h2>一、CSS 基础认知</h2>
<p>CSS 全称层叠样式表，核心作用是「美化HTML页面」，控制页面的颜色、字体、间距、布局等，与HTML相辅相成——HTML搭建骨架，CSS美化外观，二者缺一不可。</p>
<p>核心特点：</p>
<ul>
  <li>层叠性：多个样式可以作用于同一个元素，优先级高的样式生效</li>
  <li>继承性：子元素会继承父元素的部分样式（如字体、颜色）</li>
  <li>优先级：ID选择器 &gt; 类选择器 &gt; 标签选择器</li>
</ul>

<h2>二、CSS 核心知识点（必掌握）</h2>
<h3>1. 盒子模型（基础中的基础）</h3>
<p>所有HTML元素都可以看作一个「盒子」，由4部分组成：</p>
<ul>
  <li>content：内容区，存放文本、图片等实际内容</li>
  <li>padding：内边距，内容与边框之间的距离</li>
  <li>border：边框，盒子的轮廓，可设置宽度、样式、颜色</li>
  <li>margin：外边距，盒子与其他盒子之间的距离</li>
</ul>
<p>核心代码（常用）：</p>
<code>.box {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 20px;
  box-sizing: border-box; /* 关键：宽高包含padding和border */
}</code>

<h3>2. CSS 浮动（float）</h3>
<p>用于实现元素并排布局，是早期布局的核心方式，至今仍在使用：</p>
<ul>
  <li>float: left; ：元素向左浮动</li>
  <li>float: right; ：元素向右浮动</li>
  <li>注意：浮动后会脱离文档流，需清除浮动避免布局错乱</li>
</ul>
<p>清除浮动常用方法：</p>
<code>.clearfix::after {
  content: "";
  display: block;
  clear: both;
}</code>

<h3>3. CSS 定位（position）</h3>
<p>用于精确控制元素位置，是实现复杂布局的核心，常用值：</p>
<ul>
  <li>static：默认值，元素按文档流排列</li>
  <li>relative：相对定位，相对于自身原来的位置偏移</li>
  <li>absolute：绝对定位，相对于最近的已定位父元素偏移</li>
  <li>fixed：固定定位，相对于浏览器窗口定位，滚动页面不移动（如导航栏）</li>
</ul>

<h3>4. CSS 动画（animation）</h3>
<p>用于实现页面交互效果，提升用户体验，常用场景：按钮hover、页面过渡、Demo预览动效：</p>
<p>核心代码（示例：呼吸灯效果）：</p>
<code>@keyframes breathe {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}
.box {
  animation: breathe 2s infinite;
}</code>

<h2>三、CSS 学习心得</h2>
<p>CSS 看似简单，但想要灵活运用，需要大量练习——我通过编写多个小Demo，逐渐掌握了盒子模型、浮动、定位、动画的用法，也明白了「布局的核心是逻辑」，而非死记硬背代码。</p>
<p>后续我会持续更新CSS相关的学习笔记，补充更复杂的布局技巧和交互效果，夯实前端基础。</p>  `
    },
    {
      id: 5,
      title: 'js 核心知识点总结',
      desc: 'JavaScript',
      date: '2025-03-27',
      tag: 'JS',
      category: 'JS',
      content: `
      <p>因为博主具有Java、C语言、python语言的基础，所以对于JavaScript不像之前HTML与CSS一样细致地记笔记，基础知识不再写一遍</p>
      <p>如果你需要学习，推荐网络教程适合新手，半新不新的同学推荐CSDN的一篇帖子，讲的还挺细的：<a href="https://blog.csdn.net/qq_38490457/article/details/109257751?ops_request_misc=elastic_search_misc&request_id=741e7091a3ad2bc6f0e7e30720c79658&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-109257751-null-null.142^v102^pc_search_result_base4&utm_term=Javascript&spm=1018.2226.3001.4187" style="color: #34cbf4; font-weight: bold;" >CSDN的链接</a></p>
      <p>可以去学习笔记区看看我写的代码，仅作为我的笔记</p>
      `
    },
    {
      id: 6,
      title: 'vue 知识点总结',
      desc: 'vue3',
      date: '2025-03-30',
      tag: 'vue',
      category: 'vue',
      content: `
      <p>总结中....</p>
      `
    }
  ]
}

export function getArticleById(id) {
  const list = getArticleList()
  return list.find(item => item.id === Number(id))
}