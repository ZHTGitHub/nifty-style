# nifty-style

nifty-style是一个实用的样式库。

## 安装

从GitHub上下载[最新的nifty-style](https://github.com/ZHTGitHub/nifty-style)，或使用[npm](https://www.npmjs.com/package/nifty-style)安装:

```bash
npm install nifty-style
```

## 如何使用

```bash
import 'nifty-style'
```
<br />

> <h3 id="background">background</h3>
<br />

深色背景
| 类 | 描述 |
| :---- | :---- |
| bg-red | 嫣红 |
| bg-orange | 橘橙 |
| bg-yellow | 明黄 |
| bg-olive | 橄榄 |
| bg-green | 森绿 |
| bg-cyan | 天青 |
| bg-blue | 海蓝 |
| bg-purple | 姹紫 |
| bg-mauve | 木槿 |
| bg-pink | 桃粉 |
| bg-brown | 棕褐 |
| bg-grey | 玄灰 |
| bg-gray | 草灰 |
| bg-black | 墨黑 |
| bg-white | 雅白 |

浅色背景
```bash
<!-- [深色背景].light -->
<div class="bg-red light"></div
```  

渐变背景
| 类 | 描述 |
| :---- | :---- |
| bg-gradual-red | 魅红 |
| bg-gradual-orange | 鎏金 |
| bg-gradual-green | 翠柳 |
| bg-gradual-blue | 靛青 |
| bg-gradual-purple | 惑紫 |
| bg-gradual-pink | 霞彩 |
<br />

> <h3 id="cursor">cursor</h3>
<br />

| 类 | 描述 |
| :----  | :---- |
| c-auto | 默认 浏览器设置的光标|
| c-crosshair | 光标呈现为十字线|
| c-default | 默认光标（通常是一个箭头）|
| c-e-resize | 此光标指示矩形框的边缘可被向右（东）移动|
| c-help | 此光标指示可用的帮助（通常是一个问号或一个气球）|
| c-move | 此光标指示某对象可被移动|
| c-n-resize | 此光标指示矩形框的边缘可被向上（北）移动|
| c-ne-resize | 此光标指示矩形框的边缘可被向上及向右移动（北/东）|
| c-nw-resize | 此光标指示矩形框的边缘可被向上及向左移动（北/西）|
| c-pointer | 光标呈现为指示链接的指针（一只手）|
| c-progress | 此光标指示正在加载|
| c-s-resize | 此光标指示矩形框的边缘可被向下移动（南）|
| c-se-resize | 此光标指示矩形框的边缘可被向下及向右移动（南/东）|
| c-sw-resize | 此光标指示矩形框的边缘可被向下及向左移动（南/西）|
| c-text | 此光标指示文本|
| c-w-resize | 此光标指示矩形框的边缘可被向左移动（西）|
| c-wait | 此光标指示程序正忙（通常是一只表或沙漏）|
<br />

> <h3 id="display">display</h3>
<br />

| 类 | 描述 |
| :---- | :---- |
| d-none | 此元素不会被显示 |
| d-inline | 默认 此元素会被显示为内联元素 |
| d-inline-block | 行内块元素 |
| d-block | 此元素将显示为块级元素 |
<br />

> <h3 id="elevation">elevation</h3>
<br />

为元素指定自定义的z-index
| 类 | 类 | 类 | 类 | 类 | 类 | 类 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| elevation-0 | elevation-1 | elevation-2 | elevation-3 | elevation-4 | elevation-5 | elevation-6 |
| elevation-7 | elevation-8 | elevation-9 | elevation-10 | elevation-11 | elevation-12 | elevation-13 |
| elevation-14 | elevation-15 | elevation-16 | elevation-17 | elevation-18 | elevation-19 | elevation-20 |
| elevation-21 | elevation-22 | elevation-23 | elevation-24 |
<br />

> <h3 id="flex">flex</h3>
<br />

| 类 | 描述 |
| :---- | :---- |
| z-flex | 指定为 Flex 布局 |
<br />

| 类 | 描述 |
| :---- | :---- |
| flex-row | 水平方向为主轴 左端为起点 |
| flex-row-reverse | 水平方向为主轴 右端为起点 |
| flex-column | 垂直方向为主轴 上沿为起点 |
| flex-column-reverse | 垂直方向为主轴 下沿为起点 |
<br />

| 类 | 描述 |
| :---- | :---- |
| justify-start | 左对齐 |
| justify-end | 右对齐 |
| justify-center | 居中 |
| justify-between | 两端对齐 |
| justify-around | 环绕对齐 |
<br />

| 类 | 描述 |
| :---- | :---- |
| align-start | 交叉轴起点对齐 |
| align-end | 交叉轴终点对齐 |
| align-center | 交叉轴中点对齐 |
| align-baseline | 项目第一行文字的基线对齐 |
| align-stretch | 项目占满整个容器的高度 |
<br />

| 类 | 描述 |
| :---- | :---- |
| align-self-start | 当前元素交叉轴起点对齐 |
| align-self-end | 当前元素交叉轴终点对齐 |
| align-self-center | 当前元素交叉轴中点对齐 |
| align-self-baseline | 当前元素第一行文字的基线对齐 |
| align-self-stretch | 当前元素占满整个容器的高度 |
| align-self-auto | 默认值 |
<br />

| 类 | 描述 |
| :---- | :---- |
| align-content-start | 交叉轴的起点对齐 |
| align-content-end | 交叉轴的终点对齐 |
| align-content-center | 交叉轴的中点对齐 |
| align-content-between | 交叉轴两端对齐 |
| align-content-around | 每根轴线两侧的间隔都相等 |
<br />

| 类 | 描述 |
| :---- | :---- |
| flex-nowrap | 不换行 |
| flex-wrap | 换行 第一行在上方 |
| flex-wrap-reverse | 换行 第一行在下方 |
<br />

| 类 | 描述 |
| :---- | :---- |
| flex-shrink-0 | 阻止该条件的发生 |
| flex-shrink-1 | 允许项目收缩到它的内容所需要的空间 |
| flex-grow-0 | 阻止该条件的发生 |
| flex-grow-1 | 允许元素增长以填充可用的空间 |
<br />

> <h3 id="float">float</h3>
<br />

| 类 | 描述 |
| :---- | :---- |
| float-left | 左浮动 |
| float-right | 右浮动 |
| float-none | 默认值 不浮动 |
<br />

> <h3 id="rounded">rounded</h3>
<br />

| 类 | 描述 |
| :---- | :---- |
| rounded-0 | 0px |
| rounded-sm | 4px |
| rounded-md | 8px |
| rounded-lg | 16px |
| rounded-xl | 24px |
| rounded-pill | 胶囊 |
| rounded-circle | 圆角 |
<br />

> <h3 id="solid">solid</h3>
<br />

| 类 | 描述 |
| :---- | :---- |
| solid | 边框 |
| solid-top | 上边框 |
| solid-right | 右边框 |
| solid-bottom | 下边框 |
| solid-left | 左边框 |
<br />

> <h3 id="margin">margin</h3>
<br />

n为0~16的自然数
| 类 | 描述 |
| :---- | :---- |
| mt-[n] | 上外边距 |
| mt-auto | 浏览器设置的上外边距 |
| mb-[n] | 下外边距 |
| mb-auto | 浏览器设置的下外边距 |
| ml-[n] | 左外边距 |
| ml-auto | 浏览器设置的左外边距 |
| mr-[n] | 右外边距 |
| mr-auto | 浏览器设置的右外边距 |
| mx-[n] | 左右外边距 |
| mx-auto | 浏览器设置的左右外边距 |
| my-[n] | 上下外边距 |
| my-auto | 浏览器设置的上下外边距 |
| ma-[n] | 外边距 |
| ma-auto | 浏览器设置的外边距 |
<br />

| 类 | 描述 |
| :---- | :---- |
| mt-n[n] | 上外负边距 |
| mb-n[n] | 下外负边距 |
| ml-n[n] | 左外负边距 |
| mr-n[n] | 右外负边距 |
| mx-n[n] | 左右负外边距 |
| my-n[n] | 上下负外边距 |
| ma-n[n] | 负外边距 |
<br />

> <h3 id="padding">padding</h3>
<br />

n为0~16的自然数
| 类 | 描述 |
| :---- | :---- |
| pt-n | 上内边距 |
| pb-n | 下内边距 |
| pl-n | 左内边距 |
| pr-n | 右内边距 |
| px-n | 左右内边距 |
| py-n | 上下内边距 |
| pa-n | 内边距 |
<br />

> <h3 id="text">text</h3>

<h4 id="文本对齐">文本对齐</h4>

| 类 | 描述 |
| :---- | :---- |
| text-center | 居中 |
| text-justify | 两端对齐 |
| text-left | 左对齐 |
| text-right | 右对齐 |