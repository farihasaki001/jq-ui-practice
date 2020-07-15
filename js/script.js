
$(document).ready(function(){
  $( "#draggable" ).draggable(1000);

});

$( function() {
    $( "#draggable1" ).draggable();
    $( "#droppable1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
 $( function() {
    $( "#resizable" ).resizable();
  } );

$( function() {
    $( "#selectable" ).selectable();
  } );

 $( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );


