from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='member',
            fields=[
                ('id', models.BigIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=1024)),
                ('university', models.CharField(max_length=1024, null=False)),
                ('open_chat_link', models.CharField(max_length=1024, null=False)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_deleted', models.IntegerField(default=0)),
            ],
            options={
                'db_table': 'member',
            },
        ),
        migrations.CreateModel(
            name='post',
            fields=[
                ('id', models.BigIntegerField(primary_key=True, serialize=False)),
                ('user_id', models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, related_name='member', to='users.member')),
                ('title', models.CharField(max_length=1024, null=False)),
                ('type', models.CharField(max_length=1024, null=False)),
                ('restaurant_name', models.CharField(max_length=1024, null=False)),
                ('content', models.CharField(max_length=1024, null=False)),
                ('delivery_tip', models.BigIntegerField(max_length=1024, null=False)),
                ('max_wationg_time', models.BigIntegerField(max_length=1024, null=False)),
                ('status', models.CharField(max_length=1024, null=False)),
                ('apply_member_id', models.BigIntegerField(max_length=1024, null=False)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_deleted', models.IntegerField(default=0)),
            ],
            options={
                'db_table': 'post',
            },
        ),
    ]
