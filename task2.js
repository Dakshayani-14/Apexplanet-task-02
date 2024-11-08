// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  
  // Dynamic gallery
  document.getElementById('add-product').addEventListener('click', addProduct);
  
  function addProduct() {
    const gallery = document.getElementById('gallery');
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Replace with new product details
    productCard.innerHTML = `
      <img src="images/product-sample.jpg" alt="New Product">
      <p>New Product - $19.99</p>
    `;
    
    gallery.appendChild(productCard);
  }
  // Add new task to the to-do list
document.getElementById('add-task').addEventListener('click', function() {
  const taskInput = document.getElementById('todo-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Complete task button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
      listItem.classList.toggle('completed');
    };

    // Delete task button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      listItem.remove();
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(listItem);
    taskInput.value = ''; // Clear input field
  } else {
    alert("Please enter a task.");
  }
});
