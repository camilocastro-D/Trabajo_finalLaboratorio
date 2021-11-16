var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["documento"] = document.getElementById("documento").value;
    formData["oficio"] = document.getElementById("oficio").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.documento;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.oficio;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ciudad;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("oficio").value = "";
    document.getElementById("ciudad").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("documento").value = selectedRow.cells[1].innerHTML;
    document.getElementById("oficio").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ciudad").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.documento;
    selectedRow.cells[2].innerHTML = formData.oficio;
    selectedRow.cells[3].innerHTML = formData.ciudad;
}

function onDelete(td) {
    if (confirm('¿desea eliminar este campo ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}