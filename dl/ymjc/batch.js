//格式化时间
function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
$('input[name=group1]').change(function () {
    console.log($(this).val())
    if ($(this).val() == 'zdyua') {
        $('#zdyuabox').show()
    } else {
        $('#zdyuabox').hide()
    }
})
$("#type").change(function () {
    if ($(this).val() == 7) {
        $('.uabox').show()
    } else {
        $('.uabox').hide()
    }
    if ($(this).val() == 12) {
        $('#jrsbox').show()
    } else {
        $('#jrsbox').hide()
    }
    if ($(this).val() == 6 && isNaN(parseInt($("#node").val()))) {
        showMsg('被墙检测不能使用海外节点检测!', 'center')
        $('#start').attr("disabled", true);
        $('#start').html("请更换检测节点").css("backgroundColor", "gray");
    } else {
        $('#start').attr("disabled", false).html("开始检测").css("backgroundColor", "#000")
    }
})

$('#node').change(function () {
    if ($("#type").val() == 6 && isNaN(parseInt($(this).val()))) {
        showMsg('被墙检测不能使用海外节点检测!', 'center')
        $('#start').attr("disabled", true);
        $('#start').html("请更换检测节点").css("backgroundColor", "gray");
    } else {
        $('#start').attr("disabled", false).html("开始检测").css("backgroundColor", "#000")
    }
})

$("#closebtn").click(function () {
    $('.bigmt').hide()
})
var successdomain = []
var errordomain = []
var unknowdomain = []

$('#success').click(function () {
    for (var i = 0; i < successdomain.length - 1; i++) {
        for (var j = 0; j < successdomain.length - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (successdomain[j].index > successdomain[j + 1].index) {
                var temp = successdomain[j];
                successdomain[j] = successdomain[j + 1];
                successdomain[j + 1] = temp;
            }
        }
    }
    var str = ''
    successdomain.forEach(item => {
        str += item.item + '\n'
    })
    $('.mtk textarea').val(str)
    $('.mtk ul li').eq(0).addClass('current').siblings().removeClass('current')
    $('.bigmt').show()
})
$('#error').click(function () {
    for (var i = 0; i < errordomain.length - 1; i++) {
        for (var j = 0; j < errordomain.length - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (errordomain[j].index > errordomain[j + 1].index) {
                var temp = errordomain[j];
                errordomain[j] = errordomain[j + 1];
                errordomain[j + 1] = temp;
            }
        }
    }
    var str = ''
    errordomain.forEach(item => {
        str += item.item + '\n'
    })
    $('.mtk textarea').val(str)
    $('.mtk ul li').eq(1).addClass('current').siblings().removeClass('current')
    $('.bigmt').show()
})
$('#unknow').click(function () {
    for (var i = 0; i < unknowdomain.length - 1; i++) {
        for (var j = 0; j < unknowdomain.length - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (unknowdomain[j].index > unknowdomain[j + 1].index) {
                var temp = unknowdomain[j];
                unknowdomain[j] = unknowdomain[j + 1];
                unknowdomain[j + 1] = temp;
            }
        }
    }
    var str = ''
    unknowdomain.forEach(item => {
        str += item.item + '\n'
    })
    $('.mtk textarea').val(str)
    $('.mtk ul li').eq(2).addClass('current').siblings().removeClass('current')
    $('.bigmt').show()
})

$('.mtk ul li').click(function () {
    if ($(this).attr('zh') == 'zc') {
        for (var i = 0; i < successdomain.length - 1; i++) {
            for (var j = 0; j < successdomain.length - 1 - i; j++) {
                // 相邻元素两两对比，元素交换，大的元素交换到后面
                if (successdomain[j].index > successdomain[j + 1].index) {
                    var temp = successdomain[j];
                    successdomain[j] = successdomain[j + 1];
                    successdomain[j + 1] = temp;
                }
            }
        }
        var str = ''
        successdomain.forEach(item => {
            str += item.item + '\n'
        })
        $('.mtk textarea').val(str)
    } else if ($(this).attr('zh') == 'yc') {
        for (var i = 0; i < errordomain.length - 1; i++) {
            for (var j = 0; j < errordomain.length - 1 - i; j++) {
                // 相邻元素两两对比，元素交换，大的元素交换到后面
                if (errordomain[j].index > errordomain[j + 1].index) {
                    var temp = errordomain[j];
                    errordomain[j] = errordomain[j + 1];
                    errordomain[j + 1] = temp;
                }
            }
        }
        var str = ''
        errordomain.forEach(item => {
            str += item.item + '\n'
        })
        $('.mtk textarea').val(str)
    } else {
        for (var i = 0; i < unknowdomain.length - 1; i++) {
            for (var j = 0; j < unknowdomain.length - 1 - i; j++) {
                // 相邻元素两两对比，元素交换，大的元素交换到后面
                if (unknowdomain[j].index > unknowdomain[j + 1].index) {
                    var temp = unknowdomain[j];
                    unknowdomain[j] = unknowdomain[j + 1];
                    unknowdomain[j + 1] = temp;
                }
            }
        }
        var str = ''
        unknowdomain.forEach(item => {
            str += item.item + '\n'
        })
        $('.mtk textarea').val(str)
    }
    $(this).addClass('current').siblings().removeClass('current')
})

