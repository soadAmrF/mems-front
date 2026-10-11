
const inp = document.querySelector("input");
const but = document.querySelector("button");
const result = document.getElementById("result");

but.addEventListener("click", function () {
  let num = inp.value;

  if (num == "" || num < 0 || num > 99) {
    result.innerHTML = "Please Enter Valid Number";
  } else {
    fetch("https://api.imgflip.com/get_memes")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let memes = data.data.memes;

        result.innerHTML = `
          <h3 class="text-danger mb-3">${memes[num].name}</h3>
          <img src="${memes[num].url}" class="img-fluid rounded shadow">
        `;
      });
  }
});

inp.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    but.click();
  }
});
