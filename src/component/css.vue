<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>css</li>
            <li>width</li>
            <li>height</li>
            <li>offset</li>
            <li>scrollTop</li>
            <li>scrollLeft</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">css</h3>
                <div class="content">
                    css(name,value)，给元素设置样式。示例：gjTool('ul li').css("width","100px");设置ul下的li的宽度为100px。</br>
                    css({name:value})，给元素设置多个样式。示例：gjTool('ul li').css({"width":"100px"});设置ul下的li的宽度为100px。</br>
                    css(name)，获取元素样式值。示例：gjTool('ul li').css("width");获取ul下的li的宽度的值。
                </div>
            </li>
            <li>
                <h3 class="title">width</h3>
                <div class="content">
                    width()，获取元素的宽度值。示例：gjTool('#test').width();获取test的宽度的值。
                </div>
            </li>
            <li>
                <h3 class="title">height</h3>
                <div class="content">
                    height()，获取元素的高度值。示例：gjTool('#test').height();获取test的高度的值。
                </div>
            </li>
            <li>
                <h3 class="title">offset</h3>
                <div class="content">
                    offset()，返回一个对象，包含元素的offsetTop,offsetLeft。示例：gjTool('#test').offset().top;获取test元素距离父节点的top值。
                </div>
            </li>
            <li>
                <h3 class="title">scrollTop</h3>
                <div class="content">
                    scrollTop(value)，获取设置元素的垂直滚动条高度scrollTop。示例：gjTool('#test').scrollTop();获取test的scrollTop。
                </div>
            </li>
            <li>
                <h3 class="title">scrollLeft</h3>
                <div class="content">
                    scrollLeft(value)，获取设置元素的水平滚动条距离scrollTop。示例：gjTool('#test').scrollLeft();获取test的scrollLeft。
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