$("#outexcel").click(function () {
    if ($('#start').html() == '检测中..') return showMsg('正在检测中，请稍后', 'center')
    if ($('#jieguotitle').css('display') == 'block') {
        showMsg('还没有操作查询,当前数据为空!', 'center')
        return
    } else {
        var excel = new ExcelGen({
            "src_id": "test_table",
            "show_header": true
        });
        excel.generate();
    }
});

//去除重复
function unique4(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i].trim())
        }
    }
    return newArr
}

//切割数组
function splitarr(newarr, num) {
    var num1 = num ? num : 5
    var arr = []; //将数组切割成5个一份
    for (var i = 0; i < newarr.length; i += num1) {
        arr.push(newarr.slice(i, i + num1));
    }
    return arr
}
$('#start').click(function () {
    if (!$('#checkurl').val().trim()) {
        showMsg('检测链接不能为空~', 'center')
        return
    }
    if ($("input[name='group1']:checked").val() == 'zdyua' && $('#zdyua').val().trim() == '') {
        showMsg('自定义UA不能为空~', 'center')
        return
    }
    successdomain = []
    errordomain = []
    unknowdomain = []

    $(this).attr("disabled", true);
    $(this).html("检测中..");
    $(this).css("backgroundColor", "gray");
    $('#success').html(' 0 ')
    $('#error').html(' 0 ')
    $('#unknow').html(' 0 ')
    $('tbody').html('')
    $('#jieguotitle').hide()
    var arr = $('#checkurl').val().split(/[(\r\n)\r\n]+/)
    var newarr = arr.filter(item => {
        return item.trim() != ""
    })
    newarr = unique4(newarr)
    switch ($('#type').val()) {
        case '1':
            checkqq(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
                <th>检测说明</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '2':
            checkwx(newarr)
            var title = `
                    
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>检测结果</th>
                    <th>检测说明</th>
                </tr>
                `
            $('thead').html(title)
            break;
        case '3':
            checkicp(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
                <th>网站名称</th>
                <th>备案号</th>
                <th>备案类型</th>
                <th>审核时间</th>
                <th>主办方</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '12':
            checkjrs(newarr)
            if ($("input[name='group2']:checked").val() == 'all') {
                var title = `
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>阿里云</th>
                    <th>腾讯云</th>
                    <th>百度云</th>
                    <th>景安</th>
                    <th>西部数码</th>
                    <th>美橙互联</th>
                    <th>其它</th>
                </tr>
                `
            } else {
                var title = `
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>检测结果</th>
                </tr>
                `
            }
            $('thead').html(title)
            break;
        case '13':
            wangan(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>备案类型</th>
                <th>备案号</th>
                <th>网站名称</th>
                <th>审核时间</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '14':
            ymdq(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '4':
            checkgreen(newarr)
            var title = ` 
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '5':
            checkerji(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '6':
            checkwall(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '7':
            checkurl(newarr, $("input[name='group1']:checked").val() == 'zdyua' ? $('#zdyua').val() : $("input[name='group1']:checked").val())
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '8':
            checksanji(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '9':
            Ping(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
                <th>请求用时</th>
                <th>IP地址</th>
                <th>CNAME</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '10':
            TCPing(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
                <th>请求用时</th>
                <th>IP地址</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '11':
            Mi(newarr)
            var title = `     
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>检测结果</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '15':
            checkdns(newarr)
            var title = `
            <tr>
                <th>检测时间</th>
                <th>检测链接</th>
                <th>DNS1</th>
                <th>DNS2</th>
            </tr>
            `
            $('thead').html(title)
            break;
        case '16':
            checkjinshan(newarr)
            var title = `
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>检测结果</th>
                </tr>
                `
            $('thead').html(title)
            break;
        case '17':
            checkdouyin(newarr)
            var title = `
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>检测结果</th>
                </tr>
                `
            $('thead').html(title)
            break;
        case '18':
            checkicpblack(newarr)
            var title = `
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>检测结果</th>
                </tr>
                `
            $('thead').html(title)
            break;
        case '19':
            checkbaidu(newarr)
            var title = `
                <tr>
                    <th>检测时间</th>
                    <th>检测链接</th>
                    <th>检测结果</th>
                    <th>拦截原因</th>
                </tr>
                `
            $('thead').html(title)
            break;
    }
})

//百度检测
var checkbaidu = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)

    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        (function (index) {
            setTimeout(function () {
                item.forEach((item) => {
                    $.ajax({
                        type: 'post',
                        url: `//api.urlzt.com/api/urlsec/baidusafe`,
                        data: {
                            domain: item,
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">${JSON.parse(data).reason ? JSON.parse(data).reason : '无'}</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                            <td style="color:${color};">检测失败</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * index)
        })(index)
    })
}

// 抖音检测
var checkdouyin = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)

    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        (function (index) {
            setTimeout(function () {
                item.forEach((item) => {
                    $.ajax({
                        type: 'post',
                        url: `//api.urlzt.com/api/urlsec/dyjc`,
                        data: {
                            domain: item,
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * index)
        })(index)
    })
}

// 备案黑名单检测
var checkicpblack = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)

    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        (function (index) {
            setTimeout(function () {
                item.forEach((item) => {
                    $.ajax({
                        type: 'post',
                        url: `//api.urlzt.com/api/urlsec/icpblack`,
                        data: {
                            domain: item,
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * index)
        })(index)
    })
}

//dns检测
var checkdns = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)

    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        (function (index) {
            setTimeout(function () {
                item.forEach((item) => {
                    $.ajax({
                        type: 'post',
                        url: `//api.urlzt.com/api/urlsec/dns`,
                        data: {
                            domain: item,
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'

                                var date = new Date()
                                var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).DNS1}</td>
                                            <td style="color:${color};">${JSON.parse(data).DNS2}</td>
                                        `
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'

                                var date = new Date()
                                var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">-</td>
                                        `
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                                var date = new Date()
                                var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        `
                            }
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                            <td style="color:${color};">检测失败</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * index)
        })(index)
    })
}

// 金山检测
var checkjinshan = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)

    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        (function (index) {
            setTimeout(function () {
                item.forEach((item) => {
                    $.ajax({
                        type: 'post',
                        url: `//api.urlzt.com/api/urlsec/jinshan`,
                        data: {
                            domain: item,
                            
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * index)
        })(index)
    })
}
//qq检测
var checkqq = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)

    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        (function (index) {
            setTimeout(function () {
                item.forEach((item) => {
                    $.ajax({
                        type: 'post',
                        url: `//api.urlzt.com/api/urlsec/qq`,
                        data: {
                            domain: item,
                            
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">${JSON.parse(data).reason ? JSON.parse(data).reason : '无'}</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                            <td style="color:${color};">检测失败</td>
                                        `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * index)
        })(index)
    })
}

//wx检测
var checkwx = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                                <tr id=url${index}>
                                    <td>检测中...</td>
                                    <td>${item}</td>
                                    <td style="color:gray;">检测中...</td>
                                    <td style="color:gray;">检测中...</td>
                                </tr>
                                `
        $('tbody').append(html)
    })
    var total = newarr.length
    newarr = splitarr(newarr, 1) //数组切割
    for (var i = 0; i < newarr.length; i++) {
        (function (j) {
            setTimeout(() => {
                newarr[j].forEach((item, index) => {
                    $.ajax({
                        type: 'post',
                        url: '//api.urlzt.com/api/urlsec/vx',
                        data: {
                            domain: item,
                            
                            node: $('#node').val()
                        },
                        timeout: 180000,
                        success: function (data) {
                            var color = ''
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        <td style="color:${color};">${JSON.parse(data).reason ? JSON.parse(data).reason : '无'}</td>
                                
                                    `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        },
                        error: function () {
                            var date = new Date()
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'orange'
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                
                                    `
                            $(`#url${obj[item]}`).html(html1)
                            if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                                $('#start').attr("disabled", false);
                                $('#start').html("开始检测");
                                $('#start').css("backgroundColor", "#000");
                                $('.type11 .nice-select').html(jiancetype)
                                $('.type22 .nice-select').html(jiancenode)
                            }
                        }
                    })
                })
            }, 1000 * j);
        })(i)
    }
}

//icp检测
var checkicp = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    var total = newarr.length
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(function () {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/icp`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        var date = new Date()
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:green;">已备案</td>
                                        <td style="color:green;">${JSON.parse(data).ICPName}</td>
                                        <td style="color:green;">${JSON.parse(data).ICPSerial}</td>
                                        <td style="color:green;">${JSON.parse(data).ICPType}</td>
                                        <td style="color:green;">${JSON.parse(data).ICPTime}</td>
                                        <td style="color:green;">${JSON.parse(data).ICPMaster}</td>
                                    `
                        } else if (JSON.parse(data).code == 201) {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:red;">未备案</td>
                                        <td style="color:red;">-</td>
                                        <td style="color:red;">-</td>
                                        <td style="color:red;">-</td>
                                        <td style="color:red;">-</td>
                                        <td style="color:red;">-</td>
                                    `
                        } else {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            var html1 = `
                                <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                <td>${item}</td>
                                <td style="color:red;">${JSON.parse(data).msg}</td>
                                <td style="color:red;">失败</td>
                                <td style="color:red;">-</td>
                                <td style="color:red;">-</td>
                                <td style="color:red;">-</td>
                                <td style="color:red;">-</td>
                            `
                        }
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#error').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">检测失败</td>
                                            <td style="color:${color};">-</td>
                                            <td style="color:${color};">-</td>
                                            <td style="color:${color};">-</td>
                                            <td style="color:${color};">-</td>
                                        `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index)
        })
    })
}

//绿标检测
var checkgreen = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(function () {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/gl`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        if (JSON.parse(data).code == 200 || JSON.parse(data).code == 202) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        var date = new Date()
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index)
        })

    })
}

//二级不死检测
var checkerji = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr) //数组切割
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(function () {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/llid`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index)
        })

    })
}

//三级不死检测
var checksanji = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr)
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(function () {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/sjbs`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index)
        })

    })
}

//被墙检测
var checkwall = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr, 1)
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/qiang`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == 201 || JSON.parse(data).code == 202) {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index);
        })

    })
}

//链接状态检测
var checkurl = function (newarr, ua) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr, 1)
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/httpcode`,
                    data: {
                        ua: ua,
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    success: function (data) {
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index)
        });
    })

}

//Ping检测
var Ping = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var title = `
                    
    <tr>
        <th>检测时间</th>
        <th>检测链接</th>
        <th>检测结果</th>
        <th>请求用时</th>
        <th>IP地址</th>
        <th>CNAME</th>
    </tr>
    `
    $('thead').html(title)
    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr, 1)
    console.log(newarr)
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/ping`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    success: function (data) {
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">请求成功</td>
                                        <td style="color:${color};">${JSON.parse(data).data.ping_min}</td>
                                        <td style="color:${color};">${JSON.parse(data).data.ip}(${JSON.parse(data).data.server_address})</td>
                                        <td style="color:${color};">${JSON.parse(data).data.cname}</td>
                                    `
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        <td style="color:${color};">失败</td>
                                        <td style="color:${color};">失败</td>
                                        <td style="color:${color};">失败</td>
                                    `
                        } else if (JSON.parse(data).code == 403) {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">请求超时</td>
                                        <td style="color:${color};">未知</td>
                                        <td style="color:${color};">未知</td>
                                        <td style="color:${color};">未知</td>
                                    `
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            color = 'red'
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">域名未解析</td>
                                        <td style="color:${color};">未知</td>
                                        <td style="color:${color};">未知</td>
                                        <td style="color:${color};">未知</td>
                                    `
                        }
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                    `
                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index);
        })
    })
}

//端口Ping检测
var TCPing = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr, 1)
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/tcping`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    success: function (data) {
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">请求成功</td>
                                        <td style="color:${color};">${JSON.parse(data).data.ping_min}</td>
                                        <td style="color:${color};">${JSON.parse(data).data.ip}(${JSON.parse(data).data.server_address})</td>
                                  
                                    `
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        <td style="color:${color};">失败</td>
                                        <td style="color:${color};">失败</td>
                                    `
                        } else if (JSON.parse(data).code == 403) {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">请求超时</td>
                                        <td style="color:${color};">未知</td>
                                        <td style="color:${color};">未知</td>
                                    `
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            color = 'red'
                            errordomain.push({
                                index: item[index],
                                item: item
                            })
                            var date = new Date()
                            var html = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">域名未解析</td>
                                        <td style="color:${color};">未知</td>
                                        <td style="color:${color};">未知</td>
                                    `
                        }

                        $(`#url${obj[item]}`).html(html)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index);
        })

    })
}

