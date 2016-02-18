$.ajax({
    url: "http://www.fvi-grad.com:4004/quote",
    success: function(resp,textStatus, jqxhr){
        $("#quote").html (resp.quote);
        $("#author").html (resp.author);
    },
    method: "get"
});

$("button").click (function(){$.ajax({
    url: "http://www.fvi-grad.com:4004/quote",
    success: function(resp,textStatus, jqxhr){
        $("#quote").html (resp.quote);
        $("#author").html (resp.author);
    },
    method: "get"
    });
});