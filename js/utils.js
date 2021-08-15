skillItemsPages = {
  android:
    "https://developer.android.com/training/basics/firstapp/creating-project",
  java: "https://docs.oracle.com/javase/tutorial/",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  html5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "node.js": "https://nodejs.org/en/",
  react: "https://reactjs.org/docs/getting-started.html",
  docker: "https://docs.docker.com/get-started/",
  git: "https://git-scm.com/doc",
};

const skillItems = $(".skill-item");
skillItems.click(function () {
  let skillName = this.childNodes[3].innerText.toLowerCase();
  window.open(skillItemsPages[skillName]);
});

const postDetails = () => {
  axios
    .post("https://folioback.darkman.tech/adduser", {
      name: $("#name").val(),
      mail: $("#mail").val(),
      subject: $("#subject").val(),
      content: $("#content").val(),
    })
    .then(function (response) {
      if (response.status === 200) {
        $("#exampleModal").modal("show");
      } else console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
};

$("#sendDetails").click(postDetails);