//小米检测
var Mi = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr)
    newarr.forEach((item, index) => {

        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/mi`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        var color = ''
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index);
        })

    })
}


//接入商查询
var checkjrs = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        if ($("input[name='group2']:checked").val() == 'all') {
            var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        } else {

            var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        }
        $('tbody').append(html)
    })
    newarr = splitarr(newarr)
    newarr.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/jrs`,
                    data: {
                        domain: item,
                        access: $("input[name='group2']:checked").val(),
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        var color = ''
                        //选中查询全部的时候
                        if ($("input[name='group2']:checked").val() == 'all') {
                            if (JSON.parse(data).code == -1) {
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                            <td>${item}</td>
                                            <td style="color:red;">${JSON.parse(data).msg}</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                    
                                        `
                            } else {
                                //查询是否接入
                                function sfjr(datamsg, type, name) {
                                    if (type == 'color') {
                                        return JSON.parse(datamsg).msg[name].indexOf('未接入') == -1 ? 'green' : 'red'
                                    } else {
                                        return JSON.parse(datamsg).msg[name].indexOf('未接入') == -1 ? '已接入' : '未接入'
                                    }
                                }
                                if (JSON.parse(data).code == 200) {
                                    successdomain.push({
                                        index: obj[item],
                                        item: item
                                    })
                                    $('#success').html(parseInt($('#success').html()) + 1)
                                } else {
                                    errordomain.push({
                                        index: obj[item],
                                        item: item
                                    })
                                    $('#error').html(parseInt($('#error').html()) + 1)
                                }
                                var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                            <td>${item}</td>
                                            <td style="color:${sfjr(data,'color','ali')};">${sfjr(data,'msg','ali')}</td>
                                            <td style="color:${sfjr(data,'color','tencent')};">${sfjr(data,'msg','tencent')}</td>
                                            <td style="color:${sfjr(data,'color','baidu')};">${sfjr(data,'msg','baidu')}</td>
                                            <td style="color:${sfjr(data,'color','zzidc')};">${sfjr(data,'msg','zzidc')}</td>
                                            <td style="color:${sfjr(data,'color','west')};">${sfjr(data,'msg','west')}</td>
                                            <td style="color:${sfjr(data,'color','cndns')};">${sfjr(data,'msg','cndns')}</td>
                                            <td style="color:${sfjr(data,'color','other')};">${sfjr(data,'msg','other')}</td>
                                    
                                        `
                            }

                            //选中单个查询
                        } else {
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: obj[item],
                                    item: item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                    
                                        `

                        }
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 10000 * index);
        })

    })
}

//网安备案检测
var wangan = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr)
    newarr.forEach((item, index) => {

        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/zzwangan`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        var color = ''
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).company}(${JSON.parse(data).subject})</td>
                                        <td style="color:${color};">${JSON.parse(data).keep}</td>
                                        <td style="color:${color};">${JSON.parse(data).name}(${JSON.parse(data).type})</td>
                                        <td style="color:${color};">${JSON.parse(data).time}</td>
                                
                                    `
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        <td style="color:${color};">失败</td>
                                        <td style="color:${color};">失败</td>
                                        <td style="color:${color};">失败</td>
                                
                                    `
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                            var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                        <td style="color:${color};">-</td>
                                    `
                        }

                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                        <td style="color:${color};">检测失败</td>
                                
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index);
        })

    })
}

//域名到期检测
var ymdq = function (newarr) {
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')
    var obj = {}
    var total = newarr.length
    newarr.forEach((item, index) => {
        obj[item] = index
        var html = `
                            <tr id=url${index}>
                                <td>检测中...</td>
                                <td>${item}</td>
                                <td style="color:gray;">检测中...</td>
                            </tr>
                            `
        $('tbody').append(html)
    })
    newarr = splitarr(newarr)
    newarr.forEach((item, index) => {

        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: 'post',
                    url: `//api.urlzt.com/api/urlsec/domainexpires`,
                    data: {
                        domain: item,
                        
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        var color = ''
                        if (JSON.parse(data).code == 200) {
                            $('#success').html(parseInt($('#success').html()) + 1)
                            successdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'green'
                        } else if (JSON.parse(data).code == -1) {
                            $('#unknow').html(parseInt($('#unknow').html()) + 1)
                            unknowdomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        } else {
                            $('#error').html(parseInt($('#error').html()) + 1)
                            errordomain.push({
                                index: obj[item],
                                item: item
                            })
                            color = 'red'
                        }
                        var html1 = `
                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                        <td>${item}</td>
                        <td style="color:${color};">${JSON.parse(data).msg}</td>
                
                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: obj[item],
                            item: item
                        })
                        color = 'orange'
                        var date = new Date()
                        var html1 = `
                                        <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                        <td>${item}</td>
                                        <td style="color:${color};">检测失败</td>
                                
                                    `
                        $(`#url${obj[item]}`).html(html1)
                        if (parseInt($('#success').html()) + parseInt($('#unknow').html()) + parseInt($('#error').html()) == total) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    }
                })
            }, 1000 * index);
        })

    })
}

