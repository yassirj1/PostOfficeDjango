from django.shortcuts import render, render_to_response, get_object_or_404
from rest_framework import generics, permissions
from django.views.generic import TemplateView
from django.conf import settings
from PostOffice.models import Address, Shipments, Customer, Driver, Incoming_Shipments, Delivery_Routes
from django.contrib.auth.models import User
from PostOffice.serializers import AddressSerializer, ShipmentsSerializer, CustomerSerializer, DriverSerializer, IncomingShipmentsSerializer, DeliveryRoutesSerializer
class SimpleStaticView(TemplateView):
    def get_template_names(self):
        return [self.kwargs.get('template_name') + ".html"]

    def get(self, request, *args, **kwargs):
        return super(SimpleStaticView, self).get(request, *args, **kwargs)

def index_view(request):
    """
    Ensure the user can only see their own profiles.
    """
    response = {
        'addresses': Address.objects.all(),
        'shipments': Shipments.objects.all(),
    }
    return render(request, 'base.html', response)

class AddressView(generics.ListCreateAPIView):
    """
    Returns a list of all Addresses.
    """
    queryset = Address.objects.all()
    model = Address
    serializer_class = AddressSerializer
    

class AddressInstanceView(generics.RetrieveAPIView):
    """
    Returns a single author.
    Also allows updating and deleting
    """
    queryset = Address.objects.all()
    model = Address
    serializer_class = AddressSerializer

class ShipmentsView(generics.ListCreateAPIView):
    """
    Returns a list of all Addresses.
    """
    queryset = Shipments.objects.all()
    model = Shipments
    serializer_class = ShipmentsSerializer

class ShipmentsInstanceView(generics.RetrieveAPIView):
    """
    Returns a single author.
    Also allows updating and deleting
    """
    queryset = Shipments.objects.all()
    model = Shipments
    serializer_class = ShipmentsSerializer
class CustomerView(generics.ListCreateAPIView):
	"""
	Returns a list of all Customers
	"""
	queryset = Customer.objects.all()
	model = Customer
	serializer_class= CustomerSerializer

class CustomerInstanceView(generics.RetrieveAPIView):
	queryset = Customer.objects.all()
	model = Customer
	serializer_class = CustomerSerializer	

class IncomingShipmentsView(generics.ListCreateAPIView):
	"""
	Returns a list of all Customers
	"""
	queryset = Incoming_Shipments.objects.all()
	model = Incoming_Shipments
	serializer_class= IncomingShipmentsSerializer

class IncomingShipmentsInstanceView(generics.RetrieveAPIView):
	queryset = Incoming_Shipments.objects.all()
	model = Incoming_Shipments
	serializer_class = IncomingShipmentsSerializer

class DriverView(generics.ListCreateAPIView):
	"""
	Returns a list of all Customers
	"""
	queryset = Driver.objects.all()
	model = Driver
	serializer_class= DriverSerializer

class DriverInstanceView(generics.RetrieveAPIView):
	queryset = Driver.objects.all()
	model = Driver
	serializer_class = DriverSerializer

class DeliveryRoutesView(generics.ListCreateAPIView):
	"""
	Returns a list of all Customers
	"""
	queryset = Delivery_Routes.objects.all()
	model = Delivery_Routes
	serializer_class= DeliveryRoutesSerializer

class DeliveryRoutesInstanceView(generics.RetrieveAPIView):
	queryset = Delivery_Routes.objects.all()
	model = Delivery_Routes
	serializer_class = DeliveryRoutesSerializer


# def address_instance_view(request, pk):
#     address = get_object_or_404(Address, address_id=pk)
#     return render_to_response('address_instance.html', {"address" : address}, context_instance=RequestContext(request))