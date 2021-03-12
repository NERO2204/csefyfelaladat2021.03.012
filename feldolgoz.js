$(function()
{

 $("#beolvas").on("click",beolvas);
 $("#kuld").on("click",abBeir);


});

var telefonkonyvem=[];

function kiir()
{
 



    $("article").empty();
    
    for (var i = 0; i <telefonkonyvem.length; i++)
    {
        var nev=telefonkonyvem[i].nev;
        var tel=telefonkonyvem[i].tel;
        var kep=telefonkonyvem[i].kep;
        var id=telefonkonyvem[i].ID;
        var elem="<div> <h2>"+nev+"</h2><p>"+tel+"</p><p>"+kep+"</p><button class='torol' id='"+id+"'>Töröl</button></div>";
        $("article").append(elem);
    }   $("article").delegate(".torol","click",adTorol);
    
    
    

    
    
    
    
}

function adTorol()
{
    console.log("torles");
    var aktelem=$(this).closest("div");
    var id=$(this).attr("id");

        $.ajax({
         type:"DELETE",
         url: "torles.php?ID=" + id,
         success: function(result)
         {
            console.log("torlom");
            aktelem.remove();
            
   
   
  
   
           
         },
         error:function(){alert("Hiba az datok torlesekor");}
  });
    
    
    
     
}

function beolvas()
{
    
     $.ajax({
         type:"GET",
         url: "feldolgoz.php",
         success: function(result)
         {
   
    telefonkonyvem=JSON.parse(result);
  
   
            kiir();
         },
         error:function(){alert("Hiba az datok betoltesekor");}
  });
}
function abBeir()
{
    //kiolvassuk az urlaprol az adatokat
    //elkuldjuk a beirr php nak
    
    var szemely=
            {
                nev:$("#nev").val(),
                tel:$("#tel").val(),
                nev:$("#nev").val()
            };
            
             $.ajax({
         type:"POST",
         url: "beir.php",
         data:szemely,
         success: function(ujszemely)
         {
             console.log(ujszemely);
   
    telefonkonyvem.push(JSON.parse(ujszemely));
  
   
            kiir();
         },
         error:function(){alert("Hiba az datok betoltesekor");}
  });
            
            
    
    
    
    
}

