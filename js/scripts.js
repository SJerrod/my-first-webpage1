let familyStuff = [];

// User Logic
$(document).ready(function() {
  $("#question").submit(function(event) {
    event.preventDefault();
    const activities = $("select#activities").val();
    const location = $("select#location").val();
    const animal = $("input#animal").val();
    familyStuff.push(activities, location, animal);
    $("ul.result").append("<li>" + familyStuff[0] + "</li>", "<li>" + familyStuff[1] + "</li>", "<li>" + familyStuff[2] + "</li>");
    // $("ul.result").append(familyStuff[1]);
    // $("ul.result").append(familyStuff[2]);
  });
});