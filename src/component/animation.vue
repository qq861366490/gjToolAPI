<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>animate</li>
            <li>show</li>
            <li>hide</li>
            <li>toggle</li>
            <li>fadeIn</li>
            <li>feadeOut</li>
            <li>fadeToggle</li>
            <li>fadeTo</li>
            <li>stop</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">animate</h3>
                <div class="content">
                    animate(styles, time, easing, callback)， CSS属性的自定义动画。</br>
                    styles：必需。json对象，规定产生动画效果的 CSS 样式和值。</br>
                    time: 可选。数字，毫秒单位，规定动画效果的持续时间，默认400。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").animate({</br>
                        scrollTop: 0</br>
                    },1000,"easeIn");
                </div>
            </li>
            <li>
                <h3 class="title">show</h3>
                <div class="content">
                    show(time, easing, callback)， 显示元素。</br>
                    time: 可选。数字，毫秒单位，规定动画效果的持续时间，默认0。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").show(1000,"easeIn");</br>
                    Gj(".container").show();
                </div>
            </li>
            <li>
                <h3 class="title">hide</h3>
                <div class="content">
                    hide(time, easing, callback)， 隐藏元素。</br>
                    time: 可选。数字，毫秒单位，规定动画效果的持续时间，默认0。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").hide(1000,"easeIn");</br>
                    Gj(".container").hide();
                </div>
            </li>
            <li>
                <h3 class="title">toggle</h3>
                <div class="content">
                    toggle(time, easing, callback)， 隐藏或者显示元素。</br>
                    time: 可选。数字，毫秒单位，规定动画效果的持续时间，默认0。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").toggle(1000,"easeIn");</br>
                    Gj(".container").toggle();
                </div>
            </li>
            <li>
                <h3 class="title">fadeIn</h3>
                <div class="content">
                    fadeIn(time, easing, callback)， 淡入显示元素。</br>
                    time: 必需。数字，毫秒单位，规定动画效果的持续时间，默认400。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").fadeIn(1000);
                </div>
            </li>
            <li>
                <h3 class="title">fadeOut</h3>
                <div class="content">
                    fadeOut(time, easing, callback)， 淡出隐藏元素。</br>
                    time: 必需。数字，毫秒单位，规定动画效果的持续时间，默认400。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").fadeOut(1000);
                </div>
            </li>
            <li>
                <h3 class="title">fadeToggle</h3>
                <div class="content">
                    fadeToggle(time, easing, callback)， 淡入淡出显示隐藏元素。</br>
                    time: 必需。数字，毫秒单位，规定动画效果的持续时间，默认400。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").fadeToggle(1000);
                </div>
            </li>
            <li>
                <h3 class="title">fadeTo</h3>
                <div class="content">
                    fadeTo(value, time, easing, callback)，设置元素的透明度以动画效果展示。</br>
                    value: 必需。数字，0~1，规定元素的透明度数值。</br>
                    time: 必需。数字，毫秒单位，规定动画效果的持续时间，默认400。</br>
                    easing: 可选。字符串，linear, easeIn, easeOut, easeInOut规定动画效果的运动曲线，默认easeInOut。</br>
                    callback: 可选。回调函数，规定动画完成后的执行函数。</br>
                    示例：</br>
                    Gj(".container").fadeTo(0.3);
                </div>
            </li>
            <li>
                <h3 class="title">stop</h3>
                <div class="content">
                    stop(stopAll, goToEnd)，停止动画队列。</br>
                    stopAll: 可选。true，停止元素动画队列所有动画。为空的时候，停止元素动画队列当前动画，其它继续</br>
                    goToEnd: 可选。true，stopAll为true的时候才可设置。让元素动画队列当前动画完成，其它停止<</br>
                    示例：</br>
                    Gj(".container").stop(true);
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
