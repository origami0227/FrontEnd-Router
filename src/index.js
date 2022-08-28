//获取用户目标地址
let number = window.location.hash.substring(1); //去掉#
number = number || 1; //如果number不存在就给个保底址1
let div = document.querySelector(`#div${number}`); //获取div

let app = document.querySelector("#app");
//渲染界面
if (div) {
  div.style.display = "block";
} else {
  div = document.querySelector("#div404");
  div.style.display = "block";
}

if (app) app.appendChild(div); //展示界面

//监听hash变化
window.addEventListener("hashchange", () => {
  console.log("hash changed");
  const number2 = window.location.hash.substring(1); //去掉#

  const div2 = document.querySelector(`#div${number2}`); //获取div
  if (div2) {
    div2.style.display = "block";
  } else {
    div2 = document.querySelector("#div404");
    div2.style.display = "block";
  }
  const app2 = document.querySelector("#app");
  div2.style.display = "block"; //渲染界面
  app2.children[0].style.display = "none";
  document.body.appendChild(app2.children[0]); //清空上一次的界面
  app2.appendChild(div2); //展示界面
});
