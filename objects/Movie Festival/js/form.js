let create_movie = document.getElementById("create_movie")
let create_program = document.getElementById("create_program")

create_movie.addEventListener("click", createMovie)
create_program.addEventListener("click", createProgram)



function createMovie(e) {
    e.preventDefault()
    //form data
    let title = document.getElementById("title").value
    let lenght = document.getElementById("lenght").value
    let select_movie = document.querySelector("#select_movie").value
   
//function that checks data entry
if(!title || !lenght ||  !select_movie){
    alert("Please fill all the boxes")
        return false 
} 

let movie_1 = new Movie(title, lenght, select_movie)
//let movie_2 = new Movie(title, lenght, select_movie)

//creating a movie list
let li = document.createElement("li")
li.innerHTML = movie_1.getData()
list_of_movies.appendChild(li)


}


/*
function createProgram(e) {
    e.preventDefault()

    //form date   
    let list_of_movies = document.getElementById("list_of_movies")
    let date = document.getElementById("date").value
    let list_of_programs = document.getElementById("list_of_programs")


let movie_1 = new Movie(title, lenght, select_movie)
let movie_2 = new Movie(title, lenght, select_movie)



let program_1 = new Program (date)
program_1.addMovie(movie_1)
program_1.addMovie(movie_2)

let festival = new Festival();

festival.addPrograms(program_1);
 

let li_movies = document.createElement("li")
li_movies.innerText = program_1.getDataProgram(); 
list_of_programs.appendChild(li_movies)

    
}
*/