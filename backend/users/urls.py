from django.urls import path
from . import views

urlpatterns = [
    path('register', views.create_member),
    path('<member_id>', views.get_member),
    path('login',views.login),
]