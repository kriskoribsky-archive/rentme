// JQuery
(function($) {

    // Description hover pop-ups
    var emblems = $('.emblem')
        popUps = $('.pop-up')
        popUpDict = {}

    // chain emblems to their respective pop-up window
    $.each(emblems, function(i, emblem) {
        $.each(popUps, function(ii, popUp) {
            if (emblem.className.trim().split(" ").some(element => popUp.className.includes(element))) {
                popUpDict[emblem.className] = popUp
                return
            }
        })
    })
    
    console.log(popUpDict)


    function onEntry() {

        var emblem = $ ( this )

        // calculate dimensions (for arrow display)

        var popUp = $(popUpDict[emblem.attr('class')])
            popUpClr = popUp.css('backgroundColor')
            triangle = popUp.children('.triangle')

            y = popUp.outerHeight()
            x = emblem.position().left - emblem.parent().position().left + emblem.width()/2 - triangle.width()/2
   
        // display popUp
        popUp.show()

        // display popUp's triangle
        // popUp.children('.triangle').css({'top': height.toString(), 'left': middle.toString(), 'borderLeftColor': popUpClr})
        triangle.css({'top': y.toString() + 'px', 'left': x.toString() + 'px', 'border-top-color': popUpClr})

    }

    emblems.hover(onEntry,
        function(){

        popUpDict[$ ( this ).attr('class')].style.display = "none"

    })


}) (jQuery)


