"use strict"

function Movie(name, length, genre){
    this.name = name;
    this.length = parseInt(length);
    this.genre = genre;
}
Movie.prototype.getData = function () {
    let type = (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
    return this.name + ", " + this.length + "min, " + type;
}

let movie_1 = new Movie("Into the wild", 160, "drama")
let movie_2 = new Movie("Into the wild", 140, "drama")
//console.log(movie_1.getData())
/*
function Program(date,name, length,genre) {
    Movie.call(this, name,length,genre)
   
    this.date = date
    this.list_of_movies = []
}

Program.prototype.addMovie = function (movie) {
    this.list_of_movies.push(movie)
}

Program.prototype.lengthOfAllMovies = function () {
    let sum = 0;
    this.list_of_movies.forEach(function (movie) {
        sum += movie.length;
    })
    return sum;
}
Program.prototype.totalMoviesLength = function () {
    return this.list_of_movies.length;
}

Program.prototype.getDataProgram = function () {
   
     return this.date + ", " + this.totalMoviesLength() + " movies" + ", duration: " + this.lengthOfAllMovies() + "min" + "\n\t" 
}


let program_1 = new Program ("23/12/2023")
let program_2 = new Program ("23/12/2023")
program_1.addMovie(movie_1)
program_1.addMovie(movie_2)
console.log(program_1.list_of_movies)
console.log(program_1.getDataProgram())


function Festival () {
      this.list_of_all_movies = [];
      this.list_of_all_programs = [];
    };
  

  Festival.prototype.addMovies = function (movie) {
    return this.list_of_all_movies.push(movie)
}
  Festival.prototype.addPrograms = function (program) {
   return this.list_of_all_programs.push(program);
}

let festival_1 = new Festival ()
console.log(festival_1.addMovies(movie_1))
console.log(festival_1.addMovies(movie_2))
console.log(festival_1.addMovies(movie_1))
console.log(festival_1.addPrograms(program_1))
console.log(festival_1.addPrograms(program_1))
*/