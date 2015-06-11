var allStudents = new StudentCollection();

allStudents.fetch().done( function () {


  allStudents.each(function (model) {
addStudentToView(model.attributes);

  });

});


var addStudent = function (e) {

  e.preventDefault();

  var studentName = $(this).find('input').val();

  var s = new Student({
    name: studentName
  });


allStudents.add(s).save().success( function (data) {
addStudentToView(data);

});

this.reset(); //RESET OUR FORM

};

var addStudentToView = function (student) {
  var studentHtml = "<li id='" + student._id + "'>";
  studentHtml += student.name;
  student.Html += "</li>";
$('#students').prepend(studentHtml);
};


// FORM SUBMIT LISTENER
$('#addStudent').on('submit', addStudent);

