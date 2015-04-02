from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from PostOffice import views





urlpatterns = patterns(
    '',

    #	url(r'^$', views.index_view, name='index_view'),
    url(r'^addresses/$', views.AddressView.as_view(), name='address-list'),
    url(r'^addresses/(?P<pk>[\d]+)/$', views.AddressInstanceView.as_view(), name = 'address-instance'),

    url(r'^shipments/$', views.ShipmentsView.as_view(), name='shipments-list'),
    url(r'^shipments/(?P<pk>[\d]+)/$', views.ShipmentsInstanceView.as_view(), name = 'shipments-instance'),

    
)

basepatterns = patterns(
	'',
	url(r'^api/', include(urlpatterns) ),
    url(r'^(?P<template_name>\w+)$', views.SimpleStaticView.as_view(), name='PostOffice'),
    url(r'^$', views.TemplateView.as_view(template_name='index.html')),
)




urlpatterns = format_suffix_patterns(urlpatterns)	