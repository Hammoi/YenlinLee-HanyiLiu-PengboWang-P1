APCSP Web Project

A website explaining the rules of various sports and a system allowing users to "like" their own sports for Mr. Millard's APCSP class.
- how to play sports
- badminton, basketball, football, tennis


Web Master - Hanyi Liu

Database Specialist - Yenlin Lee

Content Specialist - Pengbo Wang

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
	liked varchar(20)
);
```
5. Press "Go."
6. Now run app.js with node.js using "node app.js" in terminal/command prompt (make sure you're in the right directory).
