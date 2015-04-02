from django.shortcuts import render, render_to_response, get_object_or_404
from rest_framework import generics

from PostOffice.models import Address, Shipments

from PostOffice.serializers import AddressSerializer, ShipmentsSerializer

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

# def address_instance_view(request, pk):
#     address = get_object_or_404(Address, address_id=pk)
#     return render_to_response('address_instance.html', {"address" : address}, context_instance=RequestContext(request))