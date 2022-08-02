from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import APIView
from . models import Task_Detail, Type, Client, Priority, Task, UserDetail
from . import serializers
from rest_framework.response import Response
import datetime


class GetType(APIView):
    def get(self, requests):
        get = Type.objects.all()
        getall = serializers.TypeSerializer(get, many=True)
        return Response(getall.data)


class GetTypeById(APIView):
    def get(self, requests, key):
        get = Type.objects.get(pk_bint_id=key)
        getall = serializers.TypeSerializer(get)
        return Response(getall.data)


class GetClient(APIView):
    def get(self, requests):
        get = Client.objects.all()
        getall = serializers.ClientSerializer(get, many=True)
        return Response(getall.data)


class GetClientById(APIView):
    def get(self, requests, key):
        get = Client.objects.get(pk_bint_id=key)
        getall = serializers.ClientSerializer(get)
        return Response(getall.data)


class GetPriority(APIView):
    def get(self, requests):
        get = Priority.objects.all()
        getall = serializers.PrioritySerializer(get, many=True)
        return Response(getall.data)


class GetPriorityById(APIView):
    def get(self, requests, key):
        get = Priority.objects.get(pk_bint_id=key)
        getall = serializers.PrioritySerializer(get)
        return Response(getall.data)


class GetUser(APIView):
    def get(self, requests):
        get = UserDetail.objects.values()
        return Response(get)


# class TaskFilter(APIView):
#     def get(self, requests):
#         take = Task_Detail.objects.filter(rep_date__gte=requests.data.get('from_date'), rep_date__lte=requests.data.get('to_date')).values('pk_bint_id', 'rep_date', 'vchr_title', 'vchr_remarks', 'created_date', 'fk_type',
#                                                                                                                                            'fk_type__vchr_name', 'fk_client', 'fk_client__vchr_name', 'fk_priority', 'fk_priority__vchr_name', 'fk_user_detail__vchr_name', 'status')
#         return Response(take)


class Tasks(APIView):
    def get(self, requests):
        get = Task.objects.values(
            'pk_bint_id', 'rep_date', 'vchr_title', 'vchr_remarks', 'created_date', 'fk_type', 'fk_type__vchr_name', 'fk_client', 'fk_client__vchr_name', 'fk_priority', 'fk_priority__vchr_name', 'fk_user_detail__vchr_name', 'status')

        return Response(get)

    def put(self, requests):            # __gte = greater than or equal to
        take = Task.objects.filter(rep_date__gte=requests.data.get('from_date'), rep_date__lte=requests.data.get('to_date')).values(
            'pk_bint_id', 'rep_date', 'vchr_title', 'vchr_remarks', 'created_date', 'fk_type', 'fk_type__vchr_name', 'fk_client', 'fk_client__vchr_name', 'fk_priority', 'fk_priority__vchr_name', 'fk_user_detail__vchr_name', 'status')
        return Response(take)

    def post(self, requests):
        # to add a new task data
        # task = serializers.TaskSerializer(data=requests.data)
        # print(requests.data)
        # if task.is_valid():
        #     task.save()

        # Task_Detail.objects.create(
        #     fk_task_id=requests.data['pk_bint_id'],
        #     vchr_remarks=requests.data['vchr_remarks'],
        #     date_action=time.strftime("%Y-%m-%d %H:%M"),
        #     status=requests.data['status']
        # )

        task = Task.objects.create(
            rep_date=requests.data.get('rep_date'),
            fk_type_id=int(requests.data.get('fk_type')),
            fk_client_id=int(requests.data.get('fk_client')),
            fk_priority_id=int(requests.data.get('fk_priority')),
            vchr_title=requests.data.get('vchr_title'),
            vchr_remarks=requests.data.get('vchr_remarks'),
            created_date=requests.data.get('created_date'),
            status=requests.data.get('status')
        )

        Task_Detail.objects.create(
            fk_task_id=task.pk_bint_id,
            vchr_remarks=task.vchr_remarks,
            # date_action=datetime.strftime("%Y-%m-%d %H:%M"),
            date_action=datetime.datetime.now(),
            status=task.status
        )

        return Response({'status': 1})


class GetTaskById(APIView):
    def get(self, requests, key):
        get = Task.objects.get(pk_bint_id=key)
        getall = serializers.TaskSerializer(get)
        return Response(getall.data)

    def put(self, requests, key):
        get = Task.objects.get(pk_bint_id=key)
        getall = serializers.TaskSerializer(get, requests.data)
        print(requests.data)
        if getall.is_valid():
            getall.save()
            Task_Detail.objects.create(
                fk_task_id=requests.data['pk_bint_id'],
                vchr_remarks=requests.data['vchr_remarks'],
                # date_action=datetime.strftime("%Y-%m-%d %H:%M"),
                date_action=datetime.datetime.now(),
                fk_user_detail_id=requests.data['fk_user_detail'],
                status=requests.data['status']
            )

            return Response(getall.data)
        else:
            return Response('No data added')


class GetTaskDetail(APIView):
    def get(self, requests):
        # task_detail = Task_Detail.objects.filter(fk_task).values(
        task_detail = Task_Detail.objects.values(
            'pk_bint_id', 'fk_task', 'fk_task__vchr_title', 'vchr_remarks', 'fk_user_detail__vchr_name', 'date_action', 'status')
        return Response(task_detail)


class GetTaskDetailById(APIView):
    def get(self, requests, key):
        get = Task_Detail.objects.filter(fk_task=key).values(
            'pk_bint_id', 'fk_task', 'fk_task__vchr_title', 'vchr_remarks', 'fk_user_detail__vchr_name', 'date_action', 'status')
        # getall = serializers.Task_DetailSerializer(get)
        # return Response(getall.data)
        return Response(get)
