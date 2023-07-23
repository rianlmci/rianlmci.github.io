function getScreenShot() {
    window.scrollTo(0,0);
    let div = document.getElementById('characterSheet');
    html2canvas(div).then(
        function (canvas) {
            var img = canvas.toDataURL();
            window.open(img);
    })
}

/*
These Jquery functions are horribly unoptimized because I'm new to JQuery.
Please don't lift this thinking the redundancy is required.
It's probably not.
Codes beyond this point were modified from https://stackoverflow.com/a/24265484.
 */

//CHARACTER PICTURE
$(document).ready(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#character-picture').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#characterFile").change(function(){
        readURL(this);
    });

    $("#character-picture").click(function () {
        $("#characterFile").click();
    });
});

//FROM LOCATION
$(document).ready(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#from-picture').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#fromLocFile").change(function(){
        readURL(this);
    });

    $("#from-picture").click(function () {
        $("#fromLocFile").click();
    });
});

//CURRENT LOCATION
$(document).ready(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#current-picture').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#currentLocFile").change(function(){
        readURL(this);
    });

    $("#current-picture").click(function () {
        $("#currentLocFile").click();
    });
});