from .models import Task_Detail, Type, Client, Priority, Task
from rest_framework.serializers import ModelSerializer


class TypeSerializer(ModelSerializer):

    class Meta:
        model = Type
        fields = '__all__'


class ClientSerializer(ModelSerializer):

    class Meta:
        model = Client
        fields = '__all__'


class PrioritySerializer(ModelSerializer):

    class Meta:
        model = Priority
        fields = '__all__'


class TaskSerializer(ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'


class Task_DetailSerializer(ModelSerializer):

    class Meta:
        model = Task_Detail
        fields = '__all__'
