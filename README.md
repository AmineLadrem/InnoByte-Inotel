# Inotel - Team MCoders
![alt text](https://github.com/AmineLadrem/MCoders-Inotel/blob/main/Booking/assets/logo3.png?raw=true)
 ## 1.Overview
   Hello and welcome to Inotel's documentation! We're here to make your experience as smooth as possible. 
    Whether you're exploring our booking features, understanding booking synchronization, or getting the hang of HR management, this documentation is your guide to success.
  ### Booking Made Easy
   Manage reservations, check-ins, and check-outs effortlessly. Our system is designed for flexibility, making guest interactions and staff workflows a breeze.
  ### Seamless Synchronization
   Even if the network connection drops, our system ensures uninterrupted service. We've got smart synchronization to handle any bumps in the road.
  ### Effortless HR Management
   Streamline HR tasks with ease. Handle staff profiles, attendance, and assignments seamlessly to keep your workforce organized and productive.


## 5.API Reference:
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
 **Response:** Profile Added ! <br />

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
