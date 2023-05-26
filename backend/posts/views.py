import logging
from rest_framework.views import APIView, exceptions
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import api_view  # @api_view 사용 가능
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse  # json형으로 반환
from .models import Post
from .serializers import PostSerializer
from pprint import pprint

@api_view(['POST'])
def createpost(request):
    try:
        post = Post()
        post.title = request.data.get('title')
        post.type = request.data.get('type')
        post.restaurant_name = request.data.get('restaurant_name')
        post.content = request.data.get('content')
        post.delivery_tip = request.data.get('delivery_tip')
        post.max_waiting_time = request.data.get('max_waiting_time')
        post.status = request.data.get('status')
        post.apply_member = request.data.get('apply_member')
        post.save()
        return JsonResponse(status=status.HTTP_200_OK)
    except Post.DoesNotExist as e:
        logging.error(f"post_id: {id} does not exist")
        return JsonResponse({"error": "Error occurred"})
    
@api_view(['PUT'])
def updatepost(request):
    try:
        post_id = request.data.get('post_id')
        post = Post.objects.filter(id=post_id)
        post.title = request.data.get('title')
        post.type = request.data.get('type')
        post.restaurant_name = request.data.get('restaurant_name')
        post.content = request.data.get('content')
        post.delivery_tip = request.data.get('delivery_tip')
        post.max_waiting_time = request.data.get('max_waiting_time')
        post.status = request.data.get('status')
        post.apply_member = request.data.get('apply_member')
        return JsonResponse({}, status=status.HTTP_200_OK)
    except Post.DoesNotExist as e:
        logging.error(f"post_id: {id} does not exist")
        return JsonResponse({"error": "Error occurred"})
# ...