//一键复制成功
$('#fuzhigreen').click(function () {
    if ($('#jieguotitle').css('display') == 'block') return showMsg('还没有操作查询,当前数据为空!', 'center')
    if ($('#start').html() == '检测中..') return showMsg('正在检测中，请稍后', 'center')

    for (var i = 0; i < successdomain.length - 1; i++) {
        for (var j = 0; j < successdomain.length - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (successdomain[j].index > successdomain[j + 1].index) {
                var temp = successdomain[j];
                successdomain[j] = successdomain[j + 1];
                successdomain[j + 1] = temp;
            }
        }
    }
    var str = ''
    successdomain.forEach(item => {
        str += item.item + '\n'
    })
    new ClipboardJS('#fuzhigreen', {
        text: function (trigger) {
            return str;
        }
    });
    showMsg('复制成功~', 'center')
})

//一键复制异常
$('#fuzhierror').click(function () {
    if ($('#jieguotitle').css('display') == 'block') return showMsg('还没有操作查询,当前数据为空!', 'center')
    if ($('#start').html() == '检测中..') return showMsg('正在检测中，请稍后', 'center')
    for (var i = 0; i < errordomain.length - 1; i++) {
        for (var j = 0; j < errordomain.length - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (errordomain[j].index > errordomain[j + 1].index) {
                var temp = errordomain[j];
                errordomain[j] = errordomain[j + 1];
                errordomain[j + 1] = temp;
            }
        }
    }
    var str = ''
    errordomain.forEach(item => {
        str += item.item + '\n'
    })
    new ClipboardJS('#fuzhierror', {
        text: function (trigger) {
            return str;
        }
    });
    showMsg('复制成功~', 'center')
})

