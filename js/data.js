/* TEAM_H 데이터 — "SAMPLE" 표시는 임의로 채운 값. 값만 바꾸면 모든 페이지에 반영됩니다. */
window.TH={
 slogan:'ENGINEERING THE VICTORY',
 next:{round:9,circuit:'Apex Circuit',date:'2026-11-08T14:00:00+09:00'}, // SAMPLE
 now:'2026 ARC 시즌 진행 중, 8라운드 종료', // SAMPLE
 last:{round:8,text:'73번 우승, 78번 3위'}, // SAMPLE
 standing:{hyper:'Hypercar 컨스트럭터 1위',gt3:'GT3 컨스트럭터 2위'}, // SAMPLE
 rounds:15, // SAMPLE
 r8:{circuit:'Seaside Circuit',date:'2026-10-05',pole:'#73 TEAM_H',fl:'#78 TEAM_H 1:39.842',
  hyper:[['1','#73','TEAM_H','1:42:18.331'],['2','#11','팀 1','+4.2s'],['3','#78','TEAM_H','+9.8s']],
  gt3:[['1','#40','GT3 팀 5','1:31:07.512'],['2','#75','TEAM_H','+2.1s'],['3','#44','GT3 팀 7','+5.0s']]}, // SAMPLE
 programs:[
  {t:'ARC Hypercar',d:'Ferrari 499P 기반 Hypercar. 자체 개발 Tenpest V10으로 챔피언십을 이끈다.',r:[['차량번호','73 / 78'],['엔진','Tenpest V10 700hp'],['타이틀','3회 (2023–2025)']]},
  {t:'ARC GT3',d:'Mercedes-AMG GT3 EVO로 출전하는 GT3 프로그램.',r:[['차량번호','75 / 76'],['엔진','6.2L V8 550hp'],['타이틀','컨스트럭터 2회 (2024–2025)']]}, // SAMPLE
  {t:'IGTC GT3',d:'국제 GT3 무대 프로그램. 라인업은 추후 발표한다.',r:[['차량번호','TBA'],['드라이버','TBA'],['성적','우승 3 · 포디움 8']]}
 ],
 drivers:[
  {n:'이현우',no:73,c:'#9BCBFF',t:'#9BCBFF',w:55,p:102,f:'hyunwoo'},
  {n:'박관용',no:73,c:'#B026FF',t:'#C766FF',w:55,p:101,f:'kwanyong'},
  {n:'신정원',no:78,c:'#004225',t:'#2FB57A',w:33,p:84,f:'jeongwon'},
  {n:'김지한',no:78,c:'#B8F530',t:'#B8F530',w:34,p:84,f:'jihan'}
 ],
 news:[ // SAMPLE  [날짜,제목,이미지,분류,내용]
  {d:'2026-10-05',t:'R8 리포트: 73번 우승, 선두 질주 이어가다',f:'news-1',c:'Race Report',b:'Seaside Circuit에서 73번이 폴 포지션에서 출발해 우승했고 78번이 3위로 들어왔다. 팀은 Hypercar 컨스트럭터 선두를 지켰다.'},
  {d:'2026-09-28',t:'Tenpest 내구 사양, 장거리 시험 완료',f:'news-2',c:'Engineering',b:'APEX CITY 테스트 서킷에서 ORECA 07 개발차로 내구 세팅의 장거리 시험을 마쳤다. 열관리와 연료효율 데이터를 Project Sora에 반영한다.'},
  {d:'2026-09-14',t:'Junior Program 2026 시작, 차세대 드라이버를 찾는다',f:'news-3',c:'Team',b:'젊은 드라이버를 발굴해 GT와 Hypercar 프로그램으로 연결하는 육성 프로그램을 시작했다. 규모와 운영 계획은 따로 발표하지 않는다.'},
  {d:'2026-09-07',t:'R7 리포트: 78번 2위, 73번 3위로 동반 입상',f:'news-4',c:'Race Report',b:'Bayfront Circuit에서 두 차량이 함께 포디움에 올랐고 73번이 폴 포지션을 차지했다.'},
  {d:'2026-08-20',t:'Project R #3, 선행 개발 프로그램으로 부활',f:'news-5',c:'Engineering',b:'외부 주문이 중단됐던 2.0L 직렬 4기통 터보 엔진을 2028년 ARC 규정 변화에 대비한 선행 개발로 이어간다.'},
  {d:'2026-07-27',t:'R6 리포트: 78번 우승, 73번 2위',f:'news-6',c:'Race Report',b:'Canyon Ring에서 78번이 우승하고 73번이 2위로 들어와 원투 피니시를 기록했다.'}],
 partners:['Samsung','Google','Blue Archive','DHL','IWC Schaffhausen','Hyundai Card','Ferrari','ORECA'] // 로고: images/partners/<소문자-하이픈>.png
};

