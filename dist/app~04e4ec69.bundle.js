"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[209],{756:(n,A,e)=>{e.d(A,{Z:()=>t});var o=e(537),a=e.n(o),r=e(645),i=e.n(r)()(a());i.push([n.id,"body {\n  padding: 0;\n  margin: 0;\n}\n\n/* page favorite style */\n.favoriteContent .data {\n  display: grid;\n  padding: 2em;\n  grid-template-columns: repeat(3, auto);\n  row-gap: 5em;\n}\n\n.noDataImage {\n  margin: auto;\n  width: 25%;\n}\n\n.title-page {\n  padding: 0 1em;\n}\n\n/* like session */\n.likeButton {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(255, 0, 174);\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n.likeButton:hover {\n  background-color: rgb(116, 0, 120);\n}\n\n.spesifikData {\n  padding: 3em;\n}\n#comment {\n  padding: 2em;\n}\n.hreffRestaurant h1{\n  min-width: 44px;\n  min-height: 44px;\n}\n.details {\n  margin: auto;\n  display: flex;\n  width: 100%;\n  gap: 5em;\n}\n.details img {\n  width: 550px;\n  height: 100%;\n  border-radius: 10px;\n}\n.menus {\n  margin: auto;\n  justify-content: space-around;\n  display: flex;\n}\n.box {\n  background-color: rgb(246, 246, 246);\n  border-style: ridge;\n  padding: 0 2em 2em 2em;\n  border-radius: 10px;\n  height: 400px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.titleSection {\n  margin-left: -0.5em;\n}\n.innerBox {\n  background-color: rgb(235, 235, 235);\n  border-style: ridge;\n  padding: 0 0.5em;\n  border-radius: 15px 3px;\n  border-left-color: rgb(140, 255, 255);\n  border-left-width: 10px;\n}\n.makananMenus {\n  margin-left: 5em;\n}\n.createdComment {\n  margin-top: -1em;\n  margin-left: 1em;\n  font-size: smaller;\n  color: rgba(67, 67, 67, 0.797);\n}\n.commentContent {\n  margin-top: -0.25em;\n  font-weight: lighter;\n}\n#Restaurant-List {\n  margin-top: 1em;\n}\nhtml {\n  scroll-behavior: smooth;\n}\n.skip-link {\n  top: -40px;\n  position: absolute;\n  z-index: 100;\n}\n.skip-link:focus {\n  top: 0;\n}\n.navbar h1 {\n  font-family: cursive;\n}\nimg {\n  display: block;\n}\n.logo img {\n  margin: auto;\n}\n.iconMenu {\n  display: none;\n}\n\n.navbar {\n  padding: 0 2em;\n  display: flex;\n  justify-content: space-between;\n}\n.menu {\n  text-decoration: none;\n  color: black;\n  width: 250px;\n  display: flex;\n  justify-content: space-between;\n}\n.jumbotron {\n  /* background-color: blueviolet; */\n  display: flex;\n  padding: 1em;\n}\n.jumbotron .textJumbotron {\n  width: 650px;\n  z-index: 1;\n  color: rgb(225, 255, 0);\n  position: absolute;\n  margin-top: 5em;\n  font-weight: bolder;\n  font-weight: 900;\n  margin-left: 28%;\n}\n.jumbotron img {\n  width: 1000px;\n  height: 350px;\n  border-radius: 15px;\n  margin: auto;\n  filter: blur(1px);\n  opacity: 0.5;\n}\n.img-jumbotron{\n  padding: 0 15em;\n}\n.items {\n  margin: auto;\n}\n.items .data {\n  width: 95%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  row-gap: 5em;\n}\n\n.card {\n  width: 350px;\n  height: auto;\n  border: solid;\n  border-radius: 25px 3px;\n  margin: 0 auto 1em auto;\n  background-color: rgba(253, 181, 255, 0.733);\n}\n.card .imgCard {\n  width: 100%;\n  border-radius: 25px 3px;\n\n  max-height: 100%;\n  position: relative;\n}\n.card .lokasi {\n  position: absolute;\n  top: 29em;\n  height: 25px;\n  background-color: rgba(251, 213, 0, 0.896);\n  border-radius: 5px 17px;\n}\n.card .lokasi h4 {\n  margin: auto;\n}\n.card .lokasi .rating {\n  position: absolute;\n}\n.card .detail {\n  padding: 0 1em;\n}\n.footer {\n  padding: 5px;\n  background-color: rgb(0, 68, 113);\n  text-align: center;\n  color: white;\n}\n#sidebar {\n  display: none;\n  padding: 1em;\n  right: 0;\n  z-index: 1;\n  width: 250px;\n  height: 100%;\n  position: fixed;\n  background-color: rgba(124, 231, 255, 0.937);\n}\n#sidebar hr {\n  border: solid;\n}\n.menuSidebar {\n  background-color: rgba(0, 102, 255, 0.866);\n  border-radius: 20px 5px;\n  padding: 0.1em 1em;\n}\n.menuSidebar a {\n  text-decoration: none;\n  color: black;\n}\n.menuBar {\n  width: 250px;\n  display: flex;\n  color: blue;\n  gap: 1em;\n  font-size: 17px;\n}\n.menuBar a {\n  margin: auto;\n  text-decoration: none;\n}\nbutton {\n  width: auto;\n  height: 35px;\n  border-radius: 25px;\n  background-color: rgba(0, 208, 104, 0.807);\n  font-size: 15px;\n  font-weight: bolder;\n  color: rgb(158, 0, 249);\n}\nbutton:hover {\n  cursor: pointer;\n  background-color: rgba(0, 102, 161, 0.523);\n}\n\n/* responsive */\n@media screen and (max-width: 1200px) {\n  .favoriteContent .data {\n    display: grid;\n    padding: 2em;\n    grid-template-columns: repeat(1, auto);\n    row-gap: 2em;\n  }\n  \n  .spesifikData {\n    padding: 1em;\n  }\n  .details {\n    display: block;\n    /* grid-template-columns: repeat(1, auto); */\n  }\n  .details .imgDetail {\n    width: 100%;\n    height: 500px;\n  }\n  .navbar .title {\n    font-size: x-large;\n  }\n  .jumbotron {\n    width: auto;\n    height: 350px;\n    margin: auto;\n  }\n  .textJumbotron {\n    display: none;\n  }\n  .jumbotron img {\n    width: 150%;\n    border-radius: 15px;\n    margin: auto;\n    filter: blur(0px);\n    opacity: 1;\n  }\n  .img-jumbotron{\n    padding: 0 10em;\n  }\n  .items .data {\n    width: 90%;\n    display: grid;\n    margin: auto;\n    grid-template-columns: repeat(2, auto);\n    gap: 1em;\n  }\n  .card {\n    width: 100%;\n    height: auto;\n    border: solid;\n    margin-bottom: 1em;\n  }\n  .card .lokasi {\n    position: absolute;\n    top: 29em;\n    height: 25px;\n    background-color: rgb(251, 213, 0);\n    border-radius: 5px 17px;\n  }\n  .menuBar {\n    display: none;\n  }\n  img.iconMenu {\n    color: black;\n  }\n  .iconMenu {\n    display: inline;\n    margin: auto 0;\n  }\n  .iconMenu:hover {\n    cursor: pointer;\n    background-color: rgba(0, 134, 224, 0.308);\n    border-radius: 7px;\n  }\n  .closeSidebar:hover {\n    cursor: pointer;\n    background-color: rgba(0, 135, 224, 0.827);\n    border-radius: 7px;\n  }\n}\n\n/* responsive */\n@media screen and (max-width: 600px) {\n  .favoriteContent .data {\n    display: grid;\n    padding: 2em;\n    grid-template-columns: repeat(1, auto);\n    row-gap: 2em;\n  }\n  \n  .spesifikData {\n    padding: 1em;\n  }\n  .details {\n    display: block;\n    /* grid-template-columns: repeat(1, auto); */\n  }\n  .details .imgDetail {\n    width: 100%;\n    height: 500px;\n  }\n  .navbar .title {\n    font-size: x-large;\n  }\n  .jumbotron {\n    width: auto;\n    height: 350px;\n    margin: auto;\n  }\n  .textJumbotron {\n    display: none;\n  }\n  .jumbotron img {\n    width: 100%;\n    border-radius: 15px;\n    margin: auto;\n    filter: blur(0px);\n    opacity: 1;\n  }\n  .img-jumbotron{\n    padding: 0px;\n  }\n  .items .data {\n    width: 90%;\n    display: grid;\n    margin: auto;\n    grid-template-columns: repeat(1, auto);\n    gap: 1em;\n  }\n  .card {\n    width: 100%;\n    height: auto;\n    border: solid;\n    margin-bottom: 1em;\n  }\n  .card .lokasi {\n    position: absolute;\n    top: 29em;\n    height: 25px;\n    background-color: rgb(251, 213, 0);\n    border-radius: 5px 17px;\n  }\n  .menuBar {\n    display: none;\n  }\n  img.iconMenu {\n    color: black;\n  }\n  .iconMenu {\n    display: inline;\n    margin: auto 0;\n  }\n  .iconMenu:hover {\n    cursor: pointer;\n    background-color: rgba(0, 134, 224, 0.308);\n    border-radius: 7px;\n  }\n  .closeSidebar:hover {\n    cursor: pointer;\n    background-color: rgba(0, 135, 224, 0.827);\n    border-radius: 7px;\n  }\n}\n\n\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,YAAY;EACZ,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;;EAElC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,QAAQ;AACV;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,6BAA6B;EAC7B,aAAa;AACf;AACA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,qCAAqC;EACrC,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,8BAA8B;AAChC;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,MAAM;AACR;AACA;EACE,oBAAoB;AACtB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,kCAAkC;EAClC,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;EACZ,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,4CAA4C;AAC9C;AACA;EACE,WAAW;EACX,uBAAuB;;EAEvB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,0CAA0C;EAC1C,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;EACZ,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,4CAA4C;AAC9C;AACA;EACE,aAAa;AACf;AACA;EACE,0CAA0C;EAC1C,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,QAAQ;EACR,eAAe;AACjB;AACA;EACE,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,0CAA0C;EAC1C,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,0CAA0C;AAC5C;;AAEA,eAAe;AACf;EACE;IACE,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,YAAY;EACd;;EAEA;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,4CAA4C;EAC9C;EACA;IACE,WAAW;IACX,aAAa;EACf;EACA;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,aAAa;IACb,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;IACE,UAAU;IACV,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,QAAQ;EACV;EACA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,kBAAkB;EACpB;EACA;IACE,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;EACzB;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,cAAc;EAChB;EACA;IACE,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;EACpB;AACF;;AAEA,eAAe;AACf;EACE;IACE,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,YAAY;EACd;;EAEA;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,4CAA4C;EAC9C;EACA;IACE,WAAW;IACX,aAAa;EACf;EACA;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,aAAa;IACb,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,UAAU;EACZ;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;IACV,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,QAAQ;EACV;EACA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,kBAAkB;EACpB;EACA;IACE,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;EACzB;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,cAAc;EAChB;EACA;IACE,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;EACpB;AACF",sourcesContent:["body {\n  padding: 0;\n  margin: 0;\n}\n\n/* page favorite style */\n.favoriteContent .data {\n  display: grid;\n  padding: 2em;\n  grid-template-columns: repeat(3, auto);\n  row-gap: 5em;\n}\n\n.noDataImage {\n  margin: auto;\n  width: 25%;\n}\n\n.title-page {\n  padding: 0 1em;\n}\n\n/* like session */\n.likeButton {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(255, 0, 174);\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n.likeButton:hover {\n  background-color: rgb(116, 0, 120);\n}\n\n.spesifikData {\n  padding: 3em;\n}\n#comment {\n  padding: 2em;\n}\n.hreffRestaurant h1{\n  min-width: 44px;\n  min-height: 44px;\n}\n.details {\n  margin: auto;\n  display: flex;\n  width: 100%;\n  gap: 5em;\n}\n.details img {\n  width: 550px;\n  height: 100%;\n  border-radius: 10px;\n}\n.menus {\n  margin: auto;\n  justify-content: space-around;\n  display: flex;\n}\n.box {\n  background-color: rgb(246, 246, 246);\n  border-style: ridge;\n  padding: 0 2em 2em 2em;\n  border-radius: 10px;\n  height: 400px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.titleSection {\n  margin-left: -0.5em;\n}\n.innerBox {\n  background-color: rgb(235, 235, 235);\n  border-style: ridge;\n  padding: 0 0.5em;\n  border-radius: 15px 3px;\n  border-left-color: rgb(140, 255, 255);\n  border-left-width: 10px;\n}\n.makananMenus {\n  margin-left: 5em;\n}\n.createdComment {\n  margin-top: -1em;\n  margin-left: 1em;\n  font-size: smaller;\n  color: rgba(67, 67, 67, 0.797);\n}\n.commentContent {\n  margin-top: -0.25em;\n  font-weight: lighter;\n}\n#Restaurant-List {\n  margin-top: 1em;\n}\nhtml {\n  scroll-behavior: smooth;\n}\n.skip-link {\n  top: -40px;\n  position: absolute;\n  z-index: 100;\n}\n.skip-link:focus {\n  top: 0;\n}\n.navbar h1 {\n  font-family: cursive;\n}\nimg {\n  display: block;\n}\n.logo img {\n  margin: auto;\n}\n.iconMenu {\n  display: none;\n}\n\n.navbar {\n  padding: 0 2em;\n  display: flex;\n  justify-content: space-between;\n}\n.menu {\n  text-decoration: none;\n  color: black;\n  width: 250px;\n  display: flex;\n  justify-content: space-between;\n}\n.jumbotron {\n  /* background-color: blueviolet; */\n  display: flex;\n  padding: 1em;\n}\n.jumbotron .textJumbotron {\n  width: 650px;\n  z-index: 1;\n  color: rgb(225, 255, 0);\n  position: absolute;\n  margin-top: 5em;\n  font-weight: bolder;\n  font-weight: 900;\n  margin-left: 28%;\n}\n.jumbotron img {\n  width: 1000px;\n  height: 350px;\n  border-radius: 15px;\n  margin: auto;\n  filter: blur(1px);\n  opacity: 0.5;\n}\n.img-jumbotron{\n  padding: 0 15em;\n}\n.items {\n  margin: auto;\n}\n.items .data {\n  width: 95%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  row-gap: 5em;\n}\n\n.card {\n  width: 350px;\n  height: auto;\n  border: solid;\n  border-radius: 25px 3px;\n  margin: 0 auto 1em auto;\n  background-color: rgba(253, 181, 255, 0.733);\n}\n.card .imgCard {\n  width: 100%;\n  border-radius: 25px 3px;\n\n  max-height: 100%;\n  position: relative;\n}\n.card .lokasi {\n  position: absolute;\n  top: 29em;\n  height: 25px;\n  background-color: rgba(251, 213, 0, 0.896);\n  border-radius: 5px 17px;\n}\n.card .lokasi h4 {\n  margin: auto;\n}\n.card .lokasi .rating {\n  position: absolute;\n}\n.card .detail {\n  padding: 0 1em;\n}\n.footer {\n  padding: 5px;\n  background-color: rgb(0, 68, 113);\n  text-align: center;\n  color: white;\n}\n#sidebar {\n  display: none;\n  padding: 1em;\n  right: 0;\n  z-index: 1;\n  width: 250px;\n  height: 100%;\n  position: fixed;\n  background-color: rgba(124, 231, 255, 0.937);\n}\n#sidebar hr {\n  border: solid;\n}\n.menuSidebar {\n  background-color: rgba(0, 102, 255, 0.866);\n  border-radius: 20px 5px;\n  padding: 0.1em 1em;\n}\n.menuSidebar a {\n  text-decoration: none;\n  color: black;\n}\n.menuBar {\n  width: 250px;\n  display: flex;\n  color: blue;\n  gap: 1em;\n  font-size: 17px;\n}\n.menuBar a {\n  margin: auto;\n  text-decoration: none;\n}\nbutton {\n  width: auto;\n  height: 35px;\n  border-radius: 25px;\n  background-color: rgba(0, 208, 104, 0.807);\n  font-size: 15px;\n  font-weight: bolder;\n  color: rgb(158, 0, 249);\n}\nbutton:hover {\n  cursor: pointer;\n  background-color: rgba(0, 102, 161, 0.523);\n}\n\n/* responsive */\n@media screen and (max-width: 1200px) {\n  .favoriteContent .data {\n    display: grid;\n    padding: 2em;\n    grid-template-columns: repeat(1, auto);\n    row-gap: 2em;\n  }\n  \n  .spesifikData {\n    padding: 1em;\n  }\n  .details {\n    display: block;\n    /* grid-template-columns: repeat(1, auto); */\n  }\n  .details .imgDetail {\n    width: 100%;\n    height: 500px;\n  }\n  .navbar .title {\n    font-size: x-large;\n  }\n  .jumbotron {\n    width: auto;\n    height: 350px;\n    margin: auto;\n  }\n  .textJumbotron {\n    display: none;\n  }\n  .jumbotron img {\n    width: 150%;\n    border-radius: 15px;\n    margin: auto;\n    filter: blur(0px);\n    opacity: 1;\n  }\n  .img-jumbotron{\n    padding: 0 10em;\n  }\n  .items .data {\n    width: 90%;\n    display: grid;\n    margin: auto;\n    grid-template-columns: repeat(2, auto);\n    gap: 1em;\n  }\n  .card {\n    width: 100%;\n    height: auto;\n    border: solid;\n    margin-bottom: 1em;\n  }\n  .card .lokasi {\n    position: absolute;\n    top: 29em;\n    height: 25px;\n    background-color: rgb(251, 213, 0);\n    border-radius: 5px 17px;\n  }\n  .menuBar {\n    display: none;\n  }\n  img.iconMenu {\n    color: black;\n  }\n  .iconMenu {\n    display: inline;\n    margin: auto 0;\n  }\n  .iconMenu:hover {\n    cursor: pointer;\n    background-color: rgba(0, 134, 224, 0.308);\n    border-radius: 7px;\n  }\n  .closeSidebar:hover {\n    cursor: pointer;\n    background-color: rgba(0, 135, 224, 0.827);\n    border-radius: 7px;\n  }\n}\n\n/* responsive */\n@media screen and (max-width: 600px) {\n  .favoriteContent .data {\n    display: grid;\n    padding: 2em;\n    grid-template-columns: repeat(1, auto);\n    row-gap: 2em;\n  }\n  \n  .spesifikData {\n    padding: 1em;\n  }\n  .details {\n    display: block;\n    /* grid-template-columns: repeat(1, auto); */\n  }\n  .details .imgDetail {\n    width: 100%;\n    height: 500px;\n  }\n  .navbar .title {\n    font-size: x-large;\n  }\n  .jumbotron {\n    width: auto;\n    height: 350px;\n    margin: auto;\n  }\n  .textJumbotron {\n    display: none;\n  }\n  .jumbotron img {\n    width: 100%;\n    border-radius: 15px;\n    margin: auto;\n    filter: blur(0px);\n    opacity: 1;\n  }\n  .img-jumbotron{\n    padding: 0px;\n  }\n  .items .data {\n    width: 90%;\n    display: grid;\n    margin: auto;\n    grid-template-columns: repeat(1, auto);\n    gap: 1em;\n  }\n  .card {\n    width: 100%;\n    height: auto;\n    border: solid;\n    margin-bottom: 1em;\n  }\n  .card .lokasi {\n    position: absolute;\n    top: 29em;\n    height: 25px;\n    background-color: rgb(251, 213, 0);\n    border-radius: 5px 17px;\n  }\n  .menuBar {\n    display: none;\n  }\n  img.iconMenu {\n    color: black;\n  }\n  .iconMenu {\n    display: inline;\n    margin: auto 0;\n  }\n  .iconMenu:hover {\n    cursor: pointer;\n    background-color: rgba(0, 134, 224, 0.308);\n    border-radius: 7px;\n  }\n  .closeSidebar:hover {\n    cursor: pointer;\n    background-color: rgba(0, 135, 224, 0.827);\n    border-radius: 7px;\n  }\n}\n\n\n"],sourceRoot:""}]);const t=i},46:(n,A,e)=>{var o=e(379),a=e.n(o),r=e(795),i=e.n(r),t=e(569),C=e.n(t),d=e(565),p=e.n(d),l=e(216),g=e.n(l),m=e(589),s=e.n(m),E=e(756),u={};u.styleTagTransform=s(),u.setAttributes=p(),u.insert=C().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=g(),a()(E.Z,u),E.Z&&E.Z.locals&&E.Z.locals}}]);
//# sourceMappingURL=app~04e4ec69.bundle.js.map