const div1 = document.createElement("div"); //JS创建div
div1.innerHTML = "1";
const div2 = document.createElement("div");
div2.innerHTML = "2";
const div3 = document.createElement("div");
div3.innerHTML = "3";
const div4 = document.createElement("div");
div4.innerHTML = "4";
const routeTable = {
  1: div1,
  2: div2,
  3: div3,
  4: div4,
};
function route() {
  //获取用户目标地址
  let number = window.location.hash.substring(1); //去掉#
  let app = document.querySelector("#app");
  number = number || 1; //如果number不存在就给个保底址1

  let div = routeTable[number.toString()]; //获取div
  //渲染界面
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";
  app.innerHTML = "";
  app.appendChild(div); //展示界面
}
route();

//监听hash变化
window.addEventListener("hashchange", () => {
  console.log("hash changed");
  route();
});