/* ===== 기록 데이터: 여기만 고치면 모든 페이지의 숫자가 자동으로 바뀝니다 ===== */
TH.titles=7; // ARC 챔피언 타이틀(최상위 프로그램)
TH.pts=[25,18,15,12,10,8,6,4,2,1]; // 순위별 포인트(샘플)
TH.hist=[ // 지난 시즌: a=73번 [우승,포디움], b=78번 [우승,포디움]. 2018~2021 GT3, 2023~ Hypercar
 {y:2018,a:[6,13],b:[2,10]},{y:2019,a:[7,12],b:[5,11]},{y:2020,a:[8,14],b:[4,10]},{y:2021,a:[7,13],b:[6,10]},
 {y:2023,a:[7,13],b:[3,10]},{y:2024,a:[7,13],b:[4,11]},{y:2025,a:[10,15],b:[5,13]}];
TH.base={poles:{73:38,78:26}}; // 2025년까지의 폴 포지션
TH.res26=[ // 2026 라운드 결과: [라운드,서킷,날짜,73번 순위,78번 순위,폴 차량]  (SAMPLE)
 [1,'Harbor Park','2026-03-08',4,1,78],[2,'Ridge Raceway','2026-04-05',2,3,73],[3,'Lakeside GP','2026-05-03',3,1,78],[4,'Summit Circuit','2026-05-31',6,1,78],
 [5,'Delta Speedway','2026-06-28',1,4,73],[6,'Canyon Ring','2026-07-26',2,1,78],[7,'Bayfront Circuit','2026-09-06',3,2,73],[8,'Seaside Circuit','2026-10-05',1,3,73]];
TH.future=[[9,'Apex Circuit','2026-11-08'],[10,'Mesa Raceway','2026-11-15'],[11,'Pine Valley','2026-11-22'],[12,'Northgate Ring','2026-11-29'],[13,'Coastal GP','2026-12-06'],[14,'Fortress Circuit','2026-12-13'],[15,'Grand Finale Speedway','2026-12-20']];
TH.extra={'이현우':[1,3],'박관용':[1,2],'신정원':[0,2],'김지한':[1,2]}; // IGTC 등 다른 대회 [우승,포디움]
TH.rv=[241,198,172,140,121,109,96,84,70,58,47,35,26,18]; // Hypercar 경쟁팀 1~14 포인트(임시)
TH.gt3pts=214; // TEAM_H GT3 포인트(임시)
TH.gt3rv=[[5,231],[2,198],[7,176],[3,160],[1,148],[4,135],[6,122],[8,110],[9,99],[10,88],[11,78],[12,68],[13,58],[14,49],[15,40],[16,32],[17,24],[18,16],[19,9]]; // [팀 번호, 포인트]

