# APCSP Web Project

A website explaining the rules of various sports and a system allowing users to "like" their own sports for Mr. Millard's APCSP class.
- how to play sports
- badminton, basketball, football, tennis

### Collaborators
Web Master - Hanyi Liu

Database Specialist - Yenlin Lee

Content Specialist - Pengbo Wang

### Website Content Docs
Researched by content specialist, Pengbo Wang

https://docs.google.com/document/d/1ugMzinPQUe8NZBrBuHR_H-OkRXn9gIdM_gbdgqAxrwQ/edit?usp=sharing

(must be using fusdk12 account)

### Project Information
- Uses node.js to implement required modules 
- Uses the express library to implement the routing of the web pages
- Uses express-sessions to keep the user logged in throughout the website
- Uses the mysql library to serve as middleware to connect the website with the SQL server
- Uses css and js to animate the website
- Uses ejs (embedded java-script, basically html) to convert html pages to js (for node.js to read)

## Setup:
1. Download XAMPP and start the "MySQL Database"
2. Once started, go to "localhost" and click on "phpMyAdmin" on the top right.
3. Then click "SQL."
4. Set up database with this:
```
CREATE DATABASE IF NOT EXISTS website;
USE website;
CREATE TABLE users ( 
	username varchar(20),
	password varchar(20),
	liked varchar(4)
);
```
5. Press "Go."
6. Now run app.js with node.js using "node app.js" in terminal/command prompt (make sure you're in the right directory).
