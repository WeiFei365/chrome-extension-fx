(() => {
  console.log('full-screen done');

  setInterval(() => {
    try {
      document.body.style.width = '100%';
      document.body.parentNode.style.width = '100%';
      document.body.style.height = '100%';
      document.body.parentNode.style.height = '100%';

      const children = document.body.children;
      if (children && children.length) {
        for (let index = 0; index < children.length; index++) {
          if (children[index].nodeName === 'IMG') {
            children[index].style.width = '100%';
            children[index].style.height = 'auto';
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, 1000);
  
  window.alert('图片已全屏！现在可以打印啦~');
})();