/* ===== Engineering / History 데이터 ===== */
TH.eng={
 pt:[['Vista','V8 NA','3.0L',2023,12000,620,9000,480],['Vista Evo','V8 NA','3.0L',2024,12000,635,9000,500],['Vista Spec R','V8 NA','3.3L',2025,12000,670,9000,540],['Vista Velo','V8 트윈터보 (커스터머 공급용)','3.3L',2024,9000,650,8000,530],['Tenpest','V10 NA','3.5L',2026,15000,700,12000,630]], // [이름,형식,배기량,사용 시작,최고rpm,최고hp,내구rpm,내구hp]
 r:[['Project R #1','Cross-plane V8 NA','외부 고객에게 공급할 레이스 엔진','개발 중'],['Project R #2','1.6L V6 터보','F2급 오픈휠 레이스카용','개발 중'],['Project R #3','2.0L 직렬 4기통 터보','2028년 ARC 규정 변화에 대비한 선행 개발','선행 개발 중']],
 past:[['Project Vista','TEAM_H 최초의 자체 Hypercar 엔진. Vista Evo와 Spec R로 이어졌다.'],['Project Sora','Hypercar 파워트레인을 계속 개량하는 장기 R&D. 현재는 Tenpest 업데이트를 맡는다.'],['Project Asuka','2세대 Hypercar 섀시 개발. 강성, 중량, 무게중심, 서스펜션을 개선했다.'],['Project Langley','차세대 엔진 Tenpest 개발. 2024년 시작해 2026년 실전에 투입됐다.']],
 cycle:['시뮬레이션','ORECA 07 테스트','Hypercar 실전','데이터 분석','설계 개선','재검증'],
 sim:[['AVL','엔진과 파워트레인 시뮬레이션'],['VI-grade','차량 동역학, Driver-in-the-Loop'],['Ansys','CFD, 열관리, 구조해석']],
 partners:[['Ferrari','Hypercar 외장과 보디워크'],['ORECA','섀시 엔지니어링, 차량 통합'],['Xtrac','변속기, 드라이브트레인'],['Williams Advanced Engineering','하이브리드와 에너지 시스템'],['Bosch Motorsport','ECU, 센서, 전자제어'],['Öhlins','서스펜션, 댐퍼'],['Multimatic CFT','탄소복합재 구조물']]
};
TH.years=[ // [연도,대회,차량,주요 사건]
 [2018,'ARC','AMG GT3','데뷔전 우승, APEX 24 우승, 드라이버·컨스트럭터 챔피언'],[2019,'ARC','AMG GT3','드라이버·컨스트럭터 챔피언'],
 [2020,'ARC','AMG GT3 EVO','3년 연속 양대 챔피언, GT3 EVO 도입'],[2021,'ARC','AMG GT3 EVO','4년 연속 양대 챔피언, Hypercar 프로그램 준비 착수'],
 [2022,'IGTC','AMG GT3 EVO','Spa 24시간 우승, 뉘르부르크링 24시간 2위, 스즈카 1000km 3위'],[2023,'ARC','Porsche 963','첫 Hypercar 시즌, 양대 챔피언'],
 [2024,'ARC','Ferrari 499P','Vista Evo 투입, 양대 챔피언 2연패'],[2025,'ARC, IGTC','Ferrari 499P','15전 전승, 양대 챔피언'],[2026,'ARC, IGTC','Ferrari 499P','Tenpest 투입, 챔피언십 선두 유지']];
TH.eras=[['2017','팀 구성','창단과 No.73, No.78 2대 체제 구축'],['2018–2021','GT3 시대','4년 연속 양대 챔피언, 60경기 45승'],['2021–2022','개발 체제 구축','엔진 부서 신설, Project H로 국제 무대 경험'],['2023–2024','Hypercar 진출','963에서 499P로, 개발 영역을 차량 전체로 확대'],['2025–현재','종합 컨스트럭터','15전 전승, 자체 엔진 Tenpest 투입']];
TH.heritage=[ // [이름,제조사,사용 기간,시즌,사양,의미]
 ['AMG GT3','Mercedes-AMG','2018–2019',[2018,2019],'6.2L V8 (M159), 550hp, FR','TEAM_H 최초의 레이스카. 데뷔전 우승과 첫 두 시즌 연속 챔피언.'],
 ['AMG GT3 EVO','Mercedes-AMG','2020–현재',[2020,2021],'6.2L V8 (M159), 550hp, FR','GT3 전성기를 완성하고 Spa 24시간 우승까지 이끈 차량.'],
 ['Porsche 963','Porsche','2022 테스트, 2023',[2023],'Vista V8, 620hp (내구 480hp), AWD','TEAM_H의 첫 Hypercar. 첫 시즌 양대 챔피언.'],
 ['Ferrari 499P','Ferrari','2024–현재',[2024,2025,2026],'Vista Evo, Spec R, Tenpest, AWD','2025년 15전 전승을 달성한 현역 Hypercar.']];
