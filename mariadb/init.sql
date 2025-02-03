CREATE DATABASE myapp;
CREATE USER 'remixuser'@'%' IDENTIFIED BY 'remixpassword';
GRANT ALL PRIVILEGES ON myapp.* TO 'remixuser'@'%';
FLUSH PRIVILEGES;