var data = localStorage.getItem('studentList');
console.log(data)
if (data == null) {
  var studentData = [];
  var id = 0
}
else if (data == "[]") {
  var studentData = [];
  var id = 0
}
else {
  obj = JSON.parse(data);
  var studentData = obj;
  var id = studentData[studentData.length - 1]["id"]
}

function retrieve() {
  data = localStorage.getItem('studentList');
  if (data == null) {
    document.getElementById('info').innerHTML = 'Data is not available i.e. not entered.'
  }
  else if (data == "[]") {
    document.getElementById('info').innerHTML = 'all Data is deleted.'
  }
  else {
    document.getElementById('info').innerHTML = `
                                            <h1 style="text-align: center;">Student data Saved in Local storage</h1>
                                                <table id="">
                                                  <thead>
                                                    <tr style="border: black solid 1px;">
                                                      <th>Update</th>
                                                      <th>Delete</th>
                                                      <th>Student NO.</th>
                                                      <th>First Name</th>
                                                      <th>Last Name</th>
                                                      <th>Father Name</th>
                                                      <th>Mother Name</th>
                                                      <th>Gender</th>
                                                      <th>Date of Birth</th>
                                                      <th>Known Language</th>
                                                      <th>Mobile Number</th>
                                                      <th>Address</th>
                                                      <th>District</th>
                                                      <th>State</th>
                                                      <th>Country</th>
                                                      <th>Pin Code</th>
                                                      <th>Course Applied for</th>
                                                      <th>Email</th>
                                                      <th>Password</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody id="tb1"></tbody>
                                                </table>
                                                <p id="tb2"></p>`
    // debugger
    obj = JSON.parse(data);
    for (var i = 0; i < obj.length; i++) {
      idx = obj[i].id
      var table = `<td><a href="#" id="udt" onclick="editStudentRecord(${idx})" >Update</a></td>
                    <td><a href="" id="dlt" onclick="DeleteRecord(${idx})" >Delete</a></td>
                    <td>${obj[i].stdNo}</td>
                    <td>${obj[i].firstName}</td>
                    <td>${obj[i].lastName}</td>
                    <td>${obj[i].fatherName}</td>
                    <td>${obj[i].mothername}</td>
                    <td>${obj[i].gender}</td>
                    <td>${obj[i].dob}</td>
                    <td>${obj[i].language}</td>
                    <td>${obj[i].mobilenum}</td>
                    <td>${obj[i].address}</td>
                    <td>${obj[i].dist}</td>
                    <td>${obj[i].state}</td>
                    <td>${obj[i].country}</td>
                    <td>${obj[i].pin}</td>
                    <td>${obj[i].course}</td>
                    <td>${obj[i].email}</td>
                    <td>${obj[i].pwd}</td>`;
      document.getElementById('tb1').innerHTML += table;
    }
  }
}
retrieve()