TH.projectH={t:'Project H / IGTC',y:2022,car:'AMG GT3 EVO',res:'Spa 24시간 우승, 뉘르부르크링 24시간 2위, 스즈카 1000km 3위',why:'2023년 ARC Hypercar 출범에 대비해 개발에 인력을 집중하려고 2022년 ARC에 불참했다. 그동안 드라이버와 운영 인력의 실전 감각을 유지하고 국제 무대에서 경쟁력을 확인하려고 만든 프로젝트.',got:'장거리 레이스의 타이어, 연료, 브레이크 관리와 해외 레이스 운영 경험. 이후 2025년 IGTC 복귀와 국제 프로그램 확대의 기반이 됐다.'};

/* ===== Partners / Fans / Gallery / Join 데이터 ===== */
TH.tiers=[['Manufacturer & Technical',[['Ferrari','499P 외관과 보디워크'],['ORECA','섀시 엔지니어링, 차량 통합'],['Multimatic CFT','탄소복합재 구조물'],['Xtrac','변속기, 드라이브트레인'],['Williams Advanced Engineering','하이브리드, 에너지 시스템'],['Bosch Motorsport','ECU, 센서, 전자제어']]],
 ['Components',[['Öhlins','서스펜션, 댐퍼'],['Brembo','브레이크'],['BBS','경량 레이싱 휠'],['Pirelli','타이어'],['PETRONAS Primax','레이스 연료'],['PETRONAS Syntium','윤활유']]],
 ['Simulation',[['AVL','엔진, 파워트레인 시뮬레이션'],['VI-grade','차량 동역학, Driver-in-the-Loop'],['Ansys','CFD, 열, 구조해석']]],
 ['Brand Partners',[['Samsung','주요 스폰서'],['Google','파트너'],['Blue Archive','파트너'],['DHL','공식 물류 파트너'],['IWC Schaffhausen','공식 타임피스 파트너'],['Hyundai Card','금융, 라이프스타일 파트너']]]];
TH.road=[['2027','ARC Hypercar와 IGTC를 유지하고 International GT Open에 신규 참가'],['2028','ARC, IGTC, International GT Open 병행. ARC 차기 규정에 맞춰 개발을 조정하고 Project R 지속'],['2029','미정. 규정과 개발 상황, WEC 계획을 보고 결정'],['2030~','WEC 진출 준비 단계. 2030년대 후반 정규 참가 목표']];
TH.plans=[['WEC','2030년대 후반 정규 진출이 목표. 오래 경쟁할 기술력과 운영 기반을 갖춘 뒤 진출한다.'],['Le Mans','WEC 정규 진출을 먼저 이룬 뒤 종합 우승에 도전한다.'],['IMSA','현재 진출 계획 없음.'],['신규 차량','차기 Hypercar는 미정. 파워트레인과 주요 기술의 선행 연구를 진행 중.'],['자체 엔진','Tenpest 업데이트와 Project R을 이어가며 외부 고객과 로드카에도 쓸 수 있는 능력을 쌓는다.'],['제조사 관계','팩토리 팀 전환 계획 없음. 독립 컨스트럭터로 남는다.']];
TH.vision='레이싱팀을 넘어, 모터스포츠를 기반으로 성장한 독립 고성능 자동차 제조사가 되는 것. 레이스에서 쌓은 엔진, 파워트레인, 섀시, 차량 제어 기술을 로드카로 잇고, 레이싱팀, 파워트레인 개발사, 로드카 제조사가 하나의 기술 체계로 연결되는 모습을 그린다.';
TH.guest=[['민수','73번 우승 축하해요!'],['지은','Tenpest 소리 최고입니다'],['태윤','이번 주말도 응원합니다']]; // SAMPLE
TH.walls=['TEAM_H 로고 (모바일)','TEAM_H 로고 (PC)','499P 라이브리','Seaside Circuit 73번','Tenpest 엔진','APEX CITY 야경']; // SAMPLE
TH.quiz=[['TEAM_H가 창단한 해는?',['2015','2017','2018'],1],['Tenpest의 최고 회전수는?',['12,000 rpm','13,500 rpm','15,000 rpm'],2],['2025년 ARC 시즌 결과는?',['11승','13승','15전 전승'],2]];
TH.res=[['Seaside Circuit 공략집','circuit-seaside.pdf'],['Bayfront Circuit 공략집','circuit-bayfront.pdf'],['499P 셋업 시트','setup-499p.pdf'],['GT3 EVO 셋업 시트','setup-gt3.pdf'],['ARC 2026 경기 규정집','rules-arc-2026.pdf'],['스폰서십 제안서','sponsorship.pdf']]; // 파일은 files/ 폴더에 넣기
TH.jobs=[['레이스 엔지니어','Hypercar와 GT3 레이스 운영, 차량 세팅'],['파워트레인 엔지니어','POWERTRAINS에서 엔진 설계와 시험'],['시뮬레이션 엔지니어','AVL, VI-grade, Ansys 기반 개발'],['데이터 분석가','레이스 데이터를 개발로 환류'],['메카닉','차량 정비와 레이스 데이 운영'],['마케팅과 커뮤니케이션','팬 콘텐츠와 파트너 협업']]; // SAMPLE

