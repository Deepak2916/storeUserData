var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value
  
  var li = document.createElement('li');
  var spam=document.createElement('spam')
  
  
  li.className = 'list-group-item';
  spam.className='new-item2'
  
  li.appendChild(document.createTextNode(newItem));
  spam.appendChild(document.createTextNode(newItem2))
  li.appendChild(spam)

  var deleteBtn = document.createElement('button');
  var editBtn=document.createElement('button')

  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className='edit-btn'

  
  deleteBtn.appendChild(document.createTextNode('Delet'));
  editBtn.appendChild(document.createTextNode("Edit"))

  
  li.appendChild(deleteBtn);
  li.appendChild(editBtn)

  
  itemList.appendChild(li);
//   let myObj="obj"+newItem
//   let obj = "obj"+newItem2
//   console.log(obj);
//   lo

 let obj={"name":newItem,
"mail":newItem2}
 let myObj = JSON.stringify(obj)
localStorage.setItem(`myObj${newItem}`,myObj)
}

