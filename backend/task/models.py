from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Type(models.Model):
    pk_bint_id = models.BigAutoField(primary_key=True)
    vchr_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'type'

    def __str__(self):
        return self.vchr_name


class Client(models.Model):
    pk_bint_id = models.BigAutoField(primary_key=True)
    vchr_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'client'

    def __str__(self):
        return self.vchr_name


class Priority(models.Model):
    pk_bint_id = models.BigAutoField(primary_key=True)
    vchr_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'priority'

    def __str__(self):
        return self.vchr_name


class UserDetail(models.Model):
    pk_bint_id = models.BigAutoField(primary_key=True)
    vchr_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'user_detail'

    def __str__(self):
        return self.vchr_name


class Task(models.Model):
    pk_bint_id = models.BigAutoField(primary_key=True)
    rep_date = models.DateField(blank=True, null=True)
    fk_type = models.ForeignKey(
        'Type', models.DO_NOTHING, blank=True, null=True)
    fk_client = models.ForeignKey(
        'Client', models.DO_NOTHING, blank=True, null=True)
    fk_priority = models.ForeignKey(
        'Priority', models.DO_NOTHING, blank=True, null=True)
    vchr_title = models.CharField(max_length=50)
    vchr_remarks = models.CharField(max_length=1000)
    created_date = models.DateTimeField(blank=True, null=True)  # not used
    fk_user_detail = models.ForeignKey(
        'UserDetail', models.DO_NOTHING, db_column='fk_user_detail', blank=True, null=True)
    status = models.IntegerField(default=0)

    class Meta:
        db_table = 'task'

    def __str__(self):
        return self.vchr_title


class Task_Detail(models.Model):
    pk_bint_id = models.BigAutoField(primary_key=True)
    fk_task = models.ForeignKey(
        'Task', models.DO_NOTHING, blank=True, null=True)
    vchr_remarks = models.CharField(max_length=1000)
    fk_user_detail = models.ForeignKey(
        'UserDetail', models.DO_NOTHING, db_column='fk_user_detail', blank=True, null=True)
    date_action = models.DateTimeField(blank=True, null=True)
    status = models.IntegerField(default=0)

    def __str__(self):
        return self.vchr_remarks


# create table type(pk_bint_id BIGSERIAL PRIMARY KEY,vchr_name varchar(50) not null);

# insert into type (vchr_name) values('Bug');
# insert into type (vchr_name) values('Feature');
# insert into type (vchr_name) values('CR');


# create table client(pk_bint_id BIGSERIAL PRIMARY KEY,vchr_name varchar(50) not null);

# insert into client (vchr_name) values('myG');
# insert into client (vchr_name) values('Oxygen');
# insert into client (vchr_name) values('Nandilath');


# create table priority (pk_bint_id BIGSERIAL PRIMARY KEY,vchr_name varchar(50) not null);

# insert into priority (vchr_name) values('Critical');
# insert into priority (vchr_name) values('Medium');
# insert into priority (vchr_name) values('Low');

# create table task (pk_bint_id BIGSERIAL PRIMARY KEY, rep_date date,fk_type_id BIGINT REFERENCES type(pk_bint_id), fk_client_id BIGINT REFERENCES client(pk_bint_id), fk_priority_id BIGINT REFERENCES priority(pk_bint_id), vchr_title varchar(50) not null,vchr_remarks varchar(1000) not null, created_date timestamp);

# vchr_name varchar(50) not null);
