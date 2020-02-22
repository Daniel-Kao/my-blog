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

export { timeDiff, debounce };
