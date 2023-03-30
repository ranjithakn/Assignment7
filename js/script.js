// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let empForm = document.querySelector('#addForm')
let empTable = document.querySelector('#employees')
let empCount = document.querySelector('#empCount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //Get the values from the form element
    let empID = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;

    //insert a new at the end of the table
    let empRow = empTable.insertRow()

    //Insert a cell for each item
    let cellId = empRow.insertCell()
    let cellName = empRow.insertCell()
    let cellExt = empRow.insertCell()
    let cellEmail = empRow.insertCell()
    let cellDept = empRow.insertCell()
    let cellDele = empRow.insertCell()

    //Append the text values as text nodes within the cell
    cellId.appendChild(document.createTextNode(empID))
    cellName.appendChild(document.createTextNode(empName))
    cellExt.appendChild(document.createTextNode(empExt))
    cellEmail.appendChild(document.createTextNode(empEmail))
    cellDept.appendChild(document.createTextNode(empDept))

    let deleBtn = document.createElement('button')
    deleBtn.className = 'btn btn-sm btn-danager delete'
    deleBtn.appendChild(document.createTextNode('X'))

    cellDele.appendChild(deleBtn)
    document.querySelector('#addForm').reset()
    document.querySelector('#id').focus()
    count++
    empCount.value = `(${count})`


})

empTable.addEventListener('click', (e) => {
    //Confirm delete
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            count--
            empCount.value = `(${count})`

        }
    }
})























form.addEventListener('submit', (e) => {

    var table = document.getElementById("employees");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    let newItem = document.querySelector('#item').value;

    //document.write(li);

    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE