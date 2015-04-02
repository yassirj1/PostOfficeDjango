from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from PostOffice import views



urlpatterns = patterns(
    '',

    url(r'^addresses/$', views.AddressView.as_view(), name='address-list'),
    url(r'^addresses/(?P<pk>[\d]+)/$', views.AddressInstanceView.as_view(), name = 'address-instance'),

	url(r'^shipments/$', views.ShipmentsView.as_view(), name='shipments-list'),
    url(r'^shipments/(?P<pk>[\d]+)/$', views.ShipmentsInstanceView.as_view(), name = 'shipments-instance'),

   
)