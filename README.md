# Inotel - Team MCoders
![alt text](https://github.com/AmineLadrem/MCoders-Inotel/blob/main/staff/assets/logo.png)
 ## 1.Overview
   Hello and welcome to Inotel's documentation! We're here to make your experience as smooth as possible. 
    Whether you're exploring our booking features, understanding booking synchronization, or getting the hang of HR management by our ERP system, this documentation is your guide to success.So, we have made 2 web application ( Dashboard dedicated for the management of the hotel , Booking website for guests to book rooms with a integrated chatbot which helps them , and a mobile application for hotel's staff ), Server which provides RESTful APIs for the hotel's software and other booking websites with MySQL database.
  ### Booking Made Easy
   Manage reservations, check-ins, and check-outs effortlessly. Our system is designed for flexibility, making guest interactions and staff workflows a breeze. As part of our commitment to enhancing your experience, we've implemented a chatbot to answer guest questions promptly, adding an extra layer of support to make the booking process even more straightforward.
  ### Seamless Synchronization
   Even if the network connection drops, our system ensures uninterrupted service. We've got smart synchronization to handle any bumps in the road.
  ### Effortless HR Management
   Streamline HR tasks with ease. Handle staff profiles, attendance, and assignments seamlessly to keep your workforce organized and productive.

