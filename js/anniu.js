$(function() {
    var index = 0;  // 当前显示的图片索引
    var images = $(".box-img img");  // 获取所有图片
    var dots = $(".box-zhiding li"); // 获取底部小圆点

    // 初始化显示第一张图片和第一个小圆点
    function showImage(index) {
        images.css("opacity", "0");  // 隐藏所有图片
        images.eq(index).css("opacity", "1");  // 显示当前图片
        dots.removeClass("active");  // 移除所有小圆点的激活状态
        dots.eq(index).addClass("active");  // 激活当前小圆点
    }

    // 显示初始状态
    showImage(index);

    // 左按钮点击事件
    $(".box-left").click(function() {
        index = (index - 1 + images.length) % images.length;  // 循环到上一张图片
        showImage(index);
    });

    // 右按钮点击事件
    $(".box-right").click(function() {
        index = (index + 1) % images.length;  // 循环到下一张图片
        showImage(index);
    });

    // 底部小圆点点击事件
    dots.click(function() {
        index = $(this).index();  // 获取点击的小圆点的索引
        showImage(index);
    });

    // 自动轮播功能，每 2 秒切换一次
    var autoPlay = setInterval(function() {
        index = (index + 1) % images.length;
        showImage(index);
    }, 2500);

    // 鼠标悬停暂停轮播，移开恢复
    $(".box").hover(
        function() { clearInterval(autoPlay); },  // 鼠标移入，暂停轮播
        function() { autoPlay = setInterval(function() {  // 鼠标移开，恢复轮播
            index = (index + 1) % images.length;
            showImage(index);
        }, 2500); }
    );
});
