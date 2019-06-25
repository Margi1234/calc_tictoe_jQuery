function insert(num)
{
    
    //document.form.textview.value= document.form.textview.value+num; 
    $("#textview").val($("#textview").val()+num);
    
}
function equal()
{
    /*var exp=document.form.textview.value;
    if(exp){
        document.form2.textview2.value=eval(exp);
    }*/
    var exp= $("#textview").val();
    if(exp){
        $("#textview2").val(eval(exp));
    }

}
function clean(){
    /*document.form.textview.value="";
    document.form2.textview2.value="";*/
    $("#textview").val("");
    $("#textview2").val("");
}
function back()
{
    /*var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);*/
    var exp=  $("#textview").val();
    $("#textview").val(exp.substring(0,exp.length-1));
}