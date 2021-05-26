(() => {
  console.log('scripts done');
  window.alert('脚本已加载！现在可以编辑网页啦~');
  
  // 当前处于的 DOM 节点
  let target = null;
  let targetStyle = null;
  // 所有被 display=none 的元素，用于撤销
  const oldList = [];
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
      isStop = false;
      return;
    }
    if (evt && evt.keyCode === 80) {
      // P键
      clear();
      isStop = true;
      return;
    }
    if (evt && evt.keyCode === 81) {
      // Q键
      try {
        clear();
        oldList.push(target);
        target.style.display = 'none';
      } catch (err) {
        console.error(68, err);
      }
      return;
    }
    if (evt && evt.keyCode === 90) {
      // Z键
      console.log(77, oldList);
      try {
        const el = oldList.pop();
        if (el) {
          el.style.display = '';
        }
      } catch (err) {
        console.error(68, err);
      }
      return;
    }
    if (evt && evt.keyCode === 87) {
      // W键
      try {
        target.style.width = '100%';
      } catch (err) {
        console.error(68, err);
      }
      return;
    }
    if (evt && evt.keyCode === 69) {
      // E键
      try {
        target.style.background = 'none';
        target.style.backgroundColor = 'none';
        target.style.backgroundImage = 'none';
      } catch (err) {
        console.error(68, err);
      }
      return;
    }
    if (!evt || [8, 46].indexOf(evt.keyCode) === -1) {
      return;
    }
    try {
      clear();
      target.remove();
    } catch (err) {
      console.error(37, err);
    }
  });
  // 打印样式，避免图片截断
  // try {
  //   const style = document.createElement('style');
  //   style.type = 'text/css';
  //   const textNode = document.createTextNode('@media print { img { break-inside: avoid; } }');
  //   style.appendChild(textNode);
  //   document.head.appendChild(style);
  // } catch (error) {
  //   // error
  // }
})();
