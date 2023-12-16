import 'package:booking/home.dart';
import 'package:booking/settings.dart';
import 'package:booking/staff.dart';
import 'package:flutter/material.dart';

class Tasks extends StatefulWidget {
  final Map<String, dynamic> data;

  const Tasks({Key? key, required this.data}) : super(key: key);

  @override
  State<Tasks> createState() => _TasksState();
}

class _TasksState extends State<Tasks> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  // Define a list of housekeeping tasks
  final List<Task> tasks = [
    Task(roomNumber: 101, roomType: 'Single Room'),
    Task(roomNumber: 201, roomType: 'Double Room'),
    Task(roomNumber: 301, roomType: 'Suite'),
    Task(roomNumber: 102, roomType: 'Single Room'),
    Task(roomNumber: 202, roomType: 'Double Room'),
    Task(roomNumber: 302, roomType: 'Suite'),
    Task(roomNumber: 103, roomType: 'Single Room'),
    Task(roomNumber: 203, roomType: 'Double Room'),
    Task(roomNumber: 303, roomType: 'Suite'),
    Task(roomNumber: 104, roomType: 'Single Room'),
    Task(roomNumber: 204, roomType: 'Double Room'),
    Task(roomNumber: 304, roomType: 'Suite'),
    Task(roomNumber: 105, roomType: 'Single Room'),
    Task(roomNumber: 205, roomType: 'Double Room'),
    Task(roomNumber: 305, roomType: 'Suite'),
    Task(roomNumber: 106, roomType: 'Single Room'),
    Task(roomNumber: 206, roomType: 'Double Room'),
    Task(roomNumber: 306, roomType: 'Suite'),
    Task(roomNumber: 107, roomType: 'Single Room'),
    Task(roomNumber: 207, roomType: 'Double Room'),
    Task(roomNumber: 307, roomType: 'Suite'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Padding(
          padding: const EdgeInsets.only(left: 95.0),
          child: Text('Tasks'),
        ),
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () => _scaffoldKey.currentState?.openDrawer(),
        ),
      ),
      drawer: Drawer(
        child: Column(
          children: [
            SizedBox(height: 50),
            Image.asset('assets/logo.png', width: 150, height: 150),
            Expanded(
              child: ListView(
                children: [
                  ListTile(
                    leading: Icon(Icons.home),
                    title: Text('Home'),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => Home(
                            data: widget.data,
                          ),
                        ),
                      );
                    },
                  ),
                  ListTile(
                    leading: Icon(Icons.qr_code_scanner),
                    title: Text('Check-in'),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => Staff(
                            data: widget.data,
                          ),
                        ),
                      );
                    },
                  ),
                  ListTile(
                    leading: Icon(Icons.calendar_today),
                    title: Text('Tasks'),
                    onTap: () {
                      // Do nothing, already on the tasks page
                    },
                  ),
                  ListTile(
                    leading: Icon(Icons.settings),
                    title: Text('Settings'),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => Settings(
                            data: widget.data,
                          ),
                        ),
                      );
                    },
                  ),
                  // Add more ListTile widgets for additional menu items
                ],
              ),
            ),
            Divider(), // Add a divider between the menu items and the logout button
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Logout'),
              onTap: () {
                // Handle the Logout button tap
                // You can add the logout logic here
              },
            ),
          ],
        ),
      ),
      body: ListView.builder(
        itemCount: tasks.length,
        itemBuilder: (context, index) {
          return TaskCard(task: tasks[index]);
        },
      ),
    );
  }
}

class Task {
  final int roomNumber;
  final String roomType;

  Task({required this.roomNumber, required this.roomType});
}

class TaskCard extends StatefulWidget {
  final Task task;

  TaskCard({required this.task});

  @override
  _TaskCardState createState() => _TaskCardState();
}

class _TaskCardState extends State<TaskCard> {
  bool isCleaned = false;

  @override
  Widget build(BuildContext context) {
    // Choose the appropriate icon based on room type
    String iconPath = '';
    if (widget.task.roomType == 'Single Room') {
      iconPath = 'assets/singleroom.png';
    } else if (widget.task.roomType == 'Double Room') {
      iconPath = 'assets/doubleroom.png';
    } else if (widget.task.roomType == 'Suite') {
      iconPath = 'assets/suite.png';
    }

    return Card(
      elevation: 10,
      margin: EdgeInsets.all(8),
      child: ListTile(
        leading: Image.asset(
          iconPath,
          width: 40,
          height: 40,
        ),
        title: Text('Room ${widget.task.roomNumber}'),
        subtitle: Text(widget.task.roomType),
        trailing: ElevatedButton(
          onPressed: () {
            setState(() {
              isCleaned = !isCleaned;
            });
            // Handle room cleaning status
            // You can add your logic here
          },
          style: ElevatedButton.styleFrom(
            backgroundColor: isCleaned ? Colors.green : Colors.grey,
          ),
          child: Text(
            isCleaned ? 'Cleaned' : 'Clean',
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    );
  }
}
