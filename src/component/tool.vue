<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>extend</li>
            <li>each</li>
            <li>map</li>
            <li>now</li>
            <li>getTime</li>
            <li>getDate</li>
            <li>arrSort</li>
            <li>cloneArr</li>
            <li>cloneObj</li>
            <li>extendArr</li>
            <li>unique</li>
            <li>objSort</li>
            <li>browser</li>
            <li>encrypt</li>
            <li>decrypt</li>
            <li>setCookie</li>
            <li>getCookie</li>
            <li>delCookie</li>
            <li>getVerify</li>
            <li>easing</li>
            <li>判断变量类型</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">extend</h3>
                <div class="content">
                    extend(obj)，扩展插件。
                    示例：</br>
                    Gj.extend({</br>
                        alert: function(){</br>
                            alert(a);</br>
                        }
                    })</br>
                    Gj.fn.extend({</br>
                        alert : function(){</br>
                        alert(Gj('input').val());</br>
                    }
                </div>
            </li>
            <li>
                <h3 class="title">each</h3>
                <div class="content">
                    each(arr, fn)，遍历数组。fn有两个参数，index是下标索引，item是索引对应的值。
                    示例：</br>
                    Gj.each(arr, function(index, item){</br>
                    );</br>
                </div>
            </li>
            <li>
                <h3 class="title">map</h3>
                <div class="content">
                    map(arr, fn)，遍历数组。fn有两个参数，index是下标索引，item是索引对应的值。有返回值，将fn里return出来的数据塞到新数组里返回。
                    示例：</br>
                    var newArr = Gj.each(arr, function(index, item){</br>
                        return index;</br>
                    );</br>
                </div>
            </li>
            <li>
                <h3 class="title">now</h3>
                <div class="content">
                    now()，获取当前时间戳，毫秒。
                    示例：</br>
                    Gj.now();
                </div>
            </li>
            <li>
                <h3 class="title">getTime</h3>
                <div class="content">
                    getTime()，获取当前时间的年月日星期时分秒对象合集。</br>
                    示例：</br>
                    var obj = Gj.getTime();</br>
                    obj.y 年</br>
                    obj.m 月</br>
                    obj.d 日</br>
                    obj.h 时</br>
                    obj.mi 分</br>
                    obj.s 秒</br>
                    obj.w 星期
                </div>
            </li>
            <li>
                <h3 class="title">getDate</h3>
                <div class="content">
                    getDate(w)，获取一个当前时间年月日星期。</br>
                    示例：</br>
                    var date = Gj.getDate();</br>
                    console.log(date);//2018年02月14日星期三 10:28</br>
                    var date = Gj.getDate("-");</br>
                    console.log(date);//2018-02-14 10:28</br>
                    var date = Gj.getDate();</br>
                    console.log(date);//2018/02/14 10:28
                </div>
            </li>
            <li>
                <h3 class="title">arrSort</h3>
                <div class="content">
                    arrSort(arr, name, reverse)，数组按对象键名排序，升序。返回新数组</br>
                    arr：必需。数组，要排序的数组对象</br>
                    name：必需。数组对象的属性名，以对应的属性值来排序</br>
                    reverse：可选。布尔值，true代表降序排序</br>
                    示例：</br>
                    var arr  = [{abc:123},{abc:345},{abc:111}];</br>
                    var newArr = Gj.arrSort(arr,"abc");//[{abc:111},{abc:123},{abc:345}]
                </div>
            </li>
            <li>
                <h3 class="title">cloneArr</h3>
                <div class="content">
                    cloneArr(arr)，深度克隆数组。返回新数组</br>
                    arr：必需。数组，需要深度克隆的数组</br>
                    示例：</br>
                    var arr  = [{abc:123},{abc:345},{abc:111}];</br>
                    var newArr = Gj.cloneArr(arr);//[{abc:123},{abc:345},{abc:111}]
                </div>
            </li>
            <li>
                <h3 class="title">cloneObj</h3>
                <div class="content">
                    cloneObj(obj)，深度克隆对象。返回新对象</br>
                    obj：必需。对象，需要深度克隆的对象</br>
                    示例：</br>
                    var obj  = {abc:111}</br>
                    var newObj = Gj.cloneObj(obj);//{abc:111}
                </div>
            </li>
            <li>
                <h3 class="title">extendArr</h3>
                <div class="content">
                    extendArr(arr1, arr2, arr3)，差集合并数组，可以合并多个。返回新数组</br>
                    arr1：必需。数组，需要合并的数组</br>
                    arr2：必需。数组，需要合并的数组</br>
                    arr3：可选。数组，需要合并的数组</br>
                    示例：</br>
                    var arr1  = [{abc:123},{abc:345},{abc:111}];</br>
                    var arr2  = [{abc:123},{abc:666},{abc:111}];</br>
                    var newArr = Gj.extendArr(arr1, arr2);//[{abc:123},{abc:345},{abc:111},{abc:666}]
                </div>
            </li>
            <li>
                <h3 class="title">unique</h3>
                <div class="content">
                    unique(arr)，数组去重。返回新数组</br>
                    arr：必需。数组，需要去重的数组</br>
                    示例：</br>
                    var arr  = [1,1,2,3];</br>
                    var newArr = Gj.unique(arr);//[1,2,3];
                </div>
            </li>
            <li>
                <h3 class="title">objSort</h3>
                <div class="content">
                    objSort(obj) 对象按键名排序     升序。</br>
                    示例：</br>
                    var obj  ={ abc:123,ed:1,b:3}></a>};</br>
                    var newArr = Gj.objSort(obj);//{ abc:123,b:3,ed:1};
                </div>
            </li>
            <li>
                <h3 class="title">browser</h3>
                <div class="content">
                    browser 获取当前浏览器版本信息。browser是一个对象，可能包含的属性：opera，firefox，chrome，safari，webkit，ie</br>
                    示例：</br>
                    var browser = Gj.browser;</br>
                    console.log(browser.chrome);</br>
                    console.log(browser.webkit);
                </div>
            </li>
            <li>
                <h3 class="title">encrpt</h3>
                <div class="content">
                    encrpt(str)，对字符串进行简单加密。</br>
                    示例：</br>
                    var newStr = Gj.encrpt("123");//%ez%fa%fl
                </div>
            </li>
            <li>
                <h3 class="title">decrpty</h3>
                <div class="content">
                    decrpty(str)，对字符串进行简单加密。</br>
                    示例：</br>
                    var newStr = Gj.encrpt("123");//%ez%fa%fl</br>
                    var str = Gj.encrpt(newStr);//123
                </div>
            </li>
            <li>
                <h3 class="title">setCookie</h3>
                <div class="content">
                    setCookie(name, value, hour)，存储cookie，经过encrpt加密存储到根目录。</br>
                    name：必需。字符串，需要存储的cookie名</br>
                    value：必需。字符串，需要存储的cookie值</br>
                    hour：必需。数字，单位小时。需要存储多久时间</br>
                    示例：</br>
                    Gj.setCookie("user", "123", 1);
                </div>
            </li>
            <li>
                <h3 class="title">getCookie</h3>
                <div class="content">
                    getCookie(name)，按cookie名读取cookie值。</br>
                    name：必需。字符串，需要读取的cookie名</br>
                    示例：</br>
                    Gj.getCookie("user");
                </div>
            </li>
            <li>
                <h3 class="title">delCookie</h3>
                <div class="content">
                    delCookie(name)，按cookie名删除cookie。</br>
                    name：必需。字符串，需要删除的cookie名</br>
                    示例：</br>
                    Gj.delCookie("user")
                </div>
            </li>
            <li>
                <h3 class="title">getVerify</h3>
                <div class="content">
                    getVerify(length)，获取一定长度的随机数字字母。<br>
                    lenth: 必需。数字，获取随机数字字母的长度</br>
                    示例：</br>
                    var str = Gj.getVerify(4); //fDcR
                </div>
            </li>
            <li>
                <h3 class="title">easing</h3>
                <div class="content">
                    easing，动画相关的运动曲线对象。可通过Gj.extend扩展。目前有属性：</br>
                    linear: 匀速 </br>
                    easeIn: 加速</br>
                    easeOut: 减速</br>
                    easeInOut: 加速减速</br>
                </div>
            </li>
            <li>
                <h3 class="title">判断变量类型</h3>
                <div class="content">
                    判断各种变量类型：都需要传入一个需要判断的参数，返回布尔值，true/false。</br>
                    Gj.isString(test): 判断是否是字符串</br>
                    Gj.isUndefined(test):  判断是否是undefined</br>
                    Gj.isNull(test):  判断是否是null</br>
                    Gj.isNumber(test):  判断是否是数字</br>
                    Gj.isBoolean(test):  判断是否是布尔值</br>
                    Gj.isDate(test):  判断是否是时间</br>
                    Gj.isObject(test):  判断是否是对象</br>
                    Gj.isArray(test):  判断是否是数组</br>
                    Gj.isFunction(test):  判断是否是函数</br>
                    Gj.isRegExp(test):  判断是否是正则</br>
                    Gj.isWindow(test):  判断是否是window对象</br>
                    Gj.isHTMLDocument(test):  判断是否是document对象</br>
                    Gj.isHTMLElement(test):  判断是否是dom元素</br>
                    Gj.isJSON(test):  判断是否是json字符串</br>
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
