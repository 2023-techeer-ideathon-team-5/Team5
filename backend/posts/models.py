from django.db import models
from django.conf import settings

class Post(models.Model):
    member = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='posts')
    title = models.CharField(max_length=200)
    content = models.TextField()
    type = models.BooleanField() 
    restaurant_name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    delivery_tip = models.IntegerField()
    max_waiting_time = models.IntegerField()
    status = models.BooleanField() 
    apply_member = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name='applied_posts')

    def __str__(self):
        return self.title
