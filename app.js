const classes = [
    { id: 1, name: "Yoga", time: "8:00 AM - 9:00 AM" },
    { id: 2, name: "Cardio", time: "10:00 AM - 11:00 AM" },
    { id: 3, name: "Strength Training", time: "6:00 PM - 7:00 PM" },
];

// Customers who have booked
const customers = ["Monisha", "Hema", "Mownika","Vasunthara","Pooja","Sushmitha","Srimathi"];

// Customers who attended
const attendance = [];

// Display available classes
const classList = document.getElementById("class-list");
classes.forEach((gymClass) => {
    const li = document.createElement("li");
    li.textContent = `${gymClass.name} (${gymClass.time})`;
    classList.appendChild(li);
});

// Display bookings
const bookingList = document.getElementById("booking-list");
customers.forEach((customer, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${customer}
        <button onclick="markAttendance(${index})">Mark Attendance</button>
    `;
    bookingList.appendChild(li);
});

// Mark attendance
function markAttendance(customerIndex) {
    const customerName = customers[customerIndex];

    // Check if the customer is already marked for attendance
    if (!attendance.includes(customerName)) {
        attendance.push(customerName);
        updateAttendance();
        alert(`Attendance marked for ${customerName}.`);
    } else {
        alert(`${customerName} is already marked for attendance.`);
    }
}

// Update attendance list
function updateAttendance() {
    const attendanceList = document.getElementById("attendance-list");
    attendanceList.innerHTML = ""; // Clear the list
    attendance.forEach((customer) => {
        const li = document.createElement("li");
        li.textContent = customer;
        attendanceList.appendChild(li);
    });
}