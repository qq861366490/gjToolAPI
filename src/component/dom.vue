<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>append</li>
            <li>prepend</li>
            <li>after</li>
            <li>before</li>
            <li>remove</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">append</h3>
                <div class="content">
                    append(str, move)，在元素内部最后插入元素，str可以是元素也可以说html字符串。示例：Gj("#test").append("&lt;div&gt;&lt;/div&gt;")，在test内部最后插入div元素。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：Gj("#test").append(div)，在test内部最后加入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">prepend</h3>
                <div class="content">
                    prepend(str, move)，在元素内部前面插入元素，str可以是元素也可以说html字符串。示例：Gj("#test").prepend("&lt;div&gt;&lt;/div&gt;")，在test内部前面插入div元素。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：Gj("#test").prepend(div)，在test内部前面插入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">after</h3>
                <div class="content">
                    after(str, move)，在元素后面插入元素，str可以是元素也可以说html字符串。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：Gj("#test").after("&lt;div&gt;&lt;/div&gt;")，在test后面插入div元素。</br>
                    示例：Gj("#test").after(div)，在test后面插入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">before</h3>
                <div class="content">
                    before(str, move)，在元素前面插入元素，str可以是元素也可以说html字符串。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：Gj("#test").before("&lt;div&gt;&lt;/div&gt;")，在test前面插入div元素。</br>
                    示例：Gj("#test").before(div)，在test前面插入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">remove</h3>
                <div class="content">
                    remove()，删除元素。示例：Gj("#test").remove()，删除test。
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
