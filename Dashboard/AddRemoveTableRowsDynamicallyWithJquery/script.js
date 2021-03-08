$(function(){
    $(".add-row").click(function(){
        var temp = $("#name").val();
        var data = "<tr><td><input type='checkbox' name='record'></td>";
        data += "<td>" + temp + "</td></tr>";
        $("table").append(data);
    });
    $('.delete-row').click(function(){
        $('input:checkbox:checked').parents("tr").remove();
    });  
});