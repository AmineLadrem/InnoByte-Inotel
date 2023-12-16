import 'package:staff/home.dart';
import 'package:staff/staff.dart';
import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  TextEditingController usernameController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    Future<void> _login(
        BuildContext context, String username, String password) async {
      final url =
          Uri.parse('https://1eba-197-204-147-131.ngrok-free.app/stafflogin');
      print('button pressed');
      try {
        final response = await http.post(
          url,
          body: {'username': username, 'password': password},
        );

        if (response.statusCode == 200) {
          // Successful login
          final Map<String, dynamic> responseData = json.decode(response.body);
          // Navigate to Staff interface with data
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => Home(data: responseData),
            ),
          );
        } else {
          // Handle login failure
          // You can show an error message or handle it as needed
        }
      } catch (e) {
        // Handle errors
        print("Error making login request: $e");
      }
    }

    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
            child: Column(
          children: [
            SizedBox(height: 125),
            Image.asset('assets/logo.png', width: 300, height: 300),
            // login form
            Container(
              padding: EdgeInsets.all(10),
              child: Column(
                children: [
                  TextField(
                    controller: usernameController,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderSide: BorderSide(color: Color(0xFF2F7BEB)),
                      ),
                      labelText: 'Username',
                      labelStyle: TextStyle(color: Color(0xFF2F7BEB)),
                    ),
                    style: TextStyle(color: Color(0xFF2F7BEB)),
                  ),
                  SizedBox(height: 10),
                  TextField(
                    controller: passwordController,
                    obscureText: true,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderSide: BorderSide(color: Color(0xFF2F7BEB)),
                      ),
                      labelText: 'Password',
                      labelStyle: TextStyle(color: Color(0xFF2F7BEB)),
                    ),
                    style: TextStyle(color: Color(0xFF2F7BEB)),
                  ),
                  SizedBox(height: 10),
                  ElevatedButton(
                    onPressed: () {
                      _login(context, usernameController.text,
                          passwordController.text);
                    },
                    child: Text(
                      'Login',
                      style: TextStyle(color: Color(0xFF2F7BEB)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        )),
      ),
    );
  }
}
