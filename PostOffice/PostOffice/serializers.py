from rest_framework import serializers

from PostOffice.models import (
    Shipments,
    Customer,
    Delivery_Routes,
    Address,
    Driver,
    Incoming_Shipments
)

class ShipmentsSerializer(serializers.ModelSerializer):
    customer_id = CustomerSerializer(many=True)
    reciever_address = AddressSerializer(many=True)
    class Meta:
        model = Shipments
        fields = ('tracking_number', 'customer_id', 'time_shipped', 'reciever_address', 'receiver_name', 'post_office_shipped_from','date_ship', 'est_arrival', 'last_post_office', 'order_status', 'delivery_status', 'package_type', 'package_weight', 'package_rate', 'signature_required', 'signature_confirmed')

 class DeliveryRoutesSerializer(serializers.ModelSerializer):
    driver_id = DriverSerializer(many=True)
    class Meta:
        model = Delivery_Routes
        fields = ('delivery_route_id', 'zipcode', 'shipments_carried', 'driver_id', 'time_left', 'time_returned', 'last_location')

class AddressSerializer(serializers.ModelSerializer):
		
	
    class Meta:
        model = Address
        fields = ('adress_id','street_line1','street_line2',
		'street_line3','street_line4','city','state','country','zipcode')
		
class DriverSerializer(serializers.ModelSerializer):

	class Meta:
	model = Driver
	fields = ('driver_id','driver_ssn','driver_name','driver_phone_number',
	'drug_test_passed')			
				
class Incoming_ShipmentsSerializer(serializers.ModelSerializer):
	"""
	Serializing all the Incoming_shipments
	"""
	class Meta:
		model = Incoming_Shipments
		fields = ('route_id', 'post_office_shipping_from', 'post_office_shipping_to', 'route_type')

class CustomerSerializer(serializers.ModelSerializer):
	"""
	Serializing all the Customer
	"""
	class Meta:
		model = Customer
		fields = ('customer_id', 'phone_number', 'first_name', 'last_name', 'customer_email', 'date_joined')