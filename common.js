(function(){
 var N=[['index.html','Home'],['team.html','The Team'],['racing.html','Racing'],['engineering.html','Engineering'],['history.html','History & Results'],['partners.html','Partners & Future']],
 M=[['news.html','News'],['fanzone.html','Fan Zone'],['gallery.html','Gallery']],
 cur=location.pathname.split('/').pop()||'index.html',
 a=function(x){return '<a href="'+x[0]+'"'+(x[0]==cur?' class="on" aria-current="page"':'')+'>'+x[1]+'</a>'},
 logo='<a class="logo" href="index.html" aria-label="TEAM_H">TEAM<i></i>H</a>';
 var ic=document.createElement('link');ic.rel='icon';ic.href="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='#10131B'/><path d='M7 5h5v8h8V5h5v18h-5v-7h-8v7H7z' fill='#fff'/><path d='M4 28l4-4h20l-4 4z' fill='#4166F5'/></svg>");document.head.appendChild(ic);
 var h=document.getElementById('hdr');if(h){h.className='hd';h.innerHTML='<div class="wrap">'+logo+'<button class="burger" aria-label="메뉴" aria-expanded="false">☰</button><nav class="nav">'+N.map(a).join('')+'<div class="more"><button>More ▾</button><ul>'+M.map(function(x){return '<li>'+a(x)+'</li>'}).join('')+'</ul></div></nav></div>';
  var b=h.querySelector('.burger'),n=h.querySelector('.nav');b.onclick=function(){b.setAttribute('aria-expanded',n.classList.toggle('open'))}}
 var f=document.getElementById('ftr');if(f){f.className='ft';f.innerHTML='<div class="wrap"><div>'+logo+'<p style="margin-top:12px">'+TH.slogan+'<br>독립 컨스트럭터 · APEX CITY</p></div><div>'+N.map(a).join('')+'</div><div>'+M.map(a).join('')+'</div><p class="cp">© TEAM_H. 가상으로 만든 레이싱팀 프로젝트입니다.</p></div>'}
 /* 이미지 자리: 파일이 있으면 표시, 없으면 파일명 안내 */
 window.ph=function(file,cls,ratio){return '<div class="ph '+(cls||'')+'" data-file="images/'+file+'"'+(ratio?' style="aspect-ratio:'+ratio+'"':'')+'><img src="images/'+file+'" alt="" loading="lazy" onerror="this.remove()"></div>'};
 window.logoImg=function(name){var s=name.toLowerCase().replace(/\s+/g,'-');return '<div><img src="images/partners/'+s+'.png" alt="'+name+'" onerror="this.outerHTML=\'<span>'+name+'</span>\'"></div>'};
 document.addEventListener('DOMContentLoaded',function(){
  var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
 });
})();
