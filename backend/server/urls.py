from django.urls import path
from .views import  client_detail, client_list

urlpatterns = [
    path('client/', client_list, name='client_list'),
    path('client/<int:id>/', client_detail, name='client_detail'), 
]