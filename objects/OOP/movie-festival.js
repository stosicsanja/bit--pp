"use strict"

function Genre(name) {
    this.name = name
}
Genre.prototype.getData = function () {
   return this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase()
}



function Movie(title, length, genre) {
    this.title = title
    this.length = length
    this.genre = genre
}
Movie.prototype.getData = function () {
    return this.title + ", "  + this.length + ", "  + this.genre.getData()
 }
 
 

function Program(date) {
    this.date = date
    this.list_of_movies = []
}
Program.prototype.addMovie = function (movie) {
    this.list_of_movies.push(movie)
    
}
Program.prototype.getData = function () {
    let program_length = 0;
    let movie_data = "";
 
    this.list_of_movies.forEach(function(movie) {
        program_length += movie.length 
       movie_data += movie.getData() + "\n\t"
    })
    
    //return this.date  + ", program length " + program_length + " from all " + this.list_of_movies.length + " movies "  + "\n\t"
     //+movie_data

     return this.date  + ", program duration " + program_length + "min" + "\n\t"
     +movie_data
}



function Festival(name ) {
    this.name = name
    this.list_of_programs = []
    this.total_number_of_all_programs = 0
}
Festival.prototype.addProgram = function (program) {
    this.list_of_programs.push(program)
    this.total_number_of_all_programs = program.total_number_of_all_programs
}

Festival.prototype.getData = function () {
    let movie_data = 0
    let programs_data = ""
 
    this.list_of_programs.forEach(function(program) {
       programs_data += program.getData()
       movie_data += program.list_of_movies.length 
    })
    return this.name + " has "  + movie_data + " movie titles" + "\n\t"
    + programs_data
}

function createMovie(title, length, genre) {
    let genreObject = new Genre(genre);
    return new Movie(title, genreObject, length);
}

function createProgram(date) {
    return new Program(date);
}

let genre_1 = new Genre("Action");
let genre_2 = new Genre("Action");
console.log(genre_1.getData())

let movie_1 = new Movie("The Shawshank Redemption", 130 , genre_1);
let movie_2 = new Movie("The Shawshank Redemption", 130 , genre_1);
let movie_3 = new Movie("The Shawshank Redemption", 130 , genre_1);
let movie_4 = new Movie("The Shawshank Redemption", 130 , genre_2);
console.log(movie_1.getData())

let program_1 = new Program("22/12/2023")
let program_2 = new Program("23/12/2023")
program_1.addMovie (movie_1)
program_1.addMovie (movie_2)
program_1.addMovie (movie_3)
program_2.addMovie (movie_4)
//console.log(program_2.list_of_movies)
//console.log(program_2.getData())

let festival_1 = new Festival("Weekend festival")
festival_1.addProgram(program_1)
festival_1.addProgram(program_2)


console.log(festival_1.getData())


