$(function () {
    var index = 0;
    var timer;

    function animate(i) {
        if (i == 5) {
            i = 0;
        }
        if (i == -1) {
            i = 5;
        }

        // eq(index) --- 获取当前链式操作中第 N 个 jQuery 对象,返回 jQuery 对象
        $('.wrapimg li').eq(i).addClass('active').siblings().removeClass('active');
        $('#buttons span').eq(i).addClass('on').siblings().removeClass('on');
        index = i;

        timer = setTimeout(function () {
            animate(index + 1)
        }, 4000);
    }
    setTimeout(function () {
        animate(0);
    }, 10);
    // // 点击下一张按钮
    $(document).delegate('#next', 'click', function () {
        clearTimeout(timer);
        animate(index + 1);
    });

    // 点击上一张按钮
    $(document).delegate('#prev', 'click', function () {
        clearTimeout(timer);

        animate(index - 1);
    });

    $(document).delegate('#buttons span', 'click', function () {
        clearTimeout(timer);
        if ($(this).attr('class') == 'on') {
            return;
        }
        var myIndex = $(this).index();
        animate(myIndex);
    });
});