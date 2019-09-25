let imageId = 3465; //Enter the id from the fetched image here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

const likeURL = `https://randopic.herokuapp.com/likes/`;

const commentsURL = `https://randopic.herokuapp.com/comments/`;

const likeBTN = document.getElementById("like_button");

const likeCOUNT = document.getElementById("likes");

const commentsLIST = document.getElementById("comments");
const commentsVALUE = document.getElementById("comment_input");
const commentsBTN = document.getElementById("submit");

let globalSon = new Object();

async function getPic() {
  const response = await fetch(imageURL);
  const picSon = await response.json();
  displayPic(picSon);
  globalSon = picSon;
}

function displayPic(picSon) {
  const imgTAG = document.getElementById("image");
  imgTAG.setAttribute("src", picSon.url);

  const imgNAME = document.getElementById("name");
  imgNAME.innerText = picSon.name;

  const imgLIKES = document.getElementById("likes");
  imgLIKES.innerText = picSon.like_count;

  const imgCOMMENTS = document.getElementById("comments");

  for (let i = 0; i < picSon.comments.length; i++) {
    let imgLI = document.createElement("li");
    let deleteBTN = document.createElement("button");
    deleteBTN.setAttribute("class", "delete");
    deleteBTN.innerHTML = "Delete";
    deleteBTN.addEventListener("click", function(e) {
      e.preventDefault();
      this.parentElement.remove();
      // const response = await fetch(commentsURL, {
      //   method: "delete",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   },
      //   body: JSON.stringify({
      //     image_id: imageId,
      //     content: newComment.innerText
      //   })
      // });
    });
    imgLI.innerText = picSon.comments[i].content;
    imgLI.appendChild(deleteBTN);
    imgCOMMENTS.appendChild(imgLI);
  }
}

async function likePic() {
  let likes = parseInt(likeCOUNT.innerText);
  likeCOUNT.innerText = likes += 1;
  const response = await fetch(likeURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      image_id: imageId,
      like_count: likes
    })
  });
}

async function addComment() {
  // commentsLIST.lastChild.remove();
  let newComment = document.createElement("li");
  newComment.innerText = commentsVALUE.value;
  let deleteBTN = document.createElement("button");
  deleteBTN.setAttribute("class", "delete");
  deleteBTN.innerHTML = "Delete";
  deleteBTN.addEventListener("click", function(e) {
    e.preventDefault();
    this.parentElement.remove();
  });
  newComment.appendChild(deleteBTN);
  commentsLIST.appendChild(newComment);
  commentsVALUE.value = "Add Comment";
  const response = await fetch(commentsURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      image_id: imageId,
      content: newComment.innerText
    })
  });
}

document.addEventListener("DOMContentLoaded", getPic);
likeBTN.addEventListener("click", likePic);
commentsBTN.addEventListener("click", function(e) {
  e.preventDefault();
  addComment();
});
