from rest_framework.serializers import ModelSerializer
from .models import Post
class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content', 'type', 'restaurant_name', 'created_at', 'delivery_tip', 'max_waiting_time', 'status', 'apply_member']