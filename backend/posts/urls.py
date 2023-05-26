from django.urls import path
from .views import PostCreateView

urlpatterns = [
    path('api/v1/post', PostCreateView.as_view(), name='post_create'),
]
