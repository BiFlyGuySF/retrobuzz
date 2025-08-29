
(function(){
  const bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);
  function set(){
    const h = document.documentElement;
    const st = h.scrollTop || document.body.scrollTop;
    const sh = h.scrollHeight - h.clientHeight;
    const p = sh>0 ? (st/sh)*100 : 0;
    bar.style.width = p + '%';
  }
  document.addEventListener('scroll', set, {passive:true});
  set();
})();