//重查全部
$('#shibaichongcha').click(function () {
    if (unknowdomain.length == 0) return showMsg('没有失败链接', 'center')
    if ($('#start').html() == '检测中..') return showMsg('正在检测中，请稍后', 'center')
    if ($("input[name='group1']:checked").val() == 'zdyua' && $('#zdyua').val().trim() == '') {
        showMsg('自定义UA不能为空~', 'center')
        return
    }
    var apiurl = ''
    switch ($('#type').val()) {
        case '1':
            apiurl = `//api.urlzt.com/api/urlsec/qq`
            break;
        case '2':
            apiurl = `//api.urlzt.com/api/urlsec/vx`
            break;
        case '3':
            apiurl = `//api.urlzt.com/api/urlsec/icp`
            break;
        case '4':
            apiurl = `//api.urlzt.com/api/urlsec/gl`
            break;
        case '5':
            apiurl = `//api.urlzt.com/api/urlsec/llid`
            break;
        case '6':
            apiurl = `//api.urlzt.com/api/urlsec/qiang`
            break;
        case '7':
            apiurl = `//api.urlzt.com/api/urlsec/httpcode`
            break;
        case '8':
            apiurl = `//api.urlzt.com/api/urlsec/sjbs`
            break;
        case '9':
            apiurl = `//api.urlzt.com/api/urlsec/ping`
            break;
        case '10':
            apiurl = `//api.urlzt.com/api/urlsec/tcping`
            break;
        case '11':
            apiurl = `//api.urlzt.com/api/urlsec/mi`
            break;
        case '12':
            apiurl = `//api.urlzt.com/api/urlsec/jrs`
            break;
        case '13':
            apiurl = `//api.urlzt.com/api/urlsec/zzwangan`
            break;
        case '14':
            apiurl = `//api.urlzt.com/api/urlsec/domainexpires`
            break;
        case '15':
            apiurl = `//api.urlzt.com/api/urlsec/dns`
            break;
        case '16':
            apiurl = `//api.urlzt.com/api/urlsec/jinshan`
            break;
    }
    $('#start').attr("disabled", true);
    $('#start').html("检测中..");
    $('#start').css("backgroundColor", "gray");
    var jiancetype = $('.type11 .nice-select').html()
    $('.type11 .nice-select').html('正在检测中~无法切换检测类型~')
    var jiancenode = $('.type22 .nice-select').html()
    $('.type22 .nice-select').html('正在检测中~无法切换检测节点~')

    var total = unknowdomain.length
    var total2 = 0
    $('#unknow').html('0')
    unknowdomain.forEach(item => {
        if ($(`#url${item.index}`).html().indexOf('免费') != -1) {
            var strrrr = $(`#url${item.index}`).html().replace(/免费次数用尽，请购买收费版！/g, '检测中...')
            strrrr = strrrr.replace(/red/g, 'gray')
        } else {
            var strrrr = $(`#url${item.index}`).html().replace(/检测失败/g, '检测中...')
            strrrr.replace(/失败/g, '检测中...')
            strrrr = strrrr.replace(/orange/g, 'gray')
        }
        $(`#url${item.index}`).html(strrrr)
    })
    if ($('#type').val() == 10 || $('#type').val() == 9 || $('#type').val() == 7) {
        unknowdomain1 = splitarr(unknowdomain, 1)
        unknowdomain = []
    } else {
        unknowdomain1 = splitarr(unknowdomain)
        unknowdomain = []
    }
    unknowdomain1.forEach((item, index) => {
        item.forEach(item => {
            setTimeout(() => {
                $.ajax({
                    type: "post",
                    url: apiurl,
                    data: {
                        ua: $("input[name='group1']:checked").val() == 'zdyua' ? $('#zdyua').val() : $("input[name='group1']:checked").val(),
                        domain: item.item,
                        node: $('#node').val()
                    },
                    timeout: 180000,
                    success: function (data) {
                        total2 = total2 + 1
                        var html1 = ''
                        //qq和微信
                        if ($('#type').val() == 1 || $('#type').val() == 2 || $('#type').val() == 19) {
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">${JSON.parse(data).reason ? JSON.parse(data).reason : '无'}</td>
                                        `
                        }
                        //icp备案
                        else if ($('#type').val() == 3) {
                            var date = new Date()
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:green;">已备案</td>
                                            <td style="color:green;">${JSON.parse(data).ICPName}</td>
                                            <td style="color:green;">${JSON.parse(data).ICPSerial}</td>
                                            <td style="color:green;">${JSON.parse(data).ICPType}</td>
                                            <td style="color:green;">${JSON.parse(data).ICPTime}</td>
                                            <td style="color:green;">${JSON.parse(data).ICPMaster}</td>
                                        `
                            } else if (JSON.parse(data).code == 201) {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:red;">未备案</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                        `
                            } else {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                html1 = `
                                    <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                    <td>${item.item}</td>
                                    <td style="color:red;">${JSON.parse(data).msg}</td>
                                    <td style="color:red;">失败</td>
                                    <td style="color:red;">-</td>
                                    <td style="color:red;">-</td>
                                    <td style="color:red;">-</td>
                                    <td style="color:red;">-</td>
                                    <td style="color:red;">-</td>
                                `
                            }
                        }
                        //二级不死检测，三级不死，被墙，小米，绿标检测，链接状态检测,域名到期时间，金山检测
                        else if ($('#type').val() == 5 || $('#type').val() == 7 || $('#type').val() == 8 || $('#type').val() == 6 || $('#type').val() == 11 || $('#type').val() == 4 || $('#type').val() == 14 || $('#type').val() == 16 || $('#type').val() == 18) {
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'green'
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                            }
                            var date = new Date()
                            html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        `
                        }
                        // 接入商
                        else if ($('#type').val() == 12) {
                            //选中查询全部的时候
                            if ($("input[name='group2']:checked").val() == 'all') {
                                if (JSON.parse(data).code == -1) {
                                    unknowdomain.push({
                                        index: item.index,
                                        item: item.item
                                    })
                                    $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                    var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                            <td>${item}</td>
                                            <td style="color:red;">${JSON.parse(data).msg}</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                    
                                        `
                                } else {
                                    //查询是否接入
                                    function sfjr(datamsg, type, name) {
                                        if (type == 'color') {
                                            return JSON.parse(datamsg).msg[name].indexOf('未接入') == -1 ? 'green' : 'red'
                                        } else {
                                            return JSON.parse(datamsg).msg[name].indexOf('未接入') == -1 ? '已接入' : '未接入'
                                        }
                                    }
                                    if (JSON.parse(data).code == 200) {
                                        successdomain.push({
                                            index: item.index,
                                            item: item.item
                                        })
                                        $('#success').html(parseInt($('#success').html()) + 1)
                                    } else {
                                        errordomain.push({
                                            index: item.index,
                                            item: item.item
                                        })
                                        $('#error').html(parseInt($('#error').html()) + 1)
                                    }
                                    var html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", new Date())}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${sfjr(data,'color','ali')};">${sfjr(data,'msg','ali')}</td>
                                            <td style="color:${sfjr(data,'color','tencent')};">${sfjr(data,'msg','tencent')}</td>
                                            <td style="color:${sfjr(data,'color','baidu')};">${sfjr(data,'msg','baidu')}</td>
                                            <td style="color:${sfjr(data,'color','zzidc')};">${sfjr(data,'msg','zzidc')}</td>
                                            <td style="color:${sfjr(data,'color','cndns')};">${sfjr(data,'msg','cndns')}</td>
                                    
                                        `
                                }

                                //选中单个查询
                            } else {
                                if (JSON.parse(data).code == 200) {
                                    $('#success').html(parseInt($('#success').html()) + 1)
                                    successdomain.push({
                                        index: item.index,
                                        item: item.item
                                    })
                                    color = 'green'
                                } else if (JSON.parse(data).code == -1) {
                                    $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                    unknowdomain.push({
                                        index: item.index,
                                        item: item.item
                                    })
                                    color = 'red'
                                } else {
                                    $('#error').html(parseInt($('#error').html()) + 1)
                                    errordomain.push({
                                        index: item.index,
                                        item: item.item
                                    })
                                    color = 'red'
                                }
                                var date = new Date()
                                html1 = `
                                                <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                                <td>${item.item}</td>
                                                <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            `
                            }
                        }
                        //ping
                        else if ($('#type').val() == 9) {
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'green'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">请求成功</td>
                                            <td style="color:${color};">${JSON.parse(data).data.ping_min}</td>
                                            <td style="color:${color};">${JSON.parse(data).data.ip}(${JSON.parse(data).data.server_address})</td>
                                            <td style="color:${color};">${JSON.parse(data).data.cname}</td>
                                        `
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">失败</td>
                                            <td style="color:${color};">失败</td>
                                            <td style="color:${color};">失败</td>
                                        `
                            } else if (JSON.parse(data).code == 403) {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">请求超时</td>
                                            <td style="color:${color};">未知</td>
                                            <td style="color:${color};">未知</td>
                                            <td style="color:${color};">未知</td>
                                        `
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                color = 'red'
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">域名未解析</td>
                                            <td style="color:${color};">未知</td>
                                            <td style="color:${color};">未知</td>
                                            <td style="color:${color};">未知</td>
                                        `
                            }
                        }
                        //端口ping
                        else if ($('#type').val() == 10) {
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'green'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">请求成功</td>
                                            <td style="color:${color};">${JSON.parse(data).data.ping_min}</td>
                                            <td style="color:${color};">${JSON.parse(data).data.ip}(${JSON.parse(data).data.server_address})</td>
                                      
                                        `
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">失败</td>
                                            <td style="color:${color};">失败</td>
                                        `
                            } else if (JSON.parse(data).code == 403) {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">请求超时</td>
                                            <td style="color:${color};">未知</td>
                                            <td style="color:${color};">未知</td>
                                        `
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                color = 'red'
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">域名未解析</td>
                                            <td style="color:${color};">未知</td>
                                            <td style="color:${color};">未知</td>
                                        `
                            }
                        }
                        //dns检测
                        else if ($('#type').val() == 15) {
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'green'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).DNS1}</td>
                                            <td style="color:${color};">${JSON.parse(data).DNS2}</td>
                                      
                                        `
                            } else if (JSON.parse(data).code == -1) {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">失败</td>
                                        `
                            } else {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                color = 'red'
                                var date = new Date()
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                            <td style="color:${color};">${JSON.parse(data).msg}</td>
                                        `
                            }
                        }
                        //网安备案
                        else if ($('#type').val() == 13) {
                            var date = new Date()
                            if (JSON.parse(data).code == 200) {
                                $('#success').html(parseInt($('#success').html()) + 1)
                                successdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:green;">${JSON.parse(data).company}(${JSON.parse(data).subject})</td>
                                            <td style="color:green;">${JSON.parse(data).keep}</td>
                                            <td style="color:green;">${JSON.parse(data).name}(${JSON.parse(data).type})</td>
                                            <td style="color:green;">${JSON.parse(data).time}</td>
                                        `
                            } else if (JSON.parse(data).code == 201) {
                                $('#error').html(parseInt($('#error').html()) + 1)
                                errordomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                html1 = `
                                            <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                            <td>${item.item}</td>
                                            <td style="color:red;">${JSON.parse(data).msg}</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                            <td style="color:red;">-</td>
                                        `
                            } else {
                                $('#unknow').html(parseInt($('#unknow').html()) + 1)
                                unknowdomain.push({
                                    index: item.index,
                                    item: item.item
                                })
                                html1 = `
                                    <td>${dateFormat("YYYY-mm-dd HH:MM", date)}</td>
                                    <td>${item.item}</td>
                                    <td style="color:red;">${JSON.parse(data).msg}</td>
                                    <td style="color:red;">失败</td>
                                    <td style="color:red;">失败</td>
                                `
                            }
                        }
                        $(`#url${item.index}`).html(html1)
                        if (total - 1 == total2) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }
                    },
                    error: function () {
                        total2 = total2 + 1
                        $('#unknow').html(parseInt($('#unknow').html()) + 1)
                        unknowdomain.push({
                            index: item.index,
                            item: item.item
                        })
                        var strrrr = $(`#url${item.index}`).html().replace(/检测中.../g, '检测失败')
                        strrrr = strrrr.replace(/gray/g, 'orange')
                        $(`#url${item.index}`).html(strrrr)
                        if (total - 1 == total2) {
                            $('#start').attr("disabled", false);
                            $('#start').html("开始检测");
                            $('#start').css("backgroundColor", "#000");
                            $('.type11 .nice-select').html(jiancetype)
                            $('.type22 .nice-select').html(jiancenode)
                        }

                    }
                })
            }, index * 1000);
        })
    })

})

$('#clear').click(function () {
    $('#checkurl').val('')
    $('#jieguotitle').show()
    $('#test_table').html('')
    $('#success').html(' 0 ')
    $('#error').html(' 0 ')
    $('#unknow').html(' 0 ')
    successdomain = []
    errordomain = []
    unknowdomain = []
})