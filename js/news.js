$(function() {
    // 补零函数
    function padZero(n) {
        if (n >= 10) {
            return n
        } else {
            return '0' + n
        }
    }
    template.defaults.imports.timeFormat = function(dtStr) {
        var dt = new Date(dtStr)
        var y = dt.getFullYear();
        var m = padZero(dt.getMonth() + 1);
        var d = padZero(dt.getDate());
        var h = padZero(dt.getHours());
        var min = padZero(dt.getMinutes());
        var s = padZero(dt.getSeconds())
        return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s
    }

    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status == 200) {
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                var htmlStr = template('model', res)

                $('#news-list').html(htmlStr)
            } else {
                return false
            }
        })
    }
    var news = getNewsList()


})