window.onload = function () {
  // 初始轮播
  const glide = new Glide(".glide", {
    autoplay: 5000,
  });
  // 获取轮播标题实例
  const captionsEl = document.querySelectorAll(".slide-caption");
  // 当轮播加载完成后，每个轮播完成时，加载标题动画
  glide.on(["mount.after", "run.after"], () => {
    // 获取当前展示的轮播index
    const caption = captionsEl[glide.index];
    anime({
      // 对每个子元素进行动画
      targets: caption.children,
      // 透明度
      opacity: [0, 1],
      // 持续时间
      duration: 400,
      easing: "linear",
      // 每个子元素相继延迟400毫秒，第一个延迟300毫秒
      delay: anime.stagger(400, { start: 300 }),
      // 从下向上移动，每行从40到10递减，最后移动到0
      translateY: [anime.stagger([40, 10]), 0],
    });
  });

  // 轮播进行前，把标题透明度设置为0，还原
  glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach((el) => {
      el.style.opacity = 0;
    });
  });

  // 加载轮播，必须在添加事件处理函数之后
  glide.mount();
  document.getElementById("rihan").style.display = "block";
  document.getElementById("rihan-link").classList +=  " tab__links--active";
};
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab__links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " tab__links--active",
      ""
    );
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tab__links--active";
}
