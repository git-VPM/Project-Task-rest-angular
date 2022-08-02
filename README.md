# Project-Task-rest-angular
A project to show off foreign key usage.

•	Task creation	(Calling Type, Client & Priority from backend)
<br />•	List all tasks
<br />•	Use edit button to assign a Status & User (User called from backend)
<br />•	When Status is Rejected / Closed, then edit option is no longer available
<br />•	History button can be used to track all activities performed on a task

Django rest-framework is used as backend, Angular+NodeJS as frontend and PostgreSQL as the database.

**Project was built on:**

Python              3.10.5,
Django              4.0.5,
django-cors-headers 3.13.0,
djangorestframework 3.13.1,
psycopg2            2.9.3


Angular CLI: 12.2.17
Node: 14.19.3
Package Manager: npm 8.12.2
OS: win32 x64
<br />
@angular-devkit/architect       0.1202.17
@angular-devkit/build-angular   12.2.17
@angular-devkit/core            12.2.17
@angular-devkit/schematics      12.2.17
@angular/cdk                    12.2.0
@angular/cli                    12.2.17
@angular/material               12.2.0
@schematics/angular             12.2.17
rxjs                            6.6.7
typescript                      4.3.5

Running Backend
---------------
1. Connect database to posgress using name: task, user: postgres & password:1234 or use dbshell to add neccessary tables
2. Migrate if using pgAdmin
3. Create a superuser in-order to access the django admin page using python manage.py 'createsuperuser' command (in virtual env if django is in one).
4. Go to Django Admin and add Types, Clients, Priorities & User details (This is to be called later in frontend)
5. Run server

Running Frontend
----------------
1. Go to frontend dir and use the command npm i
2. Run server with ng serve
