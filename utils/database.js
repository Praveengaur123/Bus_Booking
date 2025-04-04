
// ensure database connection
const Sequelize=require('sequelize')

const sequelize=new Sequelize('bus-booking','root','Pra0@123',{
    host:'localhost',
    dialect:'mysql'
});

(async ()=>{
    try{
await sequelize.authenticate();
console.log('Succesfully connected to the database')
}
catch(error){
console.log(error)
}})();
module.export=sequelize


// const mySql=require('mysql2')
// // sql database connection
// const db=mySql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Pra0@123',
//     database:'bus-booking'
// })

// db.connect((err)=>{
//     if(err) console.log(err,"Database connect failure");
//     else createTable();
//     console.log("Table has been created")
// })
// // function to create table
// function createTable(){
//     const usersTable=`CREATE TABLE IF NOT EXISTS Users(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL
//     )`;
//     const busesTable=`CREATE TABLE IF NOT EXISTS Buses (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         busNumber VARCHAR(50) UNIQUE NOT NULL,
//         totalSeats INT NOT NULL,
//         availableSeats INT NOT NULL
//     )`;
//     const bookingsTable = `CREATE TABLE IF NOT EXISTS Bookings (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         seatNumber INT NOT NULL,
//         userId INT,
//         busId INT,
//         FOREIGN KEY (userId) REFERENCES Users(id),
//         FOREIGN KEY (busId) REFERENCES Buses(id)
//     )`;
//     const paymentsTable = `CREATE TABLE IF NOT EXISTS Payments (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         amountPaid DECIMAL(10,2) NOT NULL,
//         paymentStatus ENUM('Pending', 'Completed', 'Failed') NOT NULL,
//         bookingId INT,
//         FOREIGN KEY (bookingId) REFERENCES Bookings(id)
//     )`;
    
//     db.query(usersTable, (err) => { if (err) console.error(err); });
//     db.query(busesTable, (err) => { if (err) console.error(err); });
//     db.query(bookingsTable, (err) => { if (err) console.error(err); });
//     db.query(paymentsTable, (err) => { if (err) console.error(err); });
// }
// module.exports=db