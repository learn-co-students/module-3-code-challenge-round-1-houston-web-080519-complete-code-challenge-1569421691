document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3464

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const commentForm = document.getElementById("comment_form")

  function getImage(){
    fetch(imageURL)
    .then(resp => resp.json())
    .then(image => addImageToPage(image))
  }

  function getAllComments(){
    fetch(imageURL)
    .then(resp => resp.json())
    .then(image => showComments(image))
  }

 function showComments(image) {
   image.comments.forEach(comment => {
     console.log(comment)
    var allComments = document.getElementById('comments')
    var newCommentLi = document.createElement('li');
    var commentDeleteBtn = document.createElement('button');
    commentDeleteBtn.innerText = "Delete";

    commentDeleteBtn.addEventListener('click', function(e){
      newCommentLi.remove()
      commentDeleteBtn.remove()
      removeCommentFromBackEnd(comment)
    })
    newCommentLi.innerText = comment.content;
    newCommentLi.append(commentDeleteBtn);
    allComments.append(newCommentLi);
   })
 }

 function removeCommentFromBackEnd(comment){
  fetch('https://randopic.herokuapp.com/comments/' + `${comment.id}`, {
    method: "DELETE",
  })
  .then(resp => resp.json())
 }


  function addImageToPage(image) {
    var imgTag = document.getElementById("image");
    imgTag.setAttribute('src', image.url)
  
    var imgTitle = document.getElementById('name');
    imgTitle.innerText = image.name;
  
    var imgLikes = document.getElementById('likes');
    imgLikes.innerText = image.like_count;
  
    var imgLikeBtn = document.getElementById('like_button');
    imgLikeBtn.addEventListener('click', function(e){
      addLikesToImageFrontEnd(image, imgLikes)
      addLikesToImageBackEnd(image)
    })
    commentForm.addEventListener('submit', function(e){
      e.preventDefault()
      addCommentToPageFrontEnd(e.target, image)
      addCommentToPageBackEnd(e.target, image)
    })

  }
  function addLikesToImageFrontEnd(image, imgLikes) {
    image.like_count += 1;
    imgLikes.innerText = image.like_count;
  }

  function addLikesToImageBackEnd(image) {
    fetch('https://randopic.herokuapp.com/likes', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: image.id
        })
      })
  }

  function addCommentToPageFrontEnd(data, image) {
    var allComments = document.getElementById('comments')
    var newCommentLi = document.createElement('li');
    newCommentLi.innerText = data.comment.value
    allComments.append(newCommentLi);
  }

  function addCommentToPageBackEnd(data, image) {
    fetch('https://randopic.herokuapp.com/comments', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: image.id,
        content: data.comment.value
      })
    })
  }


    getImage()
    getAllComments()
})
