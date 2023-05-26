from django.utils import timezone
from django.db import models

class Feedback(models.Model):
    # id = models.BigIntegerField(primary_key=True, null=False)
    # id = models.AutoField(primary_key=True)
    member_id = models.IntegerField(max_length=20, null=False)
    content = models.CharField(max_length=1024, null=False)
    rating = models.BooleanField()
    created_at = models.DateTimeField(default=timezone.now, null=False)

    class Meta:
        db_table = 'feedback'