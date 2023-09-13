//1
// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//     beforeSend: function (xhr) {
//         xhr.overrideMimeType("text/plain; charset=x-user-defined");
//     }
// })
//     .done(function (data) {
//         if (console && console.log) {
//             console.log("Sample of data:", data.slice(0, 100));
//         }
//     });
// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//     beforeSend: function (xhr) {
//         xhr.overrideMimeType("text/plain; charset=x-user-defined");
//     }
// })
//     .done(function (data) {
//         if (console && console.log) {
//             console.log("Sample of data:", data.slice(0, 100));
//         }
//     });


//2
// var url = "http://localhost:8080/api/v1/users";
// var url = 'https://jsonplaceholder.typicode.com/todos';
// var xhr = new XMLHttpRequest()
// xhr.open('GET', url, true)
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(null);


//3
// var url = "http://localhost:8080/api/v1/users";
// var url = 'https://jsonplaceholder.typicode.com/todos';
// var xhr = new XMLHttpRequest()
// xhr.open('GET', url + '/1', true)
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(null);


//4
// var url = "http://localhost:8080/api/v1/users";
// var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
// var data = {};
// //data.firstname = "John";
// //data.lastname = "Snow";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "201") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(json);

//5
// var url = "http://localhost:8080/api/v1/users";
// var url = 'https://jsonplaceholder.typicode.com/todos';
// var data = {};
// data.firstname = "John2";
// data.lastname = "Snow2";
// var json = JSON.stringify(data);

//6
// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url + '/12', true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(json);

//7
// var url = "http://localhost:8080/api/v1/users";
// var url = 'https://jsonplaceholder.typicode.com/todos';
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url + '/12', true);
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(null);
