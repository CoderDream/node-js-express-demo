/**
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501482448f6b36071ab6949d3a7ecb5a71a3c9df9000
 * Created by Admin on 2017/6/15.
 */
// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function () {
  if (typeof(window) === 'undefined') {
    console.log('node.js');
  } else {
    console.log('browser');
  }
  console.log('nextTick callback!');
});

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});

console.log('nextTick was set!');