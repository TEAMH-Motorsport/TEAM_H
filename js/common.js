(function(){
 var MENU=[
 ['Latest',[['News','news.html','팀 소식과 경기 리포트'],['Gallery','gallery.html','레이스 데이 사진과 영상'],['Resources','gallery.html#resources','서킷 공략집, 셋업 시트, 규정집']]],
 ['2026',[['Cars','racing.html#cars','현역 레이스카와 스펙'],['Calendar','racing.html#calendar','라운드 일정과 결과'],['Standings','racing.html#standings','챔피언십 포인트 순위']]],
 ['Team',[['Our Team','team.html','철학, 조직, 운영 방향'],['Drivers','team.html#drivers','드라이버와 크루 프로필'],['Garage','team.html#garage','보유 차량 38대'],['Junior Program','team.html#junior','차세대 드라이버 육성']]],
 ['Engineering',[['Overview','engineering.html','개발 조직과 순환 개발 체계'],['Powertrains','engineering.html#powertrains','Vista, Tenpest 엔진 라인업'],['Development Fleet','engineering.html#fleet','ORECA 07 개발차'],['Simulation & Partners','engineering.html#simulation','시뮬레이션과 기술 협력']]],
 ['History',[['Timeline','history.html','2017년부터의 연혁'],['Results','history.html#results','시즌별 성적'],['Championships','history.html#championships','타이틀과 통산 기록'],['Heritage Cars','history.html#heritage','역대 레이스카'],['Project H','history.html#project-h','IGTC 도전 기록']]],
 ['Fans',[['Fan Zone','fanzone.html','응원 게시판과 SNS'],['Wallpapers','fanzone.html#wallpapers','배경화면과 로고'],['Driver Cards','fanzone.html#cards','드라이버 카드'],['Predictions & Quiz','fanzone.html#play','경기 예측과 퀴즈']]],
 ['Partners',[['Partners','partners.html','파트너 등급별 소개'],['Road to WEC','partners.html#future','2027년 이후 로드맵'],['Sponsorship','partners.html#sponsorship','후원 문의']]]],
 UTIL=[['Join Us','join.html'],['Team Store','store.html'],['TEAM_H Engineering','engineering.html'],['TEAM_H POWERTRAINS','engineering.html#powertrains']],
 cur=location.pathname.split('/').pop()||'index.html',
 A=function(x){return '<a href="'+x[1]+'">'+x[0]+'</a>'},
 D=function(x){return '<a href="'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></a>'},
 emb='<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="6" width="52" height="52" fill="#4166F5" transform="translate(7 0) skewX(-12)"/><path d="M22 14h7v13h6V14h7v36h-7V33h-6v17h-7z" fill="#fff" transform="translate(7 0) skewX(-12)"/></svg>',
 logo='<a class="lg" href="index.html" aria-label="TEAM_H 홈">'+emb+'<span class="logo">TEAM<i></i>H</span></a>',
 util=UTIL.map(A).join('');
 var ic=document.createElement('link');ic.rel='icon';ic.href="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='#10131B'/><path d='M7 5h5v8h8V5h5v18h-5v-7h-8v7H7z' fill='#fff'/><path d='M4 28l4-4h20l-4 4z' fill='#4166F5'/></svg>");document.head.appendChild(ic);
 function mount(){
 var h=document.getElementById('hdr');
 if(h){h.className='hd';
  h.innerHTML='<div class="wrap hg">'+logo+'<div class="hr"><div class="ut">'+util+'</div><nav class="nav" aria-label="주 메뉴">'+
   MENU.map(function(c){var on=c[1].some(function(i){return i[1].split('#')[0]==cur&&cur!='index.html'});
    return '<div class="cat'+(on?' on':'')+'"><button aria-expanded="false">'+c[0]+'</button><ul>'+c[1].map(function(i){return '<li>'+D(i)+'</li>'}).join('')+'</ul></div>'}).join('')+
   '<div class="um">'+util+'</div></nav></div><button class="burger" aria-label="메뉴 열기" aria-expanded="false">☰</button></div>';
  var b=h.querySelector('.burger'),n=h.querySelector('.nav'),cats=h.querySelectorAll('.cat');
  b.onclick=function(){b.setAttribute('aria-expanded',n.classList.toggle('open'))};
  cats.forEach(function(c){c.querySelector('button').onclick=function(e){e.stopPropagation();var o=!c.classList.contains('open');cats.forEach(function(x){x.classList.remove('open');x.firstChild.setAttribute('aria-expanded','false')});if(o){c.classList.add('open');this.setAttribute('aria-expanded','true')}}});
  document.addEventListener('click',function(){cats.forEach(function(x){x.classList.remove('open')})});
  document.addEventListener('keydown',function(e){if(e.key=='Escape')cats.forEach(function(x){x.classList.remove('open')})})}
 var f=document.getElementById('ftr');
 if(f){f.className='ft';f.innerHTML='<div class="wrap"><div>'+logo+'<p style="margin-top:12px">'+TH.slogan+'<br>독립 컨스트럭터, APEX CITY</p></div>'+
  MENU.map(function(c){return '<div><h4>'+c[0]+'</h4>'+c[1].map(A).join('')+'</div>'}).join('')+'<div><h4>TEAM_H</h4>'+util+'</div><p class="cp">© TEAM_H. 가상으로 만든 레이싱팀 프로젝트입니다.</p></div>'}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
 window.tbl=function(head,rows,cap){return '<div class="tw"><table class="tbl">'+(cap?'<caption>'+cap+'</caption>':'')+'<thead><tr>'+head.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr'+(/TEAM_H/.test(r.join(' '))?' class="hl"':'')+'>'+r.map(function(x){return '<td>'+x+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>'};
 window.formSave=function(id,key,msg){var f=document.getElementById(id);f.onsubmit=function(e){e.preventDefault();var o={t:new Date().toISOString()};new FormData(f).forEach(function(v,k){o[k]=v});try{var a=JSON.parse(localStorage.getItem(key)||'[]');a.push(o);localStorage.setItem(key,JSON.stringify(a))}catch(x){}f.reset();f.querySelector('.ok').textContent=msg}};
 window.ph=function(file,cls,ratio){return '<div class="ph '+(cls||'')+'" data-file="images/'+file+'"'+(ratio?' style="aspect-ratio:'+ratio+'"':'')+'><img src="images/'+file+'" alt="" loading="lazy" onerror="this.remove()"></div>'};
 window.logoImg=function(name){var s=name.toLowerCase().replace(/\s+/g,'-');return '<div><img src="images/partners/'+s+'.png" alt="'+name+'" onerror="this.outerHTML=\'<span>'+name+'</span>\'"></div>'};
 document.addEventListener('DOMContentLoaded',function(){
  var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
 });
})();
