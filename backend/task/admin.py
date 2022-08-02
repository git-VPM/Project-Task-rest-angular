from django.contrib import admin
from .models import Task_Detail, Type, Client, Priority, Task, UserDetail

# Register your models here.

myModels = [Type, Client, Priority, Task, UserDetail, Task_Detail]

admin.site.register(myModels)
