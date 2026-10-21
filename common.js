(function(){
 var MENU=[
 ['Latest',[['News','news.html'],['Gallery','gallery.html'],['Resources','gallery.html#resources']]],
 ['2026',[['Cars','racing.html#cars'],['Calendar','racing.html#calendar'],['Standings','racing.html#standings']]],
 ['Team',[['Our Team','team.html'],['Drivers','team.html#drivers'],['Garage','team.html#garage'],['Junior Program','team.html#junior']]],
 ['Engineering',[['Overview','engineering.html'],['Powertrains','engineering.html#powertrains'],['Development Fleet','engineering.html#fleet'],['Simulation & Partners','engineering.html#simulation']]],
 ['History',[['Timeline','history.html'],['Results','history.html#results'],['Championships','history.html#championships'],['Heritage Cars','history.html#heritage'],['Project H','history.html#project-h']]],
 ['Fans',[['Fan Zone','fanzone.html'],['Wallpapers','fanzone.html#wallpapers'],['Driver Cards','fanzone.html#cards'],['Predictions & Quiz','fanzone.html#play']]],
 ['Partners',[['Partners','partners.html'],['Road to WEC','partners.html#future'],['Sponsorship','partners.html#sponsorship']]]],
 UTIL=[['Join Us','join.html'],['Team Store','fanzone.html#store'],['TEAM_H Engineering','engineering.html'],['TEAM_H POWERTRAINS','engineering.html#powertrains']],
 cur=location.pathname.split('/').pop()||'index.html',
 A=function(x){return '<a href="'+x[1]+'">'+x[0]+'</a>'},
 logo='<a class="logo" href="index.html" aria-label="TEAM_H 홈">TEAM<i></i>H</a>',
 util=UTIL.map(A).join('');
 var ic=document.createElement('link');ic.rel='icon';ic.href="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='#10131B'/><path d='M7 5h5v8h8V5h5v18h-5v-7h-8v7H7z' fill='#fff'/><path d='M4 28l4-4h20l-4 4z' fill='#4166F5'/></svg>");document.head.appendChild(ic);
 var h=document.getElementById('hdr');
 if(h){h.className='hd';
  h.innerHTML='<div class="ut"><div class="wrap">'+util+'</div></div><div class="wrap hm">'+logo+'<button class="burger" aria-label="메뉴 열기" aria-expanded="false">☰</button><nav class="nav" aria-label="주 메뉴">'+
   MENU.map(function(c){var on=c[1].some(function(i){return i[1].split('#')[0]==cur&&cur!='index.html'});
    return '<div class="cat'+(on?' on':'')+'"><button aria-expanded="false">'+c[0]+'</button><ul>'+c[1].map(function(i){return '<li>'+A(i)+'</li>'}).join('')+'</ul></div>'}).join('')+
   '<div class="um">'+util+'</div></nav></div>';
  var b=h.querySelector('.burger'),n=h.querySelector('.nav'),cats=h.querySelectorAll('.cat');
  b.onclick=function(){b.setAttribute('aria-expanded',n.classList.toggle('open'))};
  cats.forEach(function(c){c.querySelector('button').onclick=function(e){e.stopPropagation();var o=!c.classList.contains('open');cats.forEach(function(x){x.classList.remove('open');x.firstChild.setAttribute('aria-expanded','false')});if(o){c.classList.add('open');this.setAttribute('aria-expanded','true')}}});
  document.addEventListener('click',function(){cats.forEach(function(x){x.classList.remove('open')})});
  document.addEventListener('keydown',function(e){if(e.key=='Escape')cats.forEach(function(x){x.classList.remove('open')})})}
 var f=document.getElementById('ftr');
 if(f){f.className='ft';f.innerHTML='<div class="wrap"><div>'+logo+'<p style="margin-top:12px">'+TH.slogan+'<br>독립 컨스트럭터, APEX CITY</p></div>'+
  MENU.map(function(c){return '<div><h4>'+c[0]+'</h4>'+c[1].map(A).join('')+'</div>'}).join('')+'<div><h4>TEAM_H</h4>'+util+'</div><p class="cp">© TEAM_H. 가상으로 만든 레이싱팀 프로젝트입니다.</p></div>'}
 window.ph=function(file,cls,ratio){return '<div class="ph '+(cls||'')+'" data-file="images/'+file+'"'+(ratio?' style="aspect-ratio:'+ratio+'"':'')+'><img src="images/'+file+'" alt="" loading="lazy" onerror="this.remove()"></div>'};
 window.logoImg=function(name){var s=name.toLowerCase().replace(/\s+/g,'-');return '<div><img src="images/partners/'+s+'.png" alt="'+name+'" onerror="this.outerHTML=\'<span>'+name+'</span>\'"></div>'};
 document.addEventListener('DOMContentLoaded',function(){
  var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
 });
})();
