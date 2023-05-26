from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['member', 'title', 'content', 'type', 'restaurant_name', 'created_at', 'delivery_tip', 'max_waiting_time', 'status', 'apply_member']
