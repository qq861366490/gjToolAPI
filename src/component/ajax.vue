<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>ajax</li>
            <li>get</li>
            <li>post</li>
            <li>getJSON</li>
            <li>getXML</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">ajax</h3>
                <div class="content">
                    ajax(option)，ajax异步请求。option是一个对象，拥有参数url, type, async, dataType, data, beforeSend, success, error。</br></br>
                    url：必需。字符串，ajax请求的地址。可以是url服务端请求地址，也可以是json、xml、html、txt文件地址</br>
                    type：可选。字符串，ajax请求的方式get/post。默认post</br>
                    async：可选。布尔值，是否异步，true异步/false同步。默认true</br>
                    cache：可选。布尔值，是否缓存，true开启缓存/false不缓存。默认true</br>
                    dataType：可选。字符串，请求返回的数据类型，text/json/xml，默认text。如果参数写成jsonp，代表jsonp跨域请求</br>
                    data：可选。对象，请求是发送给服务端的数据，默认为空。</br>
                    beforeSend：可选。函数，请求发送之前执行。</br>
                    success：可选。函数，请求成功之后执行，函数参数一是服务端返回的数据，二是XMLHttpRequest对象。</br>
                    error：可选。函数，请求错误之后执行。函数参数一是错误状态码，二是XMLHttpRequest对象。</br></br>
                    示例：</br>
                    Gj.ajax({</br>
                    &nbsp;&nbsp;&nbsp;&nbsp;url:  'myplace.xml',</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;type: "get",</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;dataType: "xml",</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;success: function(data,XMLHttp){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}</br>
                    });</br>
                </div>
            </li>
            <li>
                <h3 class="title">get</h3>
                <div class="content">
                    get(url, data, fn)，ajax异步get请求。</br></br>
                    url：必需。字符串，ajax请求的地址。可以是url服务端请求地址，get方式下也可以是json、xml、html、txt文件地址</br>
                    data：可选。对象，请求是发送给服务端的数据，默认为空。</br>
                    fn：可选。函数，请求之后执行。</br></br>
                    示例：</br>
                    Gj.get('readme.txt',function(data){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);</br>
                    });
                </div>
            </li>
            <li>
                <h3 class="title">post</h3>
                <div class="content">
                    post(url, data, fn)，ajax异步post请求。</br></br>
                    url：必需。字符串，ajax请求的地址。</br>
                    data：可选。对象，请求是发送给服务端的数据，默认为空。</br>
                    fn：可选。函数，请求之后执行。</br></br>
                    示例：</br>
                    Gj.post('readme.txt',function(data){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);</br>
                    });
                </div>
            </li>
            <li>
                <h3 class="title">getJSON</h3>
                <div class="content">
                    getJSON(url, data, fn)，ajax异步get请求获取json。</br></br>
                    url：必需。字符串，ajax请求的地址。可以是url服务端请求地址，也可以是json、xml、html、txt文件地址</br>
                    data：可选。对象，请求是发送给服务端的数据，默认为空。</br>
                    fn：可选。函数，请求之后执行。</br></br>
                    示例：</br>
                    Gj.post('readme.json',function(data){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);</br>
                    });
                </div>
            </li>
            <li>
                <h3 class="title">getXML</h3>
                <div class="content">
                    getXML(url, data, fn)，ajax异步get请求获取xml。</br></br>
                    url：必需。字符串，ajax请求的地址。可以是url服务端请求地址，也可以是json、xml、html、txt文件地址</br>
                    data：可选。对象，请求是发送给服务端的数据，默认为空。</br>
                    fn：可选。函数，请求之后执行。</br></br>
                    示例：</br>
                    Gj.getXML('readme.xml',function(data){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);</br>
                    });
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
