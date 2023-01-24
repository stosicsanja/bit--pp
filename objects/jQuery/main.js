$(function() {
    console.log("Hii")
})

//Selecting

$("nav>ul:first-child").addClass("myClass")

$("nav").css( "text-transform", "uppercase")

$("#active").css( "color", "red")

$("nav").find( ":nth-child(3)" ).css( "background-color", "red" );

//Inserting elements

$(".gallery>div").each(function( index, element ) {
    // element == this
    console.log($(element).css( "width"));
    
    if ( $( element ).css( "width")<"200px" ) {
    $( element ).css("border", "3px solid green")

    return false
    }
    
    });

   // Event Handling

$("#field").click((function(event){
    let x = event.pageX 
    let y = event.pageY 
    $("#player").css({left: x}).css({top: y});
   
 
 }))


 $("#stop-move").click(function(){
    $("#field").off("click")
 })


 //Traverse (Redo Gallery)

 $(".galleries>div>img").each(function( index, element ) {

   // if ( $( element ).hasClass( "selected" )) {
   //    return $( element ).removeClass("selected")
   // }

    $(".selected").parent("div:first").siblings().children().eq(1).addClass("selected")
   // $(".galleryTwo>img:nth-child(even)").addClass("selected")

 })

 