//----------------------------------------------------------------
// function for student form
var formFields =
  `
    <div class="formField">
      <label class="formLable" for="stdNo">Student Id :</label>
      <input class="formInput" type="text" id="stdNo" name="stdNo"  placeholder="Enter Student Number"  required>
    </div>
    <div class="formField">
      <label class="formLable" for="firstName">First name :</label>
      <input class="formInput" type="text" id="firstName" name="firstname"  placeholder="Enter first Name"  required>
    </div>
    <div class="formField">
      <label class="formLable" for="lastName">Last name :</label>
      <input class="formInput" type="text" id="lastName" name="lastname"  placeholder="Enter last Name"  required>
    </div>
    <div class="formField">
      <label class="formLable" for="fatherName">Father name :</label>
      <input class="formInput" type="text" id="fatherName" name="fathername"  placeholder="Enter father Name"  required>
    </div>
    <div class="formField">
      <label class="formLable" for="mothername">Mother name :</label>
      <input class="formInput" type="text" id="mothername" name="mothername"  placeholder="Enter mother Name"  required>
    </div>
    <div class="formField" id="gender">
      <div class="formLable" >Gender :</div>
      <label for='male'>Male</label>
      <input type="radio" id="male" name="gender" value="Male">
      <label for='female'>Female</label>
      <input type="radio" id="female" name="gender" value="Female">
      <label for='female'>Other</label>
      <input type="radio" id="other" name="gender" value="Other">
    </div>
    <div class="formField">
      <label class="formLable" for="dob">Date of Birth :</label>
      <input class="formInput" type="date" id="dob" name="dob"  >
    </div>                
    <div class="formField">
      <div class="formLable" >Known Language:</div>
      <label for="eng">English</label>
      <input type="checkbox" id="eng" name="eng" value="English">
      <label for="mar">Marathi</label>
      <input type="checkbox" id="mar" name="mar" value="Marathi">
      <label for="hin">Hindi</label>
      <input type="checkbox" id="hin" name="hin" value="Hindi">
    </div>
    <div class="formField">
      <label class="formLable" for="mobilenum">Mobile Number :</label>
      <input class="formInput" type="number" id="mobilenum" name="mobilenum"  placeholder="Enter Mobile number"  required>
    </div>
    
    <div class="formField">
      <label class="formLable" for="address">Address :</label>
      <textarea class="formInput" rows="6" cols="25" id="address" name="address"  placeholder="Enter address" required></textarea>
    </div>
    <div class="formField">
      <label class="formLable" for="dist">District :</label>
      <input class="formInput" type="text" id="dist" name="dist"   placeholder="Enter District" required>
    </div>
    <div class="formField">
      <label class="formLable" for="state">State :</label>
      <input class="formInput" type="text" id="state" name="state"  placeholder="Enter State" required>
    </div>
    <div class="formField">
      <label class="formLable" for="country">Country :</label>
      <input class="formInput" type="text" id="country" name="country"  placeholder="Enter Country" required>
    </div>
    <div class="formField">
      <label class="formLable" for="pin">Pin Code :</label>
      <input class="formInput" type="number" id="pin" name="pin"  placeholder="Enter Pin Code" required>
    </div>
    <div class="formField" > 
      <div class="formLable" >Course Applied for :</div>
      <select class="form-dropdown text-field" name='course' id="select1">
        <option value="science" > Science </option>
        <option value="Commerce"> Commerce </option>
        <option value="Arts"> Arts </option>
      </select>
    </div>
    <div class="formField">
      <label class="formLable" for="email">Email :</label>
      <input class="formInput" type="email" id="email" name="email"  placeholder="Enter e-mail"  required>
    </div>
    <div class="formField">
      <label class="formLable" for="pwd">Password :</label>
      <input class="formInput" type="password" id="pwd" name="pwd"  placeholder="Enter password"  required>
    </div>
`

function studentForm() {
  var formContainer =
    `
                      //<Div class='student'>
                      <h1 style="text-align: center;">Student Form</h1>
                      <form id="form1" action="#">
                      ` + formFields +
    `
                        <div class="formBtn" style="text-align: center; " >
                          <input type="button" id="btn" value="Submit">&nbsp;&nbsp;&nbsp;&nbsp;
                          <input type="reset" value="reset">
                        </div>
                      </form>
                    //</Div>
                      `
  document.getElementById("info").innerHTML = formContainer

  //call the function ==> saving form
  document.getElementById('btn').addEventListener('click', addStudentRecord);
}


// Create function to add information in students array

function addStudentRecord(event) {
  // debugger
  function gender() {
    if (document.getElementsByName('gender')[0].checked == true) {
      return document.getElementsByName('gender')[0].value
    }
    if (document.getElementsByName('gender')[1].checked == true) {
      return document.getElementsByName('gender')[1].value
    }
    if (document.getElementsByName('gender')[2].checked == true) {
      return document.getElementsByName('gender')[2].value
    }
  }

  function language() {
    let languageData = [];
    let engc, marc, hinc;
    engc = document.getElementById('eng').checked;
    marc = document.getElementById('mar').checked;
    hinc = document.getElementById('hin').checked;

    if (engc == true) {
      languageData.push('english');
    }
    if (marc == true) {
      languageData.push('marathi');
    }
    if (hinc == true) {
      languageData.push('hindi');
    }
    return languageData
  }

  function course() {
    selectElement = document.querySelector('#select1');
    output = selectElement.value
    return output
  }

  // event.preventDefault();  //to stop the form submitting ==> validation works

  let student = {
    id: id + 1,
    stdNo: document.getElementById('stdNo').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    fatherName: document.getElementById('fatherName').value,
    mothername: document.getElementById('mothername').value,
    dob: document.getElementById('dob').value,
    mobilenum: document.getElementById('mobilenum').value,
    address: document.getElementById('address').value,
    dist: document.getElementById('dist').value,
    state: document.getElementById('state').value,
    country: document.getElementById('country').value,
    pin: document.getElementById('pin').value,
    email: document.getElementById('email').value,
    pwd: document.getElementById('pwd').value,
    gender: gender(),
    language: language(),
    course: course(),
  }
  if (document.getElementById('form1').checkValidity() == true) {
    debugger
    studentData.push(student);
    document.forms[0].reset(); // to clear the form for the next entries
    console.warn('added', { studentData });   //for display in console
    localStorage.setItem('studentList', JSON.stringify(studentData))
    retrieve()
  }
}

