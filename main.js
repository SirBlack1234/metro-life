$(function(){
    var line;
    $('img').click(function() {
            line = null;
            console.log('hey')
            line = $(this).attr("alt"); //get train class
            $(".train-status-inner").empty();
            event.preventDefault();
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/getStatus",
                data: {line: line},
                success: function(data) {
                    // console.log(data);
                    // console.log(line);
                    $(".train-name").text(data["name"]);
                    $(".train-status-inner").append(data["text"]);
                },
                error: console.error
            });
    });
});
