/* 관리자 페이지에서 바꾼 값(브라우저 저장)과 overrides.js의 값을 data.js 위에 덮어씁니다. */
(function(){var o={};try{o=JSON.parse(localStorage.getItem('TH_OVR')||'{}')}catch(e){}Object.assign(TH,window.TH_FILE_OVR||{},o)})();
