function replaceContentsOfElement() {
  let proverbs = [
    {
      proverb: "枯れ木も山の賑わい",
      translate:
        "Карэки мо яма но нигивай Даже увядшие деревья оживляют гору (лучше гора с деревьями, чем голая). = Лучше синица в руке, чем журавль в небе.",
    },
    {
      proverb: "知らぬが仏",
      translate:
        "[Сирану га хотокэ]\nНевежество — блаженство. = Меньше знаешь, крепче спишь.",
    },
    {
      proverb: "朱に交われば赤くなる",
      translate:
        "[Сю ни мадзиварэба акаку нару]" +
        "\n" +
        "Если смешать с красными чернилами, все станет красным. — Эта фраза используется с негативным оттенком. Так говорят, например, детям, чтобы они не дружили с плохой компанией.",
    },
    {
      proverb: "他人の飯を食う",
      translate:
        "[Танин но мэси о куу]" +
        "\n" +
        "Есть пищу странника. — О ком-то, кто покинул дом и терпит лишения.",
    },
    {
      proverb: "備えあれば憂いなし",
      translate:
        "[Сонаэ арэба урэи наси]" +
        "\n" +
        "Если готов, то не о чем волноваться. = Предупрежден — значит, вооружен.",
    },
  ];

  let number = Math.trunc(Math.random() * (6 - 0) + 0);
  // document.getElementById("top").textContent = proverbs[number].translate;
  //document.querySelector(".hover-text").textContent = proverbs[number].proverb;
  document.getElementById("top").textContent = proverbs[number].translate;
  let pos = (document.querySelector(".tooltip").textContent =
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
