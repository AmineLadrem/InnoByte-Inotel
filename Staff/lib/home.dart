import 'package:booking/settings.dart';
import 'package:booking/staff.dart';
import 'package:booking/task.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  final Map<String, dynamic> data;

  const Home({Key? key, required this.data}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
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
                          builder: (context) => Home(data: widget.data),
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
                          builder: (context) => Staff(data: widget.data),
                        ),
                      );
                    },
                  ),
                  ListTile(
                    leading: Icon(Icons.calendar_today),
                    title: Text('Tasks'),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => Tasks(data: widget.data),
                        ),
                      );
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
      body: Center(child: Text('Welcome ${widget.data['firstname']}')),
    );
  }
}
