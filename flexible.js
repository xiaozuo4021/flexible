(function () {
  function flexible() {
    var userAgent = window.navigator.userAgent
    var isIphone = (userAgent.search(/iphone/i) !== -1)
    var dpr = 1

    if (isIphone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (window.devicePixelRatio >= 3) {
        dpr = 3
      } else if (window.devicePixelRatio >= 2){
        dpr = 2
      } else {
        dpr = 1
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1
    }

    // 添加meta标签
    var viewport$ = document.querySelector('meta[name=viewport]')
    var meta$ = viewport$ || document.createElement('meta')

    meta$.setAttribute('name', 'viewport')
    meta$.setAttribute('content', 'width=device-width,initial-scale=' + 1 / dpr + ',maximum-scale=' + 1 / dpr + ',minimum-scale=' + 1 / dpr + ',user-scalable=no')

    if (!viewport$) {
      document.head.appendChild(meta$)
    }

    // 设置 dpr 和 font-size
    var clientWidth = document.documentElement.clientWidth

    clientWidth = (clientWidth / dpr) < 780 ? clientWidth : 780

    document.documentElement.dataset.dpr = dpr
    document.documentElement.style.fontSize = clientWidth / 10 + 'px'
  }

  window.onresize = function () {
    flexible()
  }

  flexible()
})()
