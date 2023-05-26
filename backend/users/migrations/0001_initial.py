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
    ]
