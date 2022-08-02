from django.urls import path
from .views import GetType, GetTypeById, GetClient, GetClientById, GetPriority, GetPriorityById, GetUser, Tasks, GetTaskById, GetTaskDetail, GetTaskDetailById

urlpatterns = [
    path('type', GetType.as_view()),
    path('client', GetClient.as_view()),
    path('priority', GetPriority.as_view()),
    path('user', GetUser.as_view()),
    path('task', Tasks.as_view()),
    path('taskdetail', GetTaskDetail.as_view()),
    path('type/<str:key>', GetTypeById.as_view()),
    path('client/<str:key>', GetClientById.as_view()),
    path('priority/<str:key>', GetPriorityById.as_view()),
    path('task/<str:key>', GetTaskById.as_view()),
    path('taskdetail/<str:key>', GetTaskDetailById.as_view()),
]
