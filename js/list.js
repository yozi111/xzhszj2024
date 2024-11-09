document.getElementById('title-1').addEventListener('mouseover', function() {
    document.querySelector('.list-1').classList.add('active'); // 显示 list-1
    document.querySelector('.list-2').classList.remove('active'); // 隐藏 list-2

    // 更新导航项的样式
    document.getElementById('title-1').classList.add('nav-item-active');
    document.getElementById('title-2').classList.remove('nav-item-active');
});

document.getElementById('title-2').addEventListener('mouseover', function() {
    document.querySelector('.list-2').classList.add('active'); // 显示 list-2
    document.querySelector('.list-1').classList.remove('active'); // 隐藏 list-1

    // 更新导航项的样式
    document.getElementById('title-2').classList.add('nav-item-active');
    document.getElementById('title-1').classList.remove('nav-item-active');
});
