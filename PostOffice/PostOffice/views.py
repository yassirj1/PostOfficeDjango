from django.shortcuts import render
from rest_framework import generics

from PostOffice.models import Address

from PostOffice.serializers import AddressSerializer

def index_view(request):
    """
    Ensure the user can only see their own profiles.
    """
    response = {
        'addresses': Address.objects.all(),
    }
    return render(request, 'index.html', response)

class AddressView(generics.ListCreateAPIView):
    """
    Returns a list of all Addresses.
    """
    model = Address
    serializer_class = AddressSerializer

class AddressInstanceView(generics.RetrieveAPIView):
    """
    Returns a single author.
    Also allows updating and deleting
    """
    model = Address
    serializer_class = AddressSerializer