/* ===== Team Store 상품 (가격은 가상, 원) ===== */
TH.goods=[ // id, 이름, 분류, 가격, 이미지(images/store/), 설명, 사이즈, 품절 여부
 {id:'tee',n:'TEAM_H 팀 티셔츠',c:'의류',p:39000,f:'tee',d:'울트라마린 블루 포인트의 기본 팀 티셔츠.',s:1},
 {id:'hood',n:'2026 팀 후드',c:'의류',p:89000,f:'hood',d:'카본 블랙 바탕에 가슴과 소매에 파란 로고를 넣은 후드.',s:1},
 {id:'wind',n:'팀 윈드브레이커',c:'의류',p:129000,f:'windbreaker',d:'피트 월에서 입는 경량 방풍 재킷.',s:1},
 {id:'cap',n:'팀 캡',c:'액세서리',p:32000,f:'cap',d:'정면에 TEAM_H 워드마크를 수놓은 캡.'},
 {id:'mug',n:'팀 머그',c:'액세서리',p:18000,f:'mug',d:'파란 사선 블록 로고가 들어간 세라믹 머그.'},
 {id:'key',n:'엠블럼 키링',c:'액세서리',p:12000,f:'keyring',d:'H 엠블럼을 금속으로 만든 키링.'},
 {id:'m73',n:'1:43 Ferrari 499P #73',c:'모형',p:129000,f:'model-73',d:'TEAM_H 리버리의 73번 499P 모형.'},
 {id:'m78',n:'1:43 Ferrari 499P #78',c:'모형',p:129000,f:'model-78',d:'TEAM_H 리버리의 78번 499P 모형.',o:1},
 {id:'m18',n:'1:18 Ferrari 499P',c:'모형',p:289000,f:'model-18',d:'열리는 도어와 상세한 엔진룸을 갖춘 대형 모형.'},
 {id:'wp',n:'배경화면 팩',c:'디지털',p:0,f:'wallpaper-pack',d:'휴대폰과 PC용 배경화면 6종.'},
 {id:'dcp',n:'드라이버 카드 팩',c:'디지털',p:3000,f:'card-pack',d:'4명의 드라이버 디지털 카드 모음.'}];
TH.drivers.forEach(function(d,i){TH.goods.splice(3+i,0,{id:'tee-'+d.f,n:d.n+' 드라이버 티셔츠',c:'의류',p:45000,f:'tee-'+d.f,d:'#'+d.no+' '+d.n+'의 개인 컬러를 넣은 티셔츠.',s:1})});

