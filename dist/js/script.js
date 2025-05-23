// var name = document.querySelector("#exampleInputName");
// var gender = document.querySelectorAll(
//   "#form-user-create [name-gender]:checked"
// );
// var birth = document.querySelector("exampleInputBirth");
// var coutry = document.querySelector("exampleInputCountry");
// var email = document.querySelector("exampleInputEmail");
// var password = document.querySelector("exampleInputPassword");
// var photo = document.querySelector("exampleInputFile");
// var admin = document.querySelector("#exampleInputAdmin");

var field = document.querySelectorAll("#form-user-create [name]");

var user = {};

field.forEach(function (field, index) {
  if (field.name == "gender") {
    if (field.checked) {
      user[field.name] = field.value
    }
  } else {
    user[field.name] = field.value
  }

  // console.log(field.id, field.name, field.value, field.checked, index)
});

console.log(user)