//----------------------------------------------------------------
// to delete record
function DeleteRecord(idx) {
  obj = JSON.parse(data);
  for (var i = 0; i < obj.length; i++) {
    x = obj[i].id
    if (x == idx) {
      var ind = i;
      obj.splice(ind, 1);
      localStorage.setItem('studentList', JSON.stringify(obj))
    }
  }
}

//----------------------------------------------------------------
// to Update record
function editStudentRecord(idx) {
  debugger
  console.log(idx)
  obj = JSON.parse(data);
  for (var i = 0; i < obj.length; i++) {
    x = obj[i].id
    if (x == idx) {
      // to get i value
      ind = i;
    }
  }

  var formContainer =
    `
                    //<Div class='student'>
                    <h1 style="text-align: center;">Update Student Form</h1>
                    <form id="form1" action="#">
                    ` + formFields +
    `
                      <div class="formBtn" style="text-align: center; " >
                        <input type="button" id="udt" value="Update">&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                    </form>
                    //</Div>
                    `
  document.getElementById("info").innerHTML = formContainer

  //call funtion at click event
  document.getElementById('udt').addEventListener('click', updateStudentRecord);

  // UPDATE function
  obj = JSON.parse(data);
  i = ind

  //call form data
  addDataInForm()

  // get data
  function addDataInForm() {
    function genderFunction() {
      var gender = obj[i].gender
      if (gender == 'Male') {
        document.getElementsByName('gender')[0].checked = true;
      }
      else if (gender == 'Female') {
        document.getElementsByName('gender')[1].checked = true;
      }
      else {
        document.getElementsByName('gender')[2].checked = true;
      }
    }

    function language() {
      let languageData = obj[i].language;
      languageData.forEach(myFunction);
      function myFunction(item) {
        if (item == 'english') {
          document.getElementById('eng').checked = true;
        }
        if (item == 'marathi') {
          document.getElementById('mar').checked = true;
        }
        if (item == 'hindi') {
          document.getElementById('hin').checked = true;
        }
      }
    }

    document.getElementById('stdNo').value = `${obj[i].stdNo}`;
    document.getElementById('firstName').value = `${obj[i].firstName}`;
    document.getElementById('lastName').value = `${obj[i].lastName}`
    document.getElementById('fatherName').value = `${obj[i].fatherName}`
    document.getElementById('mothername').value = `${obj[i].mothername}`
    document.getElementById('dob').value = `${obj[i].dob}`
    document.getElementById('mobilenum').value = `${obj[i].mobilenum}`
    document.getElementById('address').value = `${obj[i].address}`
    document.getElementById('dist').value = `${obj[i].dist}`
    document.getElementById('state').value = `${obj[i].state}`
    document.getElementById('country').value = `${obj[i].country}`
    document.getElementById('pin').value = `${obj[i].pin}`
    document.getElementById('select1').value = `${obj[i].course}`
    document.getElementById('email').value = `${obj[i].email}`
    document.getElementById('pwd').value = `${obj[i].pwd}`
    genderFunction()
    language()
  }
}

//Update Data
function updateStudentRecord(event) {
  function gender() {
    if (document.getElementsByName('gender')[0].checked == true) {
      return document.getElementsByName('gender')[0].value
    }
    if (document.getElementsByName('gender')[1].checked == true) {
      return document.getElementsByName('gender')[1].value
    }
    if (document.getElementsByName('gender')[2].checked == true) {
      return document.getElementsByName('gender')[2].value
    }
  }

  function language() {
    let languageData = [];
    let engc, marc, hinc;
    engc = document.getElementById('eng').checked;
    marc = document.getElementById('mar').checked;
    hinc = document.getElementById('hin').checked;
    if (engc == true) {
      languageData.push('english');
    }
    if (marc == true) {
      languageData.push('marathi');
    }
    if (hinc == true) {
      languageData.push('hindi');
    }
    return languageData
  }

  function course() {
    selectElement = document.querySelector('#select1');
    output = selectElement.value
    return output
  }

  let student = {
    id: idx,
    stdNo: document.getElementById('stdNo').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    fatherName: document.getElementById('fatherName').value,
    mothername: document.getElementById('mothername').value,
    dob: document.getElementById('dob').value,
    mobilenum: document.getElementById('mobilenum').value,
    address: document.getElementById('address').value,
    dist: document.getElementById('dist').value,
    state: document.getElementById('state').value,
    country: document.getElementById('country').value,
    pin: document.getElementById('pin').value,
    email: document.getElementById('email').value,
    pwd: document.getElementById('pwd').value,
    gender: gender(),
    language: language(),
    course: course(),
  }

  if (document.getElementById('form1').checkValidity() == true) {
    debugger
    i = ind;
    obj[i] = student;
    localStorage.setItem('studentList', JSON.stringify(obj))
    retrieve()
  }
}




