<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>each</li>
<li>map</li>
<li>find</li>
<li>eq</li>
<li>index</li>
<li>parent</li>
<li>parents</li>
<li>children</li>
<li>siblings</li>
<li>prev</li>
<li>next</li>
<li>first</li>
<li>last</li>
        </ol>
        <ul class="content">
            <li>
	<h3 class="title">each</h3>
	<div class="content">
		遍历gjTool实例或数组，示例：gjTool("ul li").each(function(index,item){});index下标索引，item是dom元素，回调函数里面this是dom元素。
	</div>
</li>
<li>
	<h3 class="title">map</h3>
	<div class="content">
		遍历gjTool实例或数组，示例：gjTool("ul li").map(function(index,item){return index});index下标索引，item是dom元素，回调函数里面this是dom元素，return出来的循环加入新数组，循环结束后返回新数组。
	</div>
</li>
<li>
	<h3 class="title">find</h3>
	<div class="content">
		find(selctor)，传入选择器字符串。查找元素，示例：gjTool("ul").find('li');查找所有ul下的所有li，获取gjTool示例。
	</div>
</li>
<li>
	<h3 class="title">eq</h3>
	<div class="content">
		eq(index)，传入下标。示例：gjTool('ul li').eq(0);获取ul下第0个li的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">index</h3>
	<div class="content">
		index()。示例：gjTool('#test').index();返回实例元素的下标
	</div>
</li>
<li>
	<h3 class="title">parent</h3>
	<div class="content">
		parent(selctor)，传入选择器字符串。示例：Gj('.test').parent();返回test的父节点元素gjTool实例。示例：Gj('.test').parent('.nav');返回test的元素className是nav的父节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">parents</h3>
	<div class="content">
		parents(selctor)，传入选择器字符串。示例：Gj('.test').parent();返回test的所有父节点元素gjTool实例。示例：Gj('.test').parent('.nav');返回test的元素className是nav的所有父节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">children</h3>
	<div class="content">
		children(selctor)，传入选择器字符串。示例：Gj('.test').children();返回test的子节点gjTool实例。示例：Gj('.test').children('.nav');返回test的元素className是nav的子节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">siblings</h3>
	<div class="content">
		siblings(selctor)，传入选择器字符串。示例：Gj('.test').siblings();返回test的兄弟节点gjTool实例。示例：Gj('.test').siblings('.nav');返回test的元素className是nav的兄弟节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">prev</h3>
	<div class="content">
		prev()。示例：Gj('.test').prev();返回前一个节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">next</h3>
	<div class="content">
		next()。示例：Gj('.test').next();返回下一个节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">first</h3>
	<div class="content">
		first()。示例：Gj('.test').first();返回test的第一个节点gjTool示例
	</div>
</li>
<li>
	<h3 class="title">last</h3>
	<div class="content">
		last()。示例：Gj('.test').last();返回test的最后一个节点gjTool示例
	</div>
</li>

        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>

</style>