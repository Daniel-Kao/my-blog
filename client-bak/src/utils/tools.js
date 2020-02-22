import store from '../store';
const timeDiff = function(updatedAt) {
  const timestamp = store.getState().blog.timestamp;
  const diff = new Date(timestamp) - new Date(updatedAt);

  let seconds = diff / 1000;

  if (seconds < 60) {
    return '刚刚';
  }

  let minutes = parseInt(seconds / 60);
  if (minutes < 60) return minutes + ' 分钟前';

  let hours = parseInt(minutes / 24);

  if (hours < 24) return hours + ' 小时 ' + (minutes - hours * 24) + ' 分钟前';

  let days = parseInt(hours / 30);
  if (days < 365) return days + ' 天前';
};

// function debounce(fn, threshold) {
//   var timeout;

//   return function() {
//     var _this = this;
//     var args = arguments;

//     if (timeout) {
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(function delayed() {
//       fn.apply(_this, args);
//       timeout = null;
//     }, threshold || 100);
//   };
// }

function debounce(fn, delay) {
  // 定时器，用来 setTimeout
  var timer;

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  console.log(333);
  return function() {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

export { timeDiff, debounce };
