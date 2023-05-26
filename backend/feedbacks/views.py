from django.shortcuts import render

from http.client import HTTPResponse
from django.http import JsonResponse

from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response

from rest_framework.decorators import api_view
from rest_framework.views import APIView

from django.utils import timezone

from .models import Feedback
# from users.models import members


@api_view(['GET'])
def get_feedbacks(request, member_id):
    feedbacks = Feedback.objects.filter(member_id=member_id)
    serialized_data = []
    for feedback in feedbacks:
        serialized_data.append({
            'id': feedback.id,
            'member_id': feedback.member_id,
            'content': feedback.content,
            'rating': feedback.rating,
            'created_at': feedback.created_at
        })
    return Response(serialized_data, status=status.HTTP_200_OK)

@api_view(['POST'])
def write_feedback(request):
    member_id = request.data.get('member_id')
    content = request.data.get('content')
    rating = request.data.get('rating')
    created_at = timezone.now()

    feedback = Feedback(member_id=member_id, content=content, rating=rating, created_at=created_at)
    feedback.save()
    return Response(status=status.HTTP_200_OK)