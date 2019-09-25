let imageId = `3442` //Enter your assigned uuid here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = `https://randopic.herokuapp.com/likes/`  //This is post optimistic show
const commentsURL = `https://randopic.herokuapp.com/comments/` //this is also a post

document.addEventListener('DOMContentLoaded', function() {
  fetch(imageURL)
  .then(resp => resp.json())
  .then(resp => {
        showTitle(resp)
        showImage(resp)
        showCommentList(resp)
        showLike(resp)
  })
})

function showTitle(resp) {
    console.log("showTitle Called!")
    const title = document.getElementById('name')
    title.innerText = resp.name + " ..." + "Is fun to code"
}

function showImage(resp){
    console.log("showImage Called!")
    const image = document.querySelector("#image")
    image.setAttribute("src", resp.url)
}

function showCommentList(resp){
    console.log("showCommentList Called!")
    let form = document.querySelector("#comment_form")
    let ul = document.querySelector("#comments")
    resp.comments.forEach(function(comment){
      ul.append(showComment(comment))
    })

    // Comment Submission Logic:
    form.addEventListener("submit", e =>{
      console.log("Submitted the comment form!")
      e.preventDefault()
      let com_value = e.target.querySelector("#comment_input")
      postComment(resp, com_value.value).then(resp => {
        ul.append(showComment(resp))
      })
      com_value.value = ""
    })
  }
  
  function showComment(comment){
    console.log("showComment was called!")
    let li = document.createElement("li")
    li.innerHTML = `${comment.content} <button>Delete</button>`
    let deleteButton = li.querySelector("button")
    // Delete Comment Logic:
    deleteButton.addEventListener("click",()=>{
      li.parentElement.removeChild(li)
    // Logic for the backend routed to this function:
      deleteCommentBackend(comment)
    })
    return li
  }


function deleteCommentBackend(resp){
    console.log("deleteCommentBackend was called!")
    return fetch(`${commentsURL}/${resp.id}`, {
      method: "DELETE"
    }).then(response => response.json());
  }

function showLike(resp){
  console.log("showLike was called!")
  let likeButton = document.querySelector("#like_button")
  let like = document.querySelector("#likes")
  like.innerHTML = resp.like_count

  likeButton.addEventListener("click",function(){
    like.innerHTML = parseInt(like.innerHTML) + 1;
    // Backend Logic routed to function:
    postLike(resp.id);
  })
}

function postLike(resp){
    console.log("postLike was called!")
    return fetch(likeURL, {
      method: "POST",
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body: JSON.stringify(getLike(resp)),
    })
    .then(response => response.json());
  }

function getLike(resp){
return{
    'image_id': resp
    }
}


function getComment(resp, content){
  return{
    'image_id': resp.id,
    'content': content
  }
}

function postComment(resp, content){
  return fetch(commentsURL, {
    method: "POST",
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    },
    body: JSON.stringify(getComment(resp, content)),
  }).then(response => response.json());
}





