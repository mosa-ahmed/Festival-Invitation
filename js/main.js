$(function(){

    // SideNavbar ---------------------------->
    $('.openNav').click(function(){
        $('#leftmenu').animate({width:'250px'},50)
        $('#home-content').animate({marginLeft:'250px'},50)
    })

    $('.closebtn').click(function(){
        $('#leftmenu').animate({width:'0'},50)
        $('#home-content').animate({marginLeft:'0'},50)
    })

    $(document).click(function(){
        if($('#leftmenu').css('width') == '250px'){
            $('#leftmenu').animate({width:'0'},50)
            $('#home-content').animate({marginLeft:'0'},50)
        }
    })
    
    // Animate Window ------------------------->
    $('#leftmenu a').click(function(){
        let targetSection = $(this).attr('href')
        let sectionOffset = $(targetSection).offset().top
        console.log(sectionOffset);
        $("html , body").animate({scrollTop:sectionOffset},2000)
    })

    // Accordion ------------------------------>
    $('.toggle').click(function(){
        $('.inner').not($(this).next()).slideUp()
        $(this).next().slideToggle()
    })

    // Timing ---------------------------------->
    function counter(){
        let futureDate = new Date('15 september 2023').getTime()/1000
        let currentDate = new Date().getTime()/1000
        console.log(futureDate);
        console.log(currentDate);
    
        let timeDifference = futureDate - currentDate
        console.log(timeDifference);
    
        let days = Math.floor(timeDifference / (3600*24))
        console.log(days);
        let hours = Math.floor((timeDifference - (days * 24 * 3600)) / 3600)
        console.log(hours);
        let minutes = Math.floor((((timeDifference - (days * 24 * 3600)) / 3600) * 60) - (hours * 60))
        console.log(minutes);
        let seconds = Math.floor(((((((timeDifference - (days * 24 * 3600)) / 3600) * 60) - (hours * 60)) * 60) - (minutes * 60)))
        console.log((seconds));


        $('.days').html(days + ' d')
        $('.hours').html(hours + ' h')
        $('.minutes').html(minutes + ' m')
        $('.seconds').html(seconds + ' s')
    }
    counter()

    setInterval(function(){
        counter()
    },1000)

    // Textarea ------------------------------------>
    $('textarea').keyup(function(){
        let remainingChars = $(this).attr('maxLength') - $(this).val().length
        if(remainingChars <= 0){
            $("#chars").text("your available characters finished");
        }
        else{
            $("#chars").text(remainingChars + ' remaining characters')
        }
    })
})