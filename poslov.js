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
        "[Сирану га хотокэ] Невежество — блаженство. = Меньше знаешь, крепче спишь.",
    },
    {
      proverb: "朱に交われば赤くなる",
      translate:
        "[Сю ни мадзиварэба акаку нару]  Если смешать с красными чернилами, все станет красным. — Эта фраза используется с негативным оттенком. Так говорят, например, детям, чтобы они не дружили с плохой компанией.",
    },
    {
      proverb: "他人の飯を食う",
      translate:
        "[Танин но мэси о куу] Есть пищу странника. — О ком-то, кто покинул дом и терпит лишения.",
    },
    {
      proverb: "備えあれば憂いなし",
      translate:
        "[Сонаэ арэба урэи наси] Если готов, то не о чем волноваться. = Предупрежден — значит, вооружен.",
    },
  ];

  let number = Math.trunc(Math.random() * (6 - 0) + 0);
  let sp = document.getElementById("top");
  txt = document.createTextNode(proverbs[number].translate);
  sp.appendChild(txt);
  //document.getElementById("top").innerText = proverbs[number].translate;
  //document.getElementById("#top").innerText = proverbs[number].translate;
  document.querySelector(".hover-text").textContent = proverbs[number].proverb;
}

// 2000 - 2 секунды
// 1 минута 60 секунд -> 60000
// 1 час 60 минут -> 3 600 000
setInterval(replaceContentsOfElement, 10000);
