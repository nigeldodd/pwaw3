function addToHTML(person) {
  var name = person["name"];
  var next = person["next"];

  var table = document.getElementById("tbody");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(0);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  cell2.innerHTML = '<table border="0" summary=""> <tr align= "right"> <td CT</td> <td>PET</td> <td>MDT</td> </tr> <tr id="tr"> <th>-</th> <td class="grn" style="width: 200px"><div class="tooltip">..<span class="tooltiptext">Day 3</span></div></td> <td class="red" style="width: 300px"><div class="tooltip">..<span class="tooltiptext">Day 10</span></div></td> <td class="blu" style="width: 100px"><div class="tooltip">..<span class="tooltiptext">Day 27</span></div></td> </tr> </table>';
  cell3.innerHTML = next;
}

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
              .register('./sw.js');
  }
  var people = [
    {
        "name" : "Joe",
        "stage" : 3,
        "next" : "MDT"
    },
    {
        "name" : "Eric",
        "stage" : 4,
        "next" : "Consultation"
    },
    {
        "name" : "Sara",
        "stage" : 1,
        "next" : "Consultation"
    },
    {
        "name" : "John",
        "stage" : 2,
        "next" : "test"
    }
  ]
  
  people.forEach(element => addToHTML(element));
}

function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
