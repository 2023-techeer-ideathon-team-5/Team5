from django.shortcuts import render

from http.client import HTTPResponse
from django.http import JsonResponse

from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response

from rest_framework.decorators import api_view
from rest_framework.views import APIView

from django.utils import timezone

from .models import members

@api_view(['POST'])
def create_member(request):
    name = request.data.get('name')
    password = request.data.get('password')
    university = request.data.get('university')
    open_chat_link = request.data.get('open_chat_link')

    # Perform any additional validation or data processing here

    member = members(name=name, password=password, university=university, open_chat_link=open_chat_link)
    member.save()

    return Response(status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_member(request, member_id):
    try:
        member = members.objects.get(id=member_id)
        serialized_data = {
            'id': member.id,
            'name': member.name,
            'university': member.university,
            'open_chat_link': member.open_chat_link,
            # Include any other relevant fields
        }
        return Response(serialized_data, status=status.HTTP_200_OK)
    except members.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def login(request):
    name = request.data.get('name')
    password = request.data.get('password')

    try:
        member = members.objects.get(name=name, password=password)
        serialized_data = {
            # 'id': member.id,
            'name': member.name,
            'university': member.university,
            'open_chat_link': member.open_chat_link,
            # Include any other relevant fields
        }
        return Response(serialized_data, status=status.HTTP_200_OK)
    except members.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

