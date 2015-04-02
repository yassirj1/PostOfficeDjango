from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from PostOffice import views


urlpatterns = patterns(
	'',
	url(r'^api/', include('PostOffice.urls2')),
    url(r'^(?P<template_name>\w+)$', views.SimpleStaticView.as_view(), name='PostOffice'),
    url(r'^$', views.TemplateView.as_view(template_name='index.html')),
)


