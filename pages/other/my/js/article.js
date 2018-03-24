var article = [

    '找工作的事情总是不顺利，还有很多要学习的东西，比如在一个学习的路线中，最初的学习的就是视图的制作，就像之前说过的那样，使用json做颜料，使用算法做画笔才能实现最优化的代码视觉效果。',
    '我是段落二',
    '我是段落三',
    '我是段落四',
    '我是段落五',
    '我是段落六',
    '我是段落七'

];
for (var i = 0; i < article.length - 1; i++) {
    var ha = document.createElement('h2');
    var pa = document.createElement('p');
    document.body.appendChild(ha);
    document.body.appendChild(pa);
    var change = function(index) {
        return index - 0 + 1;
    }
    ha.innerText = '今日记录' + change(i) + '';
    pa.innerText = article[i];

}