from rest_framework import serializers
from django.contrib.auth.models import User
from PostOffice.models import (
    Shipments,
    Customer,
    Delivery_Routes,
    Address,
    Driver,
    Incoming_Shipments
)



class CustomerOutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id', 'phone_number', 'first_name', 'last_name', 'customer_email', 'date_joined')

class CustomerInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('phone_number', 'first_name', 'last_name', 'customer_email')

class AddressOutputSerializer(serializers.ModelSerializer):
    customer_id = CustomerInputSerializer()
    class Meta:
        model = Address
        fields = ('address_id', 'customer_id','street_line1','street_line2',
        'street_line3','street_line4','city','state','country','zipcode')

class AddressInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('address_id', 'customer_id','street_line1','street_line2',
        'street_line3','street_line4','city','state','country','zipcode')

class ShipmentsOutputSerializer(serializers.ModelSerializer):
    customer_id = CustomerInputSerializer()
    reciever_address = AddressInputSerializer()
    class Meta:
        model = Shipments
        fields = ('shipment_id', 'tracking_number', 'customer_id', 'time_shipped', 'reciever_address', 'receiver_name', 'post_office_shipped_from','date_ship', 'est_arrival', 'last_post_office', 'order_status', 'delivery_status', 'package_type', 'package_weight', 'package_rate', 'signature_required', 'signature_confirmed')

class ShipmentsInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipments
        fields = ('shipment_id', 'tracking_number', 'customer_id', 'time_shipped', 'reciever_address', 'receiver_name', 'post_office_shipped_from','date_ship', 'est_arrival', 'last_post_office', 'order_status', 'delivery_status', 'package_type', 'package_weight', 'package_rate', 'signature_required', 'signature_confirmed')

class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ('driver_id','driver_ssn','driver_name','driver_phone_number',
        'drug_test_passed')

class DeliveryRoutesSerializer(serializers.ModelSerializer):
    driver_id = DriverSerializer()
    class Meta:
        model = Delivery_Routes
        fields = ('delivery_route_id', 'zipcode', 'shipments_carried', 'driver_id', 'time_left', 'time_returned', 'last_location')

class IncomingShipmentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Incoming_Shipments
		fields = ('route_id', 'post_office_shipping_from', 'post_office_shipping_to', 'route_type')




