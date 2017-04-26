$(function () {
    $('#side-menu').metisMenu();

    function addImageBtnPost() {
        $('#create-post .btnPicture').on('click', function () {
            $('#create-post input[type=file]').click();
        });
    }
    setTimeout(addImageBtnPost, 500);

    function addImageBtnPhoto() {
        $('#add-photo .btnPicture').on('click', function () {
            $('#add-photo input[type=file]').click();
        });
    }
    setTimeout(addImageBtnPhoto, 500);
    $(window).on('hashchange', function (e) {
        //execute code
        setTimeout(addImageBtnPhoto, 500);
        setTimeout(addImageBtnPost, 500);
    });
    function disablePostButton() {
        $("#create-post #btnCreatePost").attr("disabled", true);
        $("#create-post textarea[name=text]").on('input', function () {
            console.log($("#create-post #btnCreatePost"))
            var text = $("#create-post textarea[name=text]").val();
            if (text.length > 0) {
                $("#create-post #btnCreatePost").removeAttr("disabled");
            } else {
                $("#create-post #btnCreatePost").attr("disabled", true);;
            }
        });
    }
    setTimeout(disablePostButton, 500);


    $.get("/user", function (data) {
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        var username = $("#link-profile");
        username.text(capitalizeFirstLetter(data.fname) + " " + capitalizeFirstLetter(data.lname));
        // $("#side-menu> li >a")[0].append(img);
    });

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
    $(window).bind("load resize", function () {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function () {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});