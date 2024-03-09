//This id variable will help me set the ids for the rows

let id = 0;

document.getElementById("addH").addEventListener("click", () => {
  let hDate = new Date();
  let table = document.getElementById("logList");
  let row = table.insertRow(1);
  row.setAttribute("id", `hl-${id}`);
  row.insertCell(0).innerHTML = `${
    hDate.getMonth() + 1
  }/${hDate.getDate()}/${hDate.getFullYear()}`;
  row.insertCell(1).innerHTML = document.getElementById("new-highlight").value;
  //This stores the value of the radio button checked by the user
  let mood = getRadioBtnVal();
  row.insertCell(2).innerHTML = mood;
  action = row.insertCell(3);
  action.appendChild(CreateDelBtn(id++));
  document.getElementById("new-highlight").value = "";
});

//Function for the delete row button

function CreateDelBtn(id) {
  let delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger";
  delBtn.id = id;
  delBtn.innerHTML = "Delete";
  delBtn.onclick = () => {
    console.log(`Deleted highlight item with id: hl-${id}`);
    let hlDel = document.getElementById(`hl-${id}`);
    hlDel.parentNode.removeChild(hlDel);
  };
  return delBtn;
}

// The function below helps me check which value was checked by the user for the radio buttons

function getRadioBtnVal() {
  let oneSun = document.getElementById("oneSun");
  let twoSuns = document.getElementById("twoSuns");
  let triSuns = document.getElementById("triSuns");
  let moodVal = "";

  // If statement determines the selected option
  if (oneSun.checked) {
    moodVal = oneSun.value;
  } else if (twoSuns.checked) {
    moodVal = twoSuns.value;
  } else if (triSuns.checked) {
    moodVal = triSuns.value;
  } else {
    moodVal = "N/A";
  }
  return moodVal;
}
