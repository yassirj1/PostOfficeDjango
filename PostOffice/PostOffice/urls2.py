from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
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


	url(r'^customers/$', views.CustomerView.as_view(), name='customer-list'),
    url(r'^customers/(?P<pk>[\d]+)/$', views.CustomerInstanceView.as_view(), name = 'customer-instance'),


	url(r'^drivers/$', views.DriverView.as_view(), name='driver-list'),
    url(r'^drivers/(?P<pk>[\d]+)/$', views.DriverInstanceView.as_view(), name = 'driver-instance'),


	url(r'^deliveryroutes/$', views.DeliveryRoutesView.as_view(), name='deliveryroute-list'),
    url(r'^deliveryroutes/(?P<pk>[\d]+)/$', views.DeliveryRoutesInstanceView.as_view(), name = 'deliveryroute-instance'),


	url(r'^incomingshipments/$', views.IncomingShipmentsView.as_view(), name='incomingshipment-list'),
    url(r'^incomingshipments/(?P<pk>[\d]+)/$', views.IncomingShipmentsInstanceView.as_view(), name = 'incomingshipment-instance'),

    

)