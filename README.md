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
|  :----  | :----  |
| c-auto   | 默认 浏览器设置的光标  |
| c-crosshair   | 光标呈现为十字线  |
| c-default   | 默认光标（通常是一个箭头）  |
| c-e-resize   | 此光标指示矩形框的边缘可被向右（东）移动  |
| c-help   | 此光标指示可用的帮助（通常是一个问号或一个气球）  |
| c-move   | 此光标指示某对象可被移动  |
| c-n-resize   | 此光标指示矩形框的边缘可被向上（北）移动  |
| c-ne-resize   | 此光标指示矩形框的边缘可被向上及向右移动（北/东）  |
| c-nw-resize   | 此光标指示矩形框的边缘可被向上及向左移动（北/西）  |
| c-pointer   | 光标呈现为指示链接的指针（一只手）  |
| c-progress   | 此光标指示正在加载  |
| c-s-resize   | 此光标指示矩形框的边缘可被向下移动（南）  |
| c-se-resize   | 此光标指示矩形框的边缘可被向下及向右移动（南/东）  |
| c-sw-resize   | 此光标指示矩形框的边缘可被向下及向左移动（南/西）  |
| c-text   | 此光标指示文本  |
| c-w-resize   | 此光标指示矩形框的边缘可被向左移动（西）  |
| c-wait   | 此光标指示程序正忙（通常是一只表或沙漏）  |