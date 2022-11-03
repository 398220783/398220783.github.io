$('#start').click(function(){
  if($('#url').val().trim()=='') return layer.msg('必填项不能为空')
  if($('#shorttype').attr('data-value')=='') return layer.msg('请选择检测类型')
  $('#success').text(0)
  $('#error').text(0)
  $(this).attr('disabled',true).text('检测中')
  $('tbody').html('')
  var arr = $('#url').val().split('\n')
  arr = arr.filter(item=>{
    if(item.trim() != ''){
      return item.trim()
    }
  })
  var type = $('#shorttype').attr('data-value')
  console.log(type);
  if(type == 'icp'){
    $('thead').html(`<tr><th>链接</th><th>检测结果</th><th>备案号</th><th>备案主体</th></tr>`)
  }else if(type=="zzwangan"){
    $('thead').html(`<tr><th>链接</th><th>检测结果</th><th>备案号</th><th>备案类型</th><th>网站名称</th></tr>`)
  }else if(type=="dns"){
    $('thead').html(`<tr><th>链接</th><th>检测结果</th><th>DNS1</th><th>DNS2</th></tr>`)
  }else if(type=="ping"){
    $('thead').html(`<tr><th>链接</th><th>检测结果</th><th>用时</th><th>IP地址</th></tr>`)
  }else{
    $('thead').html(`<tr><th>链接</th><th>检测结果</th></tr>`)
  }
  arr.forEach((item,index)=>{
    if(type == 'icp'){
      $('tbody').append(`<tr id="w${index}"><td>${item}</td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td></tr>`)
    }else if(type == 'zzwangan'){
      $('tbody').append(`<tr id="w${index}"><td>${item}</td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td></tr>`)
    }else if(type == 'dns'){
      $('tbody').append(`<tr id="w${index}"><td>${item}</td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td></tr>`)
    }else if(type == 'ping'){
      $('tbody').append(`<tr id="w${index}"><td>${item}</td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td><td><span style="color:gray">检测中..</span></td></tr>`)
    }else{
      $('tbody').append(`<tr><td>${item}</td><td id="w${index}"><span style="color:gray">检测中..</span></td></tr>`)
    }
    $.ajax({
      type:'post',
      url:`//api.urlzt.com/api/urlsec/${type}`,
      data:{
        domain:item,
      },
      success:function(data){
        data=JSON.parse(data)
        $('#success').text(parseInt($('#success').text())+1)
        end(arr.length)
        if(type == 'qq' || type == 'vx' || type == 'mi' || type == 'jinshan' || type == 'dyjc' || type ==
        'baidusafe' || type == "gl" || type == "qiang" || type == "httpcode" || type == "domainexpires"){
          data.code == 200 ? html = `<span style="color:green">${data.msg}</span>` : html = `<span style="color:red">${data.msg}</span>`
          $(`#w${index}`).html(html)
        }else if(type == 'icp'){
          if(data.code==200){
            $(`#w${index}`).children().eq(1).html('<span style="color:green;">已备案</span>')
            $(`#w${index}`).children().eq(2).html(`<span style="color:green;">${data.ICPSerial}</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:green;">${data.ICPMaster}(${data.ICPType})</span>`)
          }else if(data.code==-1){
            $(`#w${index}`).children().eq(1).html(`<span style="color:red;">${data.msg}</span>`)
            $(`#w${index}`).children().eq(2).html(`<span style="color:red;">-</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:red;">-</span>`)
          }else{
            $(`#w${index}`).children().eq(1).html(`<span style="color:red;">${data.ICPSerial}</span>`)
            $(`#w${index}`).children().eq(2).html(`<span style="color:red;">-</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:red;">-</span>`)
          }
        }else if(type == 'jrs'){
          if(data.code!=-1){
            var ali =
                `<span style="color:${data.msg.ali.indexOf('未接入')==-1?'green':'red'}">${data.msg.ali}</span>`
              var tencent =
                `<span style="color:${data.msg.tencent.indexOf('未接入')==-1?'green':'red'}">${data.msg.tencent}</span>`
              var baidu =
                `<span style="color:${data.msg.baidu.indexOf('未接入')==-1?'green':'red'}">${data.msg.baidu}</span>`
              var zzidc =
                `<span style="color:${data.msg.zzidc.indexOf('未接入')==-1?'green':'red'}">${data.msg.zzidc}</span>`
              var cndns =
                `<span style="color:${data.msg.cndns.indexOf('未接入')==-1?'green':'red'}">${data.msg.cndns}</span>`
              var west =
                `<span style="color:${data.msg.west.indexOf('未接入')==-1?'green':'red'}">${data.msg.west}</span>`
              html = `${ali} , ${tencent} , ${baidu} , ${zzidc} , ${cndns} , ${west}`
          }else {
            html = `<span style="color:red">${data.msg}</span>`
          }
          $(`#w${index}`).html(html)
        }else if(type == 'zzwangan'){
          if(data.code==200){
            $(`#w${index}`).children().eq(1).html('<span style="color:green;">已备案</span>')
            $(`#w${index}`).children().eq(2).html(`<span style="color:green;">${data.keep}</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:green;">${data.company}(${data.subject})</span>`)
            $(`#w${index}`).children().eq(4).html(`<span style="color:green;">${data.name}</span>`)
          }else{
            $(`#w${index}`).children().eq(1).html(`<span style="color:red;">${data.msg}</span>`)
            $(`#w${index}`).children().eq(2).html(`<span style="color:red;">-</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:red;">-</span>`)
            $(`#w${index}`).children().eq(4).html(`<span style="color:red;">-</span>`)
          }
        }else if(type == 'dns'){
          if(data.code==200){
            $(`#w${index}`).children().eq(1).html('<span style="color:green;">成功</span>')
            $(`#w${index}`).children().eq(2).html(`<span style="color:green;">${data.DNS1}</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:green;">${data.DNS2}</span>`)
          }else{
            $(`#w${index}`).children().eq(1).html(`<span style="color:red;">${data.msg}</span>`)
            $(`#w${index}`).children().eq(2).html(`<span style="color:red;">-</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:red;">-</span>`)
          }
        }else if(type="ping"){
          if(data.code==200){
            $(`#w${index}`).children().eq(1).html(`<span style="color:green;">${data.msg}</span>`)
            $(`#w${index}`).children().eq(2).html(`<span style="color:green;">${data.data.ping_avg}</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:green;">${data.data.ip}(${data.data.node})</span>`)
          }else{
            $(`#w${index}`).children().eq(1).html(`<span style="color:red;">${data.msg}</span>`)
            $(`#w${index}`).children().eq(2).html(`<span style="color:red;">-</span>`)
            $(`#w${index}`).children().eq(3).html(`<span style="color:red;">-</span>`)
          }
        }
      },
      error:function(){
        $('#error').text(parseInt($('#error').text())+1)
        end(arr.length)
      }
    })
  })
})

function end(num){
  if(parseInt($('#success').text())+parseInt($('#error').text()) == num){
    $('#start').attr('disabled',false).text('开始')
  }
}

$('#success').click(function(){
  console.log(123);
})