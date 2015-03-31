from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns

from PostOffice import views

urlpatterns = patterns(
    '',
    url(r'^$', views.index_view, name='index_view'),
    url(r'^address/$', views.AddressView.as_view(), name='address-list'),
    url(r'^address/(?P<pk>[\d]+)/$', views.AddressInstanceView.as_view(), name = 'address-instance'),
)

urlpatterns = format_suffix_patterns(urlpatterns)