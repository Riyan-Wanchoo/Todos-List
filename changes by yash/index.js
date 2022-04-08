console.log("Welcome to My Todo's List Created by Riyan Wanchoo")
shownotes()
checkimpo()
checkdone()

var input = document.getElementById("inpTodo")
input.addEventListener("keyup", function(event) {
   if (event.keyCode == 13) {
	event.preventDefault()
	document.getElementById('save').click()
   }
})
function saveTodo() {
   //Some code here
   var regEx = /^[0-9a-zA-Z]+$/
   let inpTodo = document.getElementById("inpTodo")
   let alrsavedTodo = localStorage.getItem("notes")
   if (inpTodo.value == "") {
      alert("Your Todo cannot be blank")
      inpTodo.value = ""
   }
   else if(JSON.stringify(localStorage.getItem("notes")).includes(inpTodo.value)) {
      alert("This Todo already exists")
      inpTodo.value = ""
   }
   else{
      if (alrsavedTodo == null) {
         notesObj = []
      }
      else {
         notesObj = JSON.parse(alrsavedTodo)
      }
      notesObj.push(inpTodo.value)
      localStorage.setItem("notes", JSON.stringify(notesObj))
      inpTodo.value = ""
      shownotes()
      console.log("Saved Successfully")
   }
   }


function deleteall() {
   // let content = JSON.parse(localStorage.getItem("notes"))
   // content = []
   // localStorage.setItem("notes", JSON.stringify(content))
   alert = confirm("Are you sure, you want you delete all of your Todo's?")
   if (alert==true) {
      localStorage.clear()
      document.getElementById('tc').innerHTML = "<p style='font-size:24px;'>There are no Todo's to display</p>"
      let inpTodo = document.getElementById("inpTodo")
      inpTodo.value = ""
   }
   else {
      //Then do nothin :)
      let inpTodo = document.getElementById("inpTodo")
      inpTodo.value = ""
      //joking :L
   }
   
}

function deleteTodo(index) {
   let notes = localStorage.getItem("notes")
   if (notes == null) {
      notesObj = []
   }
   else {
      notesObj = JSON.parse(notes)
   }

   notesObj.splice(index, 1)
   localStorage.setItem("notes", JSON.stringify(notesObj))
   shownotes()
}

function shownotes() {
   let notesObj = []
   var html = ""
   if (localStorage.getItem("notes") == null) {
      notesObj = []
      document.getElementById('tc').innerHTML = "<p style='font-size:24px;'>There are no Todo's to display</p>"
   }
   else {
      notesObj = JSON.parse(localStorage.getItem("notes"))
      notesObj.forEach(element => {
         let index = notesObj.indexOf(element)
         if (index == 0) {
            html = `
         <div class="card" style="width: 17.5rem;">
            <div class="card-body">
              <h5 class="card-title">Todo - ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <div class="foot">
                <button type="button" class="btn" onclick="deleteTodo(${index})">Delete Todo</button>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" style="cursor:pointer;margin-top: 34px;margin-left: 85px;" width="20" height="20" fill="black" class="bi bi-info-circle" viewBox="0 0 16 16" onclick="important(${index})">
                  <title>Mark as important</title>
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="done" style="margin-top: 34px;margin-left: 11px;cursor:pointer" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" onclick="done(${index})">
                  <title>Mark as done</title>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
            </div>
          </div>
         `
         }
         else {
            html = html + `
            <div class="card" style="width: 17.5rem;">
            <div class="card-body">
              <h5 class="card-title">Todo - ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <div class="foot">
                <button type="button" class="btn" onclick="deleteTodo(${index})">Delete Todo</button>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" style="cursor:pointer;margin-top: 34px;margin-left: 85px;" width="20" height="20" fill="black" class="bi bi-info-circle" viewBox="0 0 16 16" onclick="important(${index})">
                  <title>Mark as important</title>
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="done" style="margin-top: 34px;margin-left: 11px;cursor:pointer" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" onclick="done(${index})">
                  <title>Mark as done</title>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
            </div>
          </div>
          `
         }
   
         let TodoContainer = document.getElementById('tc').innerHTML
         document.getElementById('tc').innerHTML = html
      });
   }
}

let Search = document.getElementById("search")

Search.addEventListener("input", function(){
   let inpVal = Search.value.toLowerCase()
   // let notes = localStorage.getItem("notes")
   let noteCards = document.getElementsByClassName("card")

   Array.from(noteCards).forEach(element => {
      cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase()
      if (cardTxt.includes(inpVal)) {
         element.style.display = "block"
      }
      else {
         element.style.display = "none"
      }
   });

})

function important(index) {
   let svg = document.getElementsByClassName('svg')[index]
   let card = document.getElementsByClassName('card')[index]
   let important
   if (JSON.parse(localStorage.getItem("important")) == null) {
      important = []
   }
   else {
      important = JSON.parse(localStorage.getItem("important"))
   }

   if (svg.style.fill == "black") {
      svg.style.fill = "red"
      card.style.backgroundColor = "#f7a7a7"
      important.push(index)
      localStorage.setItem("important", JSON.stringify(important))
   }
   else if(svg.style.fill == "red"){
      svg.style.fill = "black"
      card.style.backgroundColor = "white"
      let number = important.indexOf(index)
      important.splice(number, 1)
      localStorage.setItem("important", JSON.stringify(important))
   }
   else {
      svg.style.fill = "red"
      card.style.backgroundColor = "#f7a7a7"
      important.push(index)
      localStorage.setItem("important", JSON.stringify(important))
   }
}

function checkimpo() {
   let important = JSON.parse(localStorage.getItem("important"))
   if (important == null) {
      //Then do nothing :)
   }
   else {
      important.forEach(element => {
         let svg = document.getElementsByClassName("svg")[element]
         let card = document.getElementsByClassName('card')[element]
         svg.style.fill = "red"
         card.style.backgroundColor = "#f7a7a7"
      });
   }
}

function done(index) {
   let svg = document.getElementsByClassName('done')[index]
   let card = document.getElementsByClassName('card')[index]
   let done
   if (JSON.parse(localStorage.getItem("done")) == null) {
      done = []
   }
   else {
      done = JSON.parse(localStorage.getItem("done"))
   }

   if (svg.style.fill == "black") {
      svg.style.fill = "green"
      card.style.backgroundColor = "#10e54d"
      done.push(index)
      localStorage.setItem("done", JSON.stringify(done))
   }
   else if(svg.style.fill == "green"){
      svg.style.fill = "black"
      card.style.backgroundColor = "white"
      let number = done.indexOf(index)
      done.splice(number, 1)
      localStorage.setItem("done", JSON.stringify(done))
   }
   else {
      svg.style.fill = "green"
      card.style.backgroundColor = "#10e54d"
      done.push(index)
      localStorage.setItem("done", JSON.stringify(done))
   }
}

function checkdone() {
   let done = JSON.parse(localStorage.getItem("done"))
   if (done == null) {
      //Then do nothing :)
   }
   else {
      done.forEach(element => {
         let svg = document.getElementsByClassName("done")[element]
         let card = document.getElementsByClassName('card')[element]
         console.log(element)
         svg.style.fill = "green"
         card.style.backgroundColor = "#10e54d"
      });
   }
}