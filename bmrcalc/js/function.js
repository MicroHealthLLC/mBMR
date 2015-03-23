function showhidescr(divid)
{
    if(divid == 'standard')
    {
        $("#metricscr").hide();
        $("#standardscr").show();
        $("#stdanc").addClass("active");
        $("#metanc").removeClass("active");
    }
    else
    {
        $("#metricscr").show();
        $("#standardscr").hide();
        $("#stdanc").removeClass("active");
        $("#metanc").addClass("active");
    }
}
function calculatebmr(divid)
{
    if(divid == 'standard')
    {
        var weightinkg = $("#weightlbs").val() * 0.453592;
        var totalheightinch = ($("#heightft").val()*12)+parseInt($("#heightinch").val());
        var heightcm = totalheightinch * 2.54;
        var age = $("#agestd").val();
        if($("#genderstd").val() == "Male")
        {
            var bmr = (88.362 + (13.397 * weightinkg) + (4.799 * heightcm) - (5.677 * age)).toFixed(2);
        }
        else
        {
            var bmr = (447.593 + (9.247 * weightinkg) + (3.098 * heightcm) - (4.330 * age)).toFixed(2);
        }
        var dailycal = ($("#actlvlstd").val() * bmr).toFixed(2);
        $("#bmrstnd").val(bmr);
        $("#dailycalstnd").val(dailycal);
    }
    else
    {
        var heightcm = $("#heightcm").val();
        var weightinkg = $("#weightkg").val();
        var age = $("#agemet").val();
        
        if($("#gendermet").val() == "Male")
        {
            var bmr = (88.362 + (13.397 * weightinkg) + (4.799 * heightcm) - (5.677 * age)).toFixed(2);
        }
        else
        {
            var bmr = (447.593 + (9.247 * weightinkg) + (3.098 * heightcm) - (4.330 * age)).toFixed(2);
        }
        
        var dailycal = ($("#actlvlmet").val() * bmr).toFixed(2);
        $("#bmrmet").val(bmr);
        $("#dailycalmet").val(dailycal);
    }
}

$(document).ready(function(){
    $("#stdanc").click(function(){
        showhidescr('standard');
    })

    $("#metanc").click(function(){
        showhidescr('metric');
    })

    $("#btncalc").click(function(){
        calculatebmr('standard');
    })

    $("#btncalc1").click(function(){
        calculatebmr('metric');
    })
})