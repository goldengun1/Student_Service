# Student Service
Student service implementation

This is web server for the student service. It hase various functionality like preview exams,tasks,grades etc.
The server allows you to create or delete your account,and by doing so you will have your account created or permanently deleted from the database.

It uses NodeJS server with MongoDB database managment system. Both Node(npm) and Mongo must be installed on system in order to work.

This was a faculty project for course "Introduction into Web and Internet technologies".

# Setup guide
**init.sh** script will build and install npm packages and create temporary folder for modules called "node_modules", and also create a database.
After using clean project with **clean.sh** script which will remove temporary "node_modules" folder, and drop database so it won't take up space.
To run server start "server.js" via node with **"node server.js"**

**NOTE**
By default the .sh files will NOT have permissions for executing, so first you will need to make them executable by running **"chmod +x *.sh"**.
After that you can run **"./init.sh"** to buld, run server, and after **"./clean.sh"** to clean everything.

# Preview

![Selection_001](https://user-images.githubusercontent.com/56194090/162856840-3c5c9896-118b-43b3-bd3d-6500dfe3a960.png)

![Selection_002](https://user-images.githubusercontent.com/56194090/162856851-1f662cb2-c677-48e8-b11e-33bfbc2e3798.png)

<hr>
