// fill in javascript code here
let tbody = document.querySelector("tbody");

document.querySelector("form").addEventListener("submit", (event) => {
  getData(event);
});

let arr = [];

function getData(event) {
  event.preventDefault();
  let Name = document.getElementById("name").value;
  let employeeID = document.getElementById("employeeID").value;
  let department = document.getElementById("department").value;
  let exp =parseFloat (document.getElementById("exp").value);
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mbl").value;
  let role;
  
  console.log(Name, employeeID, department, exp, email, mobile);

  let obj = {
    Name,
    employeeID,
    department,
    exp,
    email,
    mobile,
    role,
  };
  console.log(obj);
  arr.push(obj);
  console.log(arr);

  localStorage.setItem("data", JSON.stringify(arr));
  displayData(arr);
}

function displayData(data) {
  tbody.innerHTML = " ";
  data.forEach((ele,i) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = ele.Name;
    let td2 = document.createElement("td");
    td2.innerText = ele.employeeID;

    let td3 = document.createElement("td");
    td3.innerText = ele.department;

    let td4 = document.createElement("td");
    td4.innerText = ele.exp;

    

    let td5 = document.createElement("td");
    td5.innerText = ele.email;

    let td6 = document.createElement("td");
    td6.innerText = ele.mobile;

    let td7 = document.createElement("td");
    td7.innerText = ele.role;
    if (ele.exp > 5) {
        td7.innerText = "Senior";
      } else if (ele.exp >= 2 && ele.exp <= 5) {
        td7.innerText = "Junior";
      } else if(ele.exp >= 1) {
        td7.innerText = "Fresher";
      }else{
        td7.innerText = " ";
      }
    let btn = document.createElement("button")
    btn.innerHTML = "Delete";
    btn.addEventListener("click",()=>{
      deletData(ele,i)
    })

    tr.append(td1, td2, td3, td4, td5, td6,td7,btn);
    tbody.append(tr);
  });
}

function deletData(ele,i){
  storedData.splice(i,1)
  displayData(storedData)
}

let storedData = JSON.parse(localStorage.getItem("data")) || [];
console.log(storedData);
displayData(storedData);
