function replaceContentsOfElement() {
  let proverbs = [
    {
      proverb: "急がば回れ<br/>[いそがばまわれ]",
      translate: "Если торопишься, обходи = Тише едешь - дальше будешь",
    },
    {
      proverb: "案ずるより産むが易し<br/>[あんずるよりうむがやすし]",
      translate:
        "Легче родить, чем волноваться (о том, как это будет) = Не так страшен черт, как его малюют",
    },
    // {
    // proverb: "頭隠して尻隠さず<br/>[あたまかくしてはしりかくさず]",
    // translate: "Пряча голову, не спрячешь зада"
    //},
    {
      proverb: "後は野となれ山となれ<br/>[あとはのとなれやまとなれ]",
      translate: "А после будь то поля, будь то горы = Будь что будет",
    },
    {
      proverb: "嘘も方便<br/>[うそもほうべん]",
      translate: "Ложь тоже средство (целесообразна) = Ложь во благо",
    },
    {
      proverb: "噂をすれば影<br/>[うわさをすればかげ]",
      translate: "Если о ком-то говорить, то он появится = Легок на помине",
    },
    {
      proverb: "犬猿の仲<br/>[けんえんのなか]",
      translate: "(Как) отношения кошки и обезьяны = Как кошка с собакой",
    },
    //{
    //  proverb: "必要は発明の母<br/>[ひつようははつめいのはは]",
    // translate:
    //    "Необходимость-мать изобретений                   "
    // },
  ];

  let number = Math.trunc(Math.random() * (8 - 0) + 0);
  // document.getElementById("top").textContent = proverbs[number].translate;
  //document.querySelector(".hover-text").textContent = proverbs[number].proverb;
  document.getElementById("top").innerHTML = proverbs[number].translate;
  let pos = (document.querySelector(".tooltip").innerHTML =
    proverbs[number].proverb);
  pos.setAttribute("data-title", proverbs[number].translate);
}

//в таком состояние работает так что меняется подсказка и меняется текст у другого блока

//document.getElementById("top").textContent = proverbs[number].translate;
//let pos = (document.querySelector(".tooltip").textContent =
//  proverbs[number].proverb);

//document
//    .querySelector("tooltip")
//    .setAttribute("data-title", proverbs[number].translate);
//document.querySelector(".tooltiptext").textContent =
//proverbs[number].translate;
//  document.querySelector(".tooltiptext").textContent =
//   proverbs[number].translate;
//  document.querySelector(".hover-text").textContent = proverbs[number].proverb;
//  document.querySelector(".tooltip").textContent = proverbs[number].proverb;

// 2000 - 2 секунды
// 1 минута 60 секунд -> 60000
// 1 час 60 минут -> 3 600 000
setInterval(replaceContentsOfElement, 5000);
