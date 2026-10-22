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
  gt3:[['1','#32','GT3 팀 5','1:31:07.512'],['2','#75','TEAM_H','+2.1s'],['3','#14','GT3 팀 7','+5.0s']]}, // SAMPLE
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
 news:[ // SAMPLE
  {d:'2026-10-05',t:'R8 리포트: 73번 우승, 선두 질주 이어가다',f:'news-1'},
  {d:'2026-09-28',t:'Tenpest 내구 사양, 장거리 시험 완료',f:'news-2'},
  {d:'2026-09-14',t:'Junior Program 2026 시작, 차세대 드라이버를 찾는다',f:'news-3'}
 ],
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
