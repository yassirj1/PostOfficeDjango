from django.db import models

class Shipments(models.Model):
	tracking_number = models.CharField(max_length=200,primary_key=True)
	customer_id = models.ForeignKey(Customer, related_name="customer")
	time_shipped = models.DateTimeField()
	reciever_address = models.ForeignKey(Address, related_name="address")
	receiver_name = models.CharField(max_length=200)
	post_office_shipped_from = models.IntegerField(max_length=5)
	date_ship = models.DateField()
	est_arrival = models.DateField()
	last_post_office = models.IntegerField(max_length=5)
	order_status = models.CharField(max_length=20)
	delivery_status = models.CharField(max_length=20)
	package_type = models.CharField(max_length=20)
	package_weight = models.IntegerField(max_length=5)
	package_rate = models.IntegerField(max_length=5)
	signature_required = models.BooleanField()
	signature_confirmed = models.BooleanField()

class Address(models.Model):
	address_id = models.AutoField(max_length=10,primary_key=True)
	street_line1 = models.CharField(max_length=50)
	street_line2 = models.CharField(max_length=50)
	street_line3 = models.CharField(max_length=50)
	street_line4 = models.CharField(max_length=50)
	city = models.CharField(max_length=20)
	state = models.IntegerField(max_length=2)
	country = models.IntegerField(max_length=4)
	zipcode = models.IntegerField(max_length=5)























