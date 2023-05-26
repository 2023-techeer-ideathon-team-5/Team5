from django.urls import path
from . import views

urlpatterns = [
    path('write', views.write_feedback),
    path('<member_id>', views.get_feedbacks),
]