// Course Data (10 Products)
const courses = [
    { name: 'HTML5 Basics', price: 500, img: 'images/html.png' },
    { name: 'CSS3 Styling', price: 600, img: 'images/css.png' },
    { name: 'JavaScript ES6', price: 800, img: 'images/js.png' },
    { name: 'React Development', price: 1200, img: 'images/react.png' },
    { name: 'Python Programming', price: 1000, img: 'images/python.png' },
    { name: 'Java Masterclass', price: 1100, img: 'images/html.png' }, // Reusing images
    { name: 'C++ Systems', price: 900, img: 'images/python.png' },    // Reusing images
    { name: 'Angular Framework', price: 1150, img: 'images/react.png' }, // Reusing images
    { name: 'Node.js Backend', price: 1050, img: 'images/js.png' },      // Reusing images
    { name: 'SQL & Databases', price: 700, img: 'images/css.png' }       // Reusing images
];

let cartTotal = 0;
let cartItems = [];

// Navigation Handler
function showSection(sectionId) {
    // Hide all major sections
    const sections = ['introPage', 'mainContent', 'feedbackSection'];
    sections.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    // Special case: If clicking "Courses", show mainContent AND ensure render
    if (sectionId === 'mainContent') {
        document.getElementById('mainContent').style.display = 'block';
        renderCourses();
    }
    // Show the requested section
    else {
        document.getElementById(sectionId).style.display = 'block';
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Render Courses to DOM
function renderCourses() {
    const courseList = document.getElementById('courseList');
    // Ensure we don't duplicate if already rendered, or just clear
    courseList.innerHTML = '';

    courses.forEach((course, index) => {
        courseList.innerHTML += `
            <div class="course-card">
                <img src="${course.img}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>Price: $${course.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

// 2. Add to Cart Logic
function addToCart(index) {
    const course = courses[index];
    cartItems.push(course);

    const list = document.getElementById('cartItems');

    // Add item to UI list
    const li = document.createElement('li');
    li.innerHTML = `<span>${course.name}</span> <span>$${course.price}</span>`;
    list.appendChild(li);

    // Update Total
    cartTotal += course.price;
    document.getElementById('totalBill').textContent = cartTotal;

    alert(course.name + " added to cart!");
}

// 3. Purchase / Checkout Logic
function checkout() {
    if (cartTotal === 0) {
        alert("Your cart is empty! Add some courses first.");
        return;
    }

    const confirmPurchase = confirm(`Total Bill is $${cartTotal}. Proceed to payment?`);
    if (confirmPurchase) {
        alert("Thank you for your purchase! Happy Learning.");

        // Reset Cart
        cartTotal = 0;
        cartItems = [];
        document.getElementById('cartItems').innerHTML = '';
        document.getElementById('totalBill').textContent = '0';
    }
}

// 4. Feedback Logic
function submitFeedback() {
    const input = document.getElementById('feedbackInput');
    if (input.value.trim() === "") {
        alert("Please enter some feedback.");
    } else {
        alert("Thank you for your feedback: " + input.value);
        input.value = ""; // Clear input
    }
}
