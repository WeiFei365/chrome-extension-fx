(() => {
  console.log('scripts done');
  window.alert('脚本已加载！现在可以复制文字啦~');
  
  // 当前处于的 DOM 节点
  let target = null;
  let targetStyle = null;
  let isStop = false;
  
  function clear() {
    if (!target) {
      return;
    }
    try {
      if (targetStyle) {
        target.style.outline = targetStyle.outline;
        target.style.boxShadow = targetStyle.boxShadow;
        targetStyle = null;
      } else {
        target.style.outline = '';
        target.style.boxShadow = '';
      }
    } catch (err) {
      console.error(12, err);
    }
  }
  
  document.body.addEventListener('mousemove', ele => {
    if (target === ele.target || isStop) {
      return;
    }
    try {
      clear();
      // 记录新 dom
      target = ele.target;
      targetStyle = {
        outline: target.style.outline,
        boxShadow: target.style.boxShadow,
      };
      target.style.outline = '#FFC000 dotted 4px';
      target.style.boxShadow = '0 0 10px #ffc000';
    } catch (err) {
      console.error(36, err);
    }
  });
  document.body.addEventListener('keyup', evt => {
    if (!target) {
      return;
    }
    if (evt && evt.keyCode === 65) {
      // A键
      try {
        const text = document.createElement('textarea');
        document.body.appendChild(text);
        text.value = target.textContent || '';
        text.select();
        document.execCommand('copy');
        document.body.removeChild(text);
      } catch (err) {
        console.error(60, err);
      }
    }
  });
})();
