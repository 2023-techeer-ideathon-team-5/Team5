from django.urls import path
from . import views

urlpatterns = [
    path('', views.createpost, name='post_create'),
    path('/updates', views.updatepost, name='post_update')
]