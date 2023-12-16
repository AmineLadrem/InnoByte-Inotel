import 'dart:convert';

import 'package:booking/home.dart';
import 'package:booking/settings.dart';
import 'package:booking/task.dart';
import 'package:flutter/material.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:http/http.dart' as http;

String dataText = "Please scan the QR code to check-in";
int staff_id = 0;

class Staff extends StatefulWidget {
  final Map<String, dynamic> data;

  const Staff({Key? key, required this.data}) : super(key: key);

  @override
  State<Staff> createState() => _StaffState();
}

class _StaffState extends State<Staff> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  late QRViewController controller;
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');
  String qrText = "Scan a QR Code";

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    setState(() {
      staff_id = widget.data['id'];
    });
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
                      //push to task page
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => Tasks(
                            data: widget.data,
                          ),
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
      body: Column(
        children: [
          Image.asset('assets/logo2.png', width: 130, height: 130),
          Padding(
            padding: const EdgeInsets.only(top: 100.0),
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Color(0xFF2F7BEB),
                    width: 5,
                  ),
                ),
                height: 300,
                width: 300,
                child: QRViewExample(
                  qrKey: qrKey,
                  onScan: (data) {
                    setState(() {
                      qrText = data;
                      dataText = "Welcome , Have a nice day.";
                      Fluttertoast.showToast(
                        backgroundColor: Colors.green,
                        msg: 'Check-in successful',
                        toastLength: Toast.LENGTH_LONG,
                        gravity: ToastGravity.BOTTOM,
                        timeInSecForIosWeb: 1,
                      );
                    });
                  },
                ),
              ),
            ),
          ),
          SizedBox(height: 20),
          Text(
            'Welcome, ${widget.data['firstname']} ${widget.data['lastname']}',
            style: TextStyle(
              fontSize: 16,
              color: Colors.black,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}

class QRViewExample extends StatefulWidget {
  final Function(String) onScan;
  final GlobalKey qrKey;

  const QRViewExample({Key? key, required this.qrKey, required this.onScan})
      : super(key: key);

  @override
  State<StatefulWidget> createState() => _QRViewExampleState();
}

class _QRViewExampleState extends State<QRViewExample> {
  QRViewController? controller;
  bool scanned = false; // Flag to track whether a QR code has been scanned

  @override
  Widget build(BuildContext context) {
    return QRView(
      key: widget.qrKey,
      onQRViewCreated: _onQRViewCreated,
    );
  }

  void _onQRViewCreated(QRViewController controller) {
    setState(() {
      this.controller = controller;
    });

    controller.scannedDataStream.listen((scanData) {
      if (!scanned) {
        setState(() {
          scanned = true;
        });

        widget.onScan(scanData.code!);
        print(scanData.code!);
        _sendPostRequest(scanData.code!);
      }
    });
  }

  Future<void> _sendPostRequest(String url) async {
    try {
      final response = await http.post(
        Uri.parse('https://1eba-197-204-147-131.ngrok-free.app/staffcheckin'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'staff_id': staff_id}),
      );

      if (mounted) {
        if (response.statusCode == 200) {
          Fluttertoast.showToast(
            backgroundColor: Colors.green,
            msg: 'Check-in successful',
            toastLength: Toast.LENGTH_LONG,
            gravity: ToastGravity.BOTTOM,
            timeInSecForIosWeb: 1,
          );

          // Update the dataText in the parent widget
          setState(() {
            dataText = 'Check-in successful. Please scan the QR code again.';
          });
        } else {
          Fluttertoast.showToast(
            backgroundColor: Colors.red,
            msg: 'Check-in failed. Status Code: ${response.statusCode}',
            toastLength: Toast.LENGTH_LONG,
            gravity: ToastGravity.BOTTOM,
            timeInSecForIosWeb: 1,
          );
        }
      }
    } catch (e) {
      print("Error making POST request: $e");

      if (mounted) {
        Fluttertoast.showToast(
          backgroundColor: Colors.red,
          msg: 'Check-in failed. Error: $e',
          toastLength: Toast.LENGTH_LONG,
          gravity: ToastGravity.BOTTOM,
          timeInSecForIosWeb: 1,
        );
      }
    }
  }

  @override
  void dispose() {
    controller?.dispose();
    super.dispose();
  }
}
