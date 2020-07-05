const string = `
body {
  background-color: #ffe035;
  min-height: 100vh;
  width: 100vw;
}

.face {
  min-height: 35vh;
  height: 300px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 500px;
}

.face .nose-tip {
  border: 10px solid #ffe035;
  border-bottom-width: 1px;
  border-left-color: #ffe035;
  border-right-color: #ffe035;
  border-top-color: #000;
  left: 50%;
  margin-left: -10px;
  position: absolute;
  top: 100px;
  z-index: 2;
}

.face .nose-tip::after {
  height: 22px;
  width: 22px;
  border: 3px solid #ffe035;
  border-radius: 0 0 12px 12px / 0 0 20px 20px;
  border-top-color: transparent;
  left: -11px;
  overflow: hidden;
  position: absolute;
  top: -11px;
  z-index: 1;
}

.face .nose-tip::before {
  height: 10px;
  width: 20px;
  background-color: #000;
  border-radius: 10px / 5px;
  left: -10px;
  position: absolute;
  top: -16px;
}

.face .eye {
  height: 64px;
  width: 64px;
  background: #2e2e2e;
  border: 2px solid #000;
  border-radius: 100%;
  left: 50%;
  margin-left: -32px;
  position: absolute;
  top: 70px;
  transform: translateX(-150px);
}

.face .eye-right {
  transform: translateX(150px);
}

.face .eye::before {
  height: 30px;
  width: 30px;
  background-color: #f5f5f5;
  border-radius: 50%;
  left: 5px;
  position: relative;
  top: 5px;
}

.face .cheek .cheek-left, .face .cheek .cheek-right {
  height: 86px;
  width: 86px;
  background-color: #f00;
  border: 2px solid #000;
  border-radius: 50%;
  left: 50%;
  margin-left: -43px;
  position: absolute;
  top: 180px;
}

.face .cheek-left {
  transform: translateX(-180px);
}

.face .cheek-right {
  transform: translateX(180px);
}

.face .mouth {
  height: 200px;
  width: 220px;
  left: 50%;
  margin-left: -110px;
  position: absolute;
  top: 135px;
}

.face .mouth .lip > .lip-left, .face .mouth .lip > .lip-right {
  height: 30px;
  width: 110px;
  background-color: #ffe035;
  border: 4px solid #000;
  border-top-color: #ffe035;
  border-top-right-radius: 60px 30px;
  border-top-width: 0;
  border-right-width: 0;
}

.face .mouth .lip > .lip-left::after, .face .mouth .lip > .lip-right::after {
  height: 0.01px;
  width: 100%;
  border: 2px solid #ffe035;
  left: 1px;
  outline: 1px solid #ffe035;
  position: absolute;
  top: -3px;
}

.face .mouth .lip {
  position: relative;
  z-index: 1;
}

.face .mouth .lip > .lip-left {
  border-bottom-left-radius: 60px 30px;
  transform: rotate(-20deg);
}

.face .mouth .lip > .lip-right {
  border-bottom-left-radius: 60px 30px;
  transform: translate(110px, -30px) scaleX(-1) rotate(-20deg);
}

.face .mouth .jaw {
  height: 220px;
  width: 100%;
  border-radius: 50% 50% 0 0 / 25% 25% 0 0;
  overflow: hidden;
  position: absolute;
  top: 8px;
}

.face .mouth .jaw .lower-jaw {
  height: 580px;
  width: 180px;
  background-color: #9b000a;
  border: 3px solid #000;
  border-radius: 50% / 50%;
  bottom: 0;
  left: 50%;
  margin-left: -90px;
  overflow: hidden;
  position: absolute;
}

.face .mouth .jaw .lower-jaw::after {
  height: 380px;
  width: 200px;
  background-color: #ff485f;
  border-radius: 100px;
  bottom: -190px;
  left: 50%;
  margin-left: -100px;
  position: absolute;
}
`;
export default string;