
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
