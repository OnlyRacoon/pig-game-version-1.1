const e={playing:!0,scores:[0,0],activePlayer:{player:0,currentScore:0}},a=function(){e.activePlayer.player=0===e.activePlayer.player?1:0};function r(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}const t=document.querySelector(".dice"),i=document.querySelector(".btn--roll"),c=document.querySelector(".btn--hold"),l=document.querySelector(".btn--new");var s=new class{setStartingConditions(e){this._data=e,this._pick("score",0).textContent=0,this._pick("score",1).textContent=0,t.classList.add("hidden"),this._pick("player",this._data.player).classList.add("player--active")}displayDice(e){t.classList.remove("hidden"),t.src=`icons/dice-${e}.png`}displayCurrentScore(e){this._pick("current",this._data.player).textContent=e+""}displayScore(e){this._pick("score",this._data.player).textContent=e+""}displaySwitchPlayers(){this._pick("player",0).classList.toggle("player--active"),this._pick("player",1).classList.toggle("player--active")}addHandlerRoll(e){i.addEventListener("click",e)}addHandlerHold(e){c.addEventListener("click",e)}addHandlerNewGame(e){l.addEventListener("click",e)}displayGameOver(){t.classList.add("hidden"),this._pick("player",this._data.player).classList.remove("player--active"),this._pick("player",this._data.player).classList.add("player--winner")}hideWinner(){this._pick("player",this._data.player).classList.remove("player--winner")}_pick(e,a){let r;switch(e){case"score":r=`#score--${a}`;break;case"current":r=`#current--${a}`;break;default:r=`.player--${a}`}return document.querySelector(r)}constructor(){r(this,"_data",void 0),r(this,"_currentContainer",void 0),r(this,"_scoreContainer",void 0)}};const n=function(){if(e.playing){const r=Math.trunc(6*Math.random())+1;s.displayDice(r),1!==r?(e.activePlayer.currentScore+=r,s.displayCurrentScore(e.activePlayer.currentScore)):(s.displayCurrentScore(0),e.activePlayer.currentScore=0,a(),s.displaySwitchPlayers())}},d=function(){e.playing&&(e.scores[e.activePlayer.player]+=e.activePlayer.currentScore,s.displayCurrentScore(0),e.activePlayer.currentScore=0,s.displayScore(e.scores[e.activePlayer.player]),e.scores[e.activePlayer.player]>=20?(e.playing=!1,s.displayGameOver()):(a(),s.displaySwitchPlayers()))},o=function(){e.playing||(s.hideWinner(),e.activePlayer.player=0,s.setStartingConditions(e.activePlayer),e.playing=!0,e.scores=[0,0])};s.setStartingConditions(e.activePlayer),s.addHandlerRoll(n),s.addHandlerHold(d),s.addHandlerNewGame(o);
//# sourceMappingURL=index.fb448c22.js.map