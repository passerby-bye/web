  //摇摆
  let x0=0
  let y0=300
  let i=-90
  document.addEventListener("keydown", function(event) {
    var tree = document.getElementById("tree");

    if (event.key === "ArrowUp") {
      tree.style.transform = "rotate(-50deg)";
    } else if (event.key === "ArrowDown") {
      tree.style.transform = "rotate(50deg)";
    }
    else if (event.key === "ArrowRight") {
        i=i+2
        let deg=i*Math.PI/180
        x=x0+300*Math.cos(deg)
        y=y0+300*Math.sin(deg)
        tree.style.left=x+'px'
        tree.style.top=y+'px'

    }
    else if (event.key === "ArrowLeft") {
        i=i-2
        let deg=i*Math.PI/180
        x=x0+300*Math.cos(deg)
        y=y0+300*Math.sin(deg)
        tree.style.left=x+'px'
        tree.style.top=y+'px'
    }
  });
  
  document.addEventListener("keyup", function(event) {
    var tree = document.getElementById("tree");
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      tree.style.transform = "rotate(0deg)";
    }
  });
  






  let score=0;
  function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left =  Math.random()*window.innerWidth /3+window.innerWidth/3+ "px";
  star.style.top = "0";
  document.body.appendChild(star);
  // 更新星星的位置
  function updateStarPosition() {
    const starTop = parseInt(star.style.top);
    star.style.top = starTop + "px";
    // 获取方块和星星的位置信息
    const box = document.getElementById("tree");
    const starRect = star.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    const moon = document.getElementById("moon");
    // 检测碰撞
    if (
      starRect.left < boxRect.right &&
      starRect.right > boxRect.left &&
      starRect.top < boxRect.bottom &&
      starRect.bottom > boxRect.top
    ) {
      // 星星和方块碰撞，移除星星
      document.body.removeChild(star);
      score++;
      updateCollisionCount();
      console.log(score);
      updatetreesize()
    } else if (starTop < window.innerHeight) {
      // 星星还没有移出屏幕底部，继续更新位置
      requestAnimationFrame(updateStarPosition);
    } else {
      // 星星移出屏幕底部，移除星星
      document.body.removeChild(star);
    }
  }
  // 启动星星的位置更新
  requestAnimationFrame(updateStarPosition);
}
starinter=setInterval(createStar, 1000);
// 更新碰撞次数显示
function updateCollisionCount() {
  const collisionCountElement = document.getElementById("collisionCount");
  collisionCountElement.textContent = "分数: " + score;
}
function updatetreesize(){
  if (score>10&&score<25){
    const box = document.getElementById("tree");
    box.style.height=15+'em'
    box.style.width=15+'em'
  }
  if (score>=25&&score<40){
    const box = document.getElementById("tree");
    box.style.height=20+'em'
    box.style.width=20+'em'
  }
  if(score>=40){
    clearInterval(starinter)
    const scene=document.getElementById("scene")
    scene.style.display="none"
    const end=document.getElementById("end-content")
    end.style.display="block"
    setInterval(textrain,200)
  }

}


const arr = new Array(60);
    for (const item of arr) {
      const dom = document.createElement('div');
      dom.className = 'blinkstar';
      dom.style.left = `${Math.random() * 100}vw`;
      dom.style.top = `${Math.random() * 100}vh`;
      setTimeout(() => {
        document.body.appendChild(dom);
      }, 10000 * Math.random());
    }



  function textrain() {
  const cloudEle = document.querySelector(".end");
  const text = document.createElement("div");

  text.innerText ='中秋快乐';
  text.classList.add("text2");

  const left = Math.random() *  Math.random()*window.innerWidth;
  const size = Math.random() * 1.5;
  const styleSheets = {
    left: `${left}px`,
    fontSize: `${0.5 + size}em`,
  };
  Object.assign(text.style, styleSheets);

  cloudEle.appendChild(text);
  setTimeout(() => {
    cloudEle.removeChild(text);
  }, 2000);
};
