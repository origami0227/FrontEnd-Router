function route() {
  //获取用户目标地址
  let number = window.location.hash.substring(1); //去掉#
  let app = document.querySelector("#app");
  number = number || 1; //如果number不存在就给个保底址1

  let div = document.querySelector(`#div${number}`); //获取div
  //渲染界面
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";
  if (app.children.length > 0) {
    app.children[0].style.display = "none";
    document.body.appendChild(app.children[0]); //清空上一次的界面
  }
  app.appendChild(div); //展示界面
}
route();

//监听hash变化
window.addEventListener("hashchange", () => {
  console.log("hash changed");
  route();
});
