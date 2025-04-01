const { create } = require('domain')
const express=require('express')

const mySql=require('mysql2')

const app=express()


// sql database connection
const db=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'Pra0@123',
    database:'bus_booking'
})

// function to create table
function createTable(){
    const usersTable=`CREATE TABLE Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
    )`;
    const busesTable=`CREATE TABLE Buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(50) UNIQUE NOT NULL,
        totalSeats INT NOT NULL,
        availableSeats INT NOT NULL
    )`;
    const bookingsTable = `CREATE TABLE IF NOT EXISTS Bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT NOT NULL,
        userId INT,
        busId INT,
        FOREIGN KEY (userId) REFERENCES Users(id),
        FOREIGN KEY (busId) REFERENCES Buses(id)
    )`;
    const paymentsTable = `CREATE TABLE IF NOT EXISTS Payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid DECIMAL(10,2) NOT NULL,
        paymentStatus ENUM('Pending', 'Completed', 'Failed') NOT NULL,
        bookingId INT,
        FOREIGN KEY (bookingId) REFERENCES Bookings(id)
    )`;
    
    db.query(usersTable, (err) => { if (err) console.error(err); });
    db.query(busesTable, (err) => { if (err) console.error(err); });
    db.query(bookingsTable, (err) => { if (err) console.error(err); });
    db.query(paymentsTable, (err) => { if (err) console.error(err); });
}
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});