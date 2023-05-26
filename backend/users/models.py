from django.utils import timezone
from django.db import models

class users(models.Model):
    id = models.BigIntegerField(primary_key=True, null=False)
    name = models.CharField(max_length=20, null=False)
    password = models.CharField(max_length=1024, null=False)
    university = models.CharField(max_length=1024, null=False)
    open_chat_link = models.CharField(max_length=1024, null=False)
    created_at = models.DateTimeField(default=timezone.now, null=False)
    updated_at = models.DateTimeField(default=timezone.now, null=False)
    is_deleted = models.IntegerField(null=False, default=0)

    class Meta:
        db_table = 'users'