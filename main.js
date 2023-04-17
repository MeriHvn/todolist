// Load list items from localStorage if available
if (localStorage.getItem('myListItems')) {
  document.getElementById('myList').innerHTML = localStorage.getItem('myListItems');
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // Remove item from localStorage
    localStorage.setItem('myListItems', document.getElementById('myList').innerHTML);
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // Update item in localStorage
    localStorage.setItem('myListItems', document.getElementById('myList').innerHTML);
  }
}, false);

// Create a new list item and description when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var descValue = document.getElementById("myDesc").value;
    var dateValue = document.getElementById("myDate").value;
    if (descValue !== '') {
      var desc = document.createElement("div");
      var descText = document.createTextNode(descValue);
      desc.className = "desc";
      desc.appendChild(descText);
      li.appendChild(desc);
    }
    if (dateValue !== '') {
      var date = document.createElement("div");
      var dateText = document.createTextNode("Due Date: " + dateValue);
      date.className = "desc";
      date.appendChild(dateText);
      li.appendChild(date);
    }
    document.getElementById("myList").appendChild(li); 
    // Add item to localStorage
    localStorage.setItem('myListItems', document.getElementById('myList').innerHTML);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myDesc").value = "";
  document.getElementById("myDate").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      // Remove item from localStorage
      localStorage.setItem('myListItems', document.getElementById('myList').innerHTML);
    }
  }
}

['myInput', 'myDesc', 'myDate'].forEach(elementId => {
  document.getElementById(elementId).addEventListener('keyup', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      newElement();
    }
  });
});




