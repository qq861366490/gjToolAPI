<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>如何扩展插件方法？</li>
            <li>drag</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">如何扩展插件方法</h3>
                <div class="content">
                    extend扩展插件。Gj.fn.protoType或者Gj.protoType上添加方法。</br>
                    示例：</br>
                    Gj.protoType.alert = function(a){</br>
                        alert(a);</br>
                    }</br>
                    Gj.fn.protoType.alert = function(){</br>
                        alert(Gj(this).val());</br>
                    }</br>
                    Gj.extend({</br>
                        alert: function(){</br>
                            alert(a);</br>
                        }
                    })</br>
                    Gj.fn.extend({</br>
                        alert : function(){</br>
                        alert(Gj(this).val());</br>
                    }
                </div>
            </li>
            <li>
                <h3 class="title">drag</h3>
                <div class="content">
                    drag()，拖拽元素。nodrag(true)、nodrag()，元素关闭拖拽。nodrag(false)，元素开启拖拽。</br>
                    示例：</br>
                    Gj("#div").drag();//开启拖拽</br>
                    Gj("#div").nodrag();//关闭拖拽</br>
                    Gj("#div").nodrag(false);//开启拖拽</br>
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