## 2.Installation:
To get Inotel up and running on a Windows environment, follow these steps to set up your server. This process involves installing Node-RED, MySQL, and other dependencies.
### Step 1: Install Node-RED
Inotel relies on Node-RED for its flexibility and automation capabilities. Follow these steps to install Node-RED:
1. **Install Node.js:**
   Download and install Node.js from the official website: [Node.js Download](https://nodejs.org/)

2. **Install Node-RED:**
   Open a command prompt and run the following command to install Node-RED globally:
```bash
   npm install -g --unsafe-perm node-red
```

### Step 2: Install MySQL
Inotel uses MySQL to manage its database. Follow these steps to install MySQL:

**1.Download MySQL Installer:**
Download the MySQL Installer from the official website:  [MySQL Installer Download](https://dev.mysql.com/downloads/installer/)

**2.Run MySQL Installer:**
Run the MySQL Installer and follow the installation wizard to install MySQL Server.

**3.Configure MySQL:**
During the installation, set up a root password and create a user for Inotel. Take note of the database name, username, and password.

### Step 3: Install Other Dependencies
Depending on your system, you might need to install additional dependencies. No specific dependencies are required for a standard Windows environment.

### Step 4: Install Inotel
**1.Clone the Inotel Repository:**
Open a command prompt and run the following commands to clone the Inotel repository from GitHub:
```bash
  git clone https://github.com/AmineLadrem/MCoders-Inotel
cd inotel
```

**2. Dependencies:**
Run the following command to install the required Node.js packages:
```bash
 npm install
```


### Step 5: Configure Inotel
Follow the instructions in the Configuration section to set up and configure Inotel according to your hotel's requirements.

Congratulations! Your Inotel server is now set up and ready to go.

## 4.Configuration
Configuring your Inotel setup involves a straightforward process. Follow these steps to set up the MySQL-node in Node-RED with the necessary credentials and initiate both the Node-RED server and the React-based website.

**MySQL-node Configuration in Node-RED**
1. **Open Node-RED:**
   Access the Node-RED interface either through your web browser at [http://localhost:1880](http://localhost:1880) or using the specified URL with port **1880**.

2. **Add MySQL-node:**
   Drag and drop the MySQL-node onto the Node-RED workspace.

3. **Configure MySQL-node:**
   Double-click on the MySQL-node to open its configuration window. Enter the required details:
   - **Hostname:** localhost (or the address of your MySQL server)
   - **Port:** The port on which your MySQL server is running (default is 3306)
   - **Database:** Specify the name of your Inotel database
   - **User:** Enter the MySQL username for Inotel
   - **Password:** Provide the corresponding password for the user

4. **Deploy Changes:**
   Click the "Deploy" button in Node-RED to apply the changes.

### Subsequent Configurations
For subsequent configurations to run Node-RED and the React-based website: Execute the file **myscript.bat** which is located in the main directory of the project.
You've now completed the initial configuration by setting up Node-RED with the MySQL-node. For subsequent configurations, simply run Node-RED and the React-based website as needed.
**Server**-->[http://localhost:1880](http://localhost:1880)
**Website**-->[http://localhost:3000](http://localhost:3000)

## 5.Usage:
Now that your Inotel server is up and running, let's explore how users can interact with it. This section provides details on running the server, utilizing APIs, and other key functionalities.
### Running the server and the website :
Mentionned in Subsequent Configurations section ↑↑↑↑↑↑↑

### Exploring APIs
Inotel provides a set of APIs to interact with various features. Below are examples of how to use some of the key APIs:
**Retrieve Rooms Informations:**
Use the following API endpoint to get all informations about rooms:
```bash
 GET /roomlist
```

**Book an Available Room**
To create a new booking, use the following API endpoint:
```bash
 POST /reservation
```
### Additional Functionality
**Automated Workflows:**
Inotel supports automated workflows created with Node-RED. Explore the predefined workflows or create custom ones to enhance your hotel management processes.

**Real-time Dashboard:**
Access the real-time dashboard at [http://localhost:1880](Dashboard) to monitor key metrics and visualize data.
Feel free to explore and customize the functionalities based on your hotel's needs( Rooms , Profiles , Staff , Services , ......).

**InoBot ( The integrated chatbot)**
we have implemented a chatbot which can help the guests by answering their questions about the hotel by using an API which provides smooth and understandable discussion between the bot and the guest.

## 6.API Reference:
 ### Add Profile:
 **Method:**'POST' <br />
 **Endpoint:**'/addprofile' <br />
 **Parameters:** id , desc ( description of the profile ) <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/addprofile <br />
 **Response:** Profile Added !  ||  This profile is already in the database   <br />

 ### Delete Profile:
 **Method:**'DELETE' <br />
 **Endpoint:**'/deleteprofile' <br />
 **Parameters:** id <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/deleteprofile <br />
 **Response:** Profile Deleted ! <br />

 ### Retrieve Profiles:
 **Method:**'GET' <br />
 **Endpoint:**'/profilelist' <br />
 **Parameters:** <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/profilelist <br />
 **Response:**
 ```json
[
    {
        "id": 2,
        "description": "Manager",
        "profile_description": "Responsible for overseeing and coordinating hotel operations, ensuring efficiency and adherence to organizational policies."
    },
    {
        "id": 3,
        "description": "Admin",
        "profile_description": "Manages and maintains the overall system, including user accounts, permissions, and system configurations."
    },
    {
        "id": 4,
        "description": "Receptionist",
        "profile_description": "Front-facing role handling guest inquiries, reservations, and check-ins, providing a welcoming and efficient experience."
    },
    {
        "id": 5,
        "description": "Housekeeping",
        "profile_description": "Ensures cleanliness and order throughout the hotel, maintaining a comfortable and pleasant environment for guests."
    },
    {
        "id": 6,
        "description": "Chef",
        "profile_description": "Culinary expert responsible for menu planning, food preparation, and maintaining high-quality dining experiences."
    },
    {
        "id": 7,
        "description": "Waiter/Waitress",
        "profile_description": "Provides attentive and friendly service in the dining areas, ensuring guests have a positive and enjoyable dining experience."
    },
    {
        "id": 8,
        "description": "Security",
        "profile_description": "Ensures the safety and security of guests and property, monitoring premises and responding to incidents."
    }
]
 ```

 ### Add Staff User:
 **Method:**'POST' <br />
 **Endpoint:**'/adduser' <br />
 **Parameters:** firstname , lastname , email,birthday,phone,profile <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/adduser <br />
 **Response:** User Added ! <br />

 ### Update Staff User:
 **Method:**'PUT' <br />
 **Endpoint:**'/updateuser' <br />
 **Parameters:** Depends on what the admin will update , but it can be the firstname , lastname , email,birthday,phone,profile <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/updateuser <br />
 **Response:** User Updated ! <br />

 ### Delete Staff User:
 **Method:**'DELETE' <br />
 **Endpoint:**'/deleteuser' <br />
 **Parameters:** id <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/deleteuser <br />
 **Response:** User Deleted ! <br />

 ### Retrieve Staff User list:
 **Method:**'GET' <br />
 **Endpoint:**'/stafflist' <br />
 **Parameters:** <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/stafflist <br />
 **Response:**  
 ```json
[
    {
        "id": 7,
        "firstname": "Amine",
        "lastname": "Ladrem",
        "bday": "2002-02-11T23:00:00.000Z",
        "email": "awpxrr@gmail.com",
        "phone": "054185733",
        "start_day": "2018-05-11T23:00:00.000Z",
        "job": "Manager",
        "perms": 2
    },
    {
        "id": 8,
        "firstname": "John",
        "lastname": "Doe",
        "bday": "1989-12-31T23:00:00.000Z",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "start_day": "2022-12-31T23:00:00.000Z",
        "job": "Manager",
        "perms": 2
    },
    {
        "id": 9,
        "firstname": "Jane",
        "lastname": "Smith",
        "bday": "1985-05-14T23:00:00.000Z",
        "email": "jane.smith@example.com",
        "phone": "9876543210",
        "start_day": "2019-12-31T23:00:00.000Z",
        "job": "Admin",
        "perms": 3
    },
    {
        "id": 10,
        "firstname": "Mike",
        "lastname": "Johnson",
        "bday": "1988-08-19T23:00:00.000Z",
        "email": "mike.johnson@example.com",
        "phone": "5556667777",
        "start_day": "2020-12-31T23:00:00.000Z",
        "job": "Receptionist",
        "perms": 4
    },
    {
        "id": 11,
        "firstname": "Reception",
        "lastname": "New",
        "bday": "1995-03-09T23:00:00.000Z",
        "email": "reception.new@example.com",
        "phone": "5551234567",
        "start_day": "2019-02-14T23:00:00.000Z",
        "job": "Receptionist",
        "perms": 4
    },
    {
        "id": 12,
        "firstname": "Chef",
        "lastname": "Master",
        "bday": "1980-07-24T23:00:00.000Z",
        "email": "chef.master@example.com",
        "phone": "5559876543",
        "start_day": "2018-02-28T23:00:00.000Z",
        "job": "Chef",
        "perms": 6
    },
    {
        "id": 13,
        "firstname": "Waiter",
        "lastname": "Service",
        "bday": "1992-11-17T23:00:00.000Z",
        "email": "waiter.service@example.com",
        "phone": "5558765432",
        "start_day": "2023-04-04T23:00:00.000Z",
        "job": "Waiter/Waitress",
        "perms": 7
    },
    {
        "id": 14,
        "firstname": "Housekeeper",
        "lastname": "Clean",
        "bday": "1993-04-07T23:00:00.000Z",
        "email": "housekeeper.clean@example.com",
        "phone": "5557890123",
        "start_day": "2019-05-31T23:00:00.000Z",
        "job": "Housekeeping",
        "perms": 5
    }
]
 ```
 <br />

 ### Staff Login:
 **Method:**'POST' <br />
 **Endpoint:**'/stafflogin' <br />
 **Parameters:** username,password <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/stafflogin <br />
 **Response:** Profile Added ! <br />

 ### Add Room:
 **Method:**'POST' <br />
 **Endpoint:**'/addroom' <br />
 **Parameters:** id , name , roomnb( how many rooms in the main room ) , bednb ( how many beds in the room ) ,price <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/addroom <br />
 **Response:** Room Added ! <br />

 ### Delete Room:
 **Method:**'DELETE' <br />
 **Endpoint:**'/deleteroom' <br />
 **Parameters:** id <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/deleteroom <br />
 **Response:** Room Deleted ! <br />

 ### Retrieve Room List:
 **Method:**'GET' <br />
 **Endpoint:**'/roomlist' <br />
 **Parameters:**  <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/roomlist <br />
  **Response:** 
  ```json
[
    {
        "room_id": 1,
        "room_type": "Single Room",
        "status": 1,
        "price": 100
    },
    {
        "room_id": 4,
        "room_type": "Single Room",
        "status": 1,
        "price": 100
    },
    {
        "room_id": 7,
        "room_type": "Single Room",
        "status": 4,
        "price": 100
    },
    {
        "room_id": 10,
        "room_type": "Single Room",
        "status": 1,
        "price": 100
    },
    {
        "room_id": 2,
        "room_type": "Double Room",
        "status": 1,
        "price": 200
    },
    {
        "room_id": 5,
        "room_type": "Double Room",
        "status": 2,
        "price": 200
    },
    {
        "room_id": 8,
        "room_type": "Double Room",
        "status": 3,
        "price": 200
    },
    {
        "room_id": 3,
        "room_type": "Suite",
        "status": 4,
        "price": 300
    },
    {
        "room_id": 6,
        "room_type": "Suite",
        "status": 3,
        "price": 300
    },
    {
        "room_id": 9,
        "room_type": "Suite",
        "status": 5,
        "price": 300
    }
]
 ```
 <br />

 ### Add Rating:
 **Method:**'POST' <br />
 **Endpoint:**'/ratingpost' <br />
 **Parameters:** firstname , lastname , email , feedback <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/ratingpost <br />
 **Response:** Feedback Sent ! <br />

 ### Retrieve Ratings:
 **Method:**'GET' <br />
 **Endpoint:**'/ratinglist' <br />
 **Parameters:**  <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/ratinglist <br />
 **Response:** 
   ```json
[
    {
        "id": 1,
        "firstname": "Amine",
        "lastname": "Ladrem",
        "email": "awpxrr@gmail.com",
        "feedback": "Great Hotel !"
    }
]
 ```
<br />

 ### Available Rooms List:
 **Method:**'GET' <br />
 **Endpoint:**'/room' <br />
 **Parameters:**  <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/room <br />
 **Response:** 
   ```json
[
    {
        "name": "Suite",
        "roomnb": 2,
        "bednb": 3,
        "services": "WiFi, TV, Mini Bar, Sea View, Kitchen",
        "price": 300,
        "available_rooms": 1
    },
    {
        "name": "Double Room",
        "roomnb": 1,
        "bednb": 2,
        "services": "WiFi, TV, Mini Bar, Sea View",
        "price": 200,
        "available_rooms": 1
    }
]
 ```
<br />

 ### Add Booking:
 **Method:**'POST' <br />
 **Endpoint:**'/reservation' <br />
 **Parameters:**roomTypeId,roomId,status,firstname,lastname,bday,email,phone,typeIdCard,idCard,checkin,checkout <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/reservation <br />
 **Response:** The room has been booked !  || The room is  already booked !<br />

 ### Add Report:
 **Method:**'POST' <br />
 **Endpoint:**'/reporting' <br />
 **Parameters:**firstname,lastname,email,report <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/reporting <br />
 **Response:** The problem has been reported to administration of the hotel !<br />


 ### Reception-Booking:
 **Method:**'POST' <br />
 **Endpoint:**'/makebook' <br />
 **Parameters:**roomTypeId,roomId,status,firstname,lastname,bday,email,phone,typeIdCard,idCard,checkin,checkout <br />
 **Request Example:** https://1eba-197-204-147-131.ngrok-free.app/makebook <br />
 **Response:** The room has been booked !  || The room is  already booked !<br />
