document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3463 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

})

fetch('https://randopic.herokuapp.com/images/3463')
.then(function(response){
    return response.json()
}) // closes the first then
.then(function(personals){
  // debugger
  for (var key in personals){ // i dont know how to bring out the information
    console.log(key);} // i know forEach not for
   //continuing as if it work

       const imagePlacement = document.querySelector('#image_card')
       imagePlacement.append(personals.url)

        const imageNamePlacement = document.querySelector("#name")
        imageNamePlacement.append(personals.name)
        

        const likePlacement = document.querySelector("#likes")
        likePlacement.append(personals.like_count)
        

        const commentPlacement = document.querySelector("#comment_form")
        commentPlacement
        
 
    }) //closes the for each

    
   // closes the second then