// import Autocomplete from './Autocomplete';
import usStates from './us-states';
import Complete from './Complete';
import './main.css';
import './complete.css'






  // const Http = new XMLHttpRequest();
  // const url = 'https://jsonplaceholder.typicode.com/posts';
  // Http.open("GET", url);
  // Http.send();

  // Http.onreadystatechange = (e) => {
  //   console.log(Http.responseText)
  // }

// US States
// var user;
var datas = []
const url = 'https://api.github.com/search/users?q=username&per_page=59'


// 'https://jsonplaceholder.typicode.com/posts';


// $('.btn').click(function () {
$.get(url, function (data, status) {
  // console.log(data)
  data.items.map(item => {
    // const abbs = item.login.slice(0,2).toUpperCase()
    // console.log(item)
    datas.push(item.login)
    })
    // datas.push(data.items.login)
    // console.log(datas)
  });
// });
// console.log(datas)


// console.log(datas)
const myData = []  

// const data = datas.map(state => ({
//         myData.push(state.name)
//           // text: state.name,
//           // value: state.id

//     }));

const data = datas.map(state => {
  // console.log(state)
  myData.push(state.login)
  // console.log(myData)
})
// datas.map(state => ({
//   text: state.name,
//   value: state.abbreviation

// }));
// console.log(data)
// console.log(datas)

// console.log(usStates)
// new Autocomplete(document.getElementById('state'), {
//   data,
//   onSelect: (stateCode) => {
//     console.log('selected state:', stateCode);

//   },
// });

Complete(document.getElementById("myInput"), datas)


// const Http = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }




// Github Users
// new Autocomplete(document.getElementById('gh-user'), {
//   onSelect: (ghUserId) => {
//     console.log('selected github user id:', ghUserId);
//   },
// });
