<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>attr</li>
            <li>removeAttr</li>
            <li>prop</li>
            <li>data</li>
            <li>val</li>
            <li>html</li>
            <li>text</li>
            <li>empty</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">attr</h3>
                <div class="content">
                    attr(name,value)，给元素设置属性。示例：gjTool('img').attr("src","www.baidu.com");设置img的src为www.baidu.com。</br>
                    attr({name:value})，给元素设置多个属性。示例：gjTool('img').attr({"src":"www.baidu.com"});设置img的src为www.baidu.com。</br>
                    attr(name)，获取元素属性值。示例：gjTool('img').attr("src");获取img的src。
                </div>
            </li>
            <li>
                <h3 class="title">removeAttr</h3>
                <div class="content">
                    removeAttr(name)，删除元素属性。示例：gjTool('img').removeAttr("src");删除img的src。
                </div>
            </li>
            <li>
                <h3 class="title">prop</h3>
                <div class="content">
                    prop(name,value)，给元素设置属性。示例：gjTool('input').prop("checked","checked");设置input的checked属性。</br>
                    prop(name)，获取元素的属性值。示例：gjTool('input').prop("checked");获取input的checked属性值。
                </div>
            </li>
            <li>
                <h3 class="title">data</h3>
                <div class="content">
                    data(name,value)，给元素设置data自定义属性。示例：gjTool('div').data("id","123");设置div的data-id属性值为123。</br>
                    data(name)，获取元素data自定义属性值。示例：gjTool('div').data("id");获取div的data-id属性值。
                </div>
            </li>
            <li>
                <h3 class="title">val</h3>
                <div class="content">
                    val(value)，给元素设置value属性。示例：gjTool('input').val("123");设置input的value为123。</br>
                    val()，获取元素的value属性值。示例：gjTool('input').val();获取input的value值。
                </div>
            </li>
            <li>
                <h3 class="title">html</h3>
                <div class="content">
                    html(value)，给元素设置innerHTML属性内容。示例：gjTool('#div').html("123");设置div的innerHTML为123。</br>
                    html()，获取元素的innerHTML属性值。示例：gjTool('#div').html();获取div的innerHTML值。
                </div>
            </li>
            <li>
                <h3 class="title">text</h3>
                <div class="content">
                    text(value)，给元素设置innerText属性。示例：gjTool('#div').text("123");设置div的innerText为123。</br>
                    text()，获取元素的innerText属性值。示例：gjTool('#div').text();获取div的innerText值。
                </div>
            </li>
            <li>
                <h3 class="title">empty</h3>
                <div class="content">
                    empty(),设置元素的内容为空。相当于html("")，innerHTML=""。
                    示例：gjTool('#div').empty();设置div的内容为空。
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
