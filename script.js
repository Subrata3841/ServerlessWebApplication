var API_ENDPOINT = "https://ulmgtymvh8.execute-api.ap-south-1.amazonaws.com/Data";

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function(event){
    event.preventDefault(); // Prevent the form from submitting
    var inputData = {
        "studentid": document.getElementById('studentId').value,
        "name": document.getElementById('firstName').value + ' ' + document.getElementById('middleName').value + ' ' + document.getElementById('lastName').value,
        "email": document.getElementById('email').value,
        "gender": document.getElementById('gender').value,
        "course": document.getElementById('courseList').value,
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function (xhr, status, error) {
            console.error("Error saving student data:", error);
            console.error("Status:", status);
            console.error("Response:", xhr.responseText);
            alert("Error saving student data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function(event){
    event.preventDefault(); // Prevent the form from submitting
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#studentTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {
                $("#studentTable").append("<tr> \
                    <td>" + data['studentid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['gender'] + "</td> \
                    <td>" + data['email'] + "</td> \
                    <td>" + data['course'] + "</td> \
                    </tr>");
            });
        },
        error: function (xhr, status, error) {
            console.error("Error retrieving student data:", error);
            console.error("Status:", status);
            console.error("Response:", xhr.responseText);
            alert("Error retrieving student data.");
        }
    });
}