/* ===== 서킷, IGTC, 차량 목록 ===== */
TH.circ={'Harbor Park':['Harbor City',4.1,14,'1:38.92','항구 옆 도심형. 저속 코너가 이어진다.'],'Ridge Raceway':['Ridge Valley',5.3,16,'1:46.31','능선을 따라 고저차가 큰 코스.'],'Lakeside GP':['Lakeside',4.8,15,'1:41.77','호수를 도는 고속 위주 코스.'],'Summit Circuit':['Summit Hills',6.2,20,'2:02.45','긴 직선과 급한 헤어핀이 있는 산악 코스.'],'Delta Speedway':['Delta',3.9,11,'1:33.60','짧고 빠른 평지 코스. 추월이 많다.'],'Canyon Ring':['Canyon',5.6,18,'1:52.08','협곡 사이를 지나는 기술적인 코스.'],'Bayfront Circuit':['Bayfront',4.4,13,'1:39.85','만을 따라 달리는 고속 코스.'],'Seaside Circuit':['Seaside',5.0,17,'1:39.84','바닷바람의 영향이 큰 중고속 코스.'],'Apex Circuit':['APEX CITY',5.8,19,'1:49.12','팀의 홈 코스. 모든 속도 영역이 섞여 있다.'],'Mesa Raceway':['Mesa',4.6,14,'1:42.20','고원의 넓은 코스. 타이어 마모가 크다.'],'Pine Valley':['Pine Valley',5.1,16,'1:44.97','숲속 코스. 노면 변화가 심하다.'],'Northgate Ring':['Northgate',3.7,12,'1:31.40','짧은 북부 서킷. 폴 위치의 영향이 크다.'],'Coastal GP':['Coastal',4.9,15,'1:40.55','해안 도로를 이용한 고속 코스.'],'Fortress Circuit':['Fortress',5.4,17,'1:48.30','성곽 도시를 달리는 좁은 코스.'],'Grand Finale Speedway':['Grand Finale',6.5,21,'2:05.10','시즌 마지막 라운드. 가장 긴 코스.']};
TH.igtc={rounds:[[1,'Forest Ring 12H','2026-03-21',3],[2,'Alpine 6H','2026-05-16',5],[3,'Coast 1000km','2026-07-04',2],[4,'Ardennes 24H','2026-09-19',8],[5,'Sakura 1000km','2026-11-14',null],[6,'Desert 6H','2026-12-12',null]],rv:[82,71,58,44,41,36,30,24,18,12,8]}; // [라운드,이름,날짜,TEAM_H 순위] SAMPLE
TH.fleet=[];(function(){var F=TH.fleet,a=function(c,n,no,x,s){F.push([c,n,no,x,s])};
 a('현역','Ferrari 499P','#73','Hypercar, Tenpest V10','ARC 출전');a('현역','Ferrari 499P','#78','Hypercar, Tenpest V10','ARC 출전');
 a('현역','AMG GT3 EVO','#75','ARC GT3','ARC 출전');a('현역','AMG GT3 EVO','#76','ARC GT3','ARC 출전');a('현역','AMG GT3 EVO','TBA','IGTC GT3','IGTC 출전');
 [['AMG GT3','2018'],['AMG GT3 EVO','2020'],['Porsche 963','2023'],['Ferrari 499P','2024'],['Ferrari 499P','2025']].forEach(function(x){['#73','#78'].forEach(function(n){a('보존',x[0],n,x[1]+'년 챔피언 시즌','보존 중')})});
 for(var i=1;i<=6;i++)a('훈련','AMG GT3 훈련차','T'+i,'드라이버와 Junior 훈련','운용');
 [['A','엔진 시험'],['B','변속기와 냉각 시험'],['C','전자제어 시험'],['D','에어로 시험'],['E','내구 시험']].forEach(function(x){a('테스트','ORECA 07 개발차','R&D-'+x[0],x[1],'개발 투입')});
 for(var i=1;i<=6;i++)a('수송','대형 트랜스포터','TR'+i,'레이스카 수송','운용');
 for(var i=1;i<=4;i++)a('수송','서비스 밴','VN'+i,'장비와 부품 수송','운용');
 for(var i=1;i<=2;i++)a('수송','드라이버 셔틀','SH'+i,'인원 이동','운용')})(); // 총 38대
