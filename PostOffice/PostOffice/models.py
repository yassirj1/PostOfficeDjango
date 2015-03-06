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

class Delivery_Routes (models.Model):
	delivery_route_id = models.IntegerField(max_length=10, primary_key=True)
	zipcode = models.IntegerField(max_length=5)
	shipments_carried = models.IntegerField(max_length=7)
	driver_id = models.ForeignKey(Driver, related_name="driver")
	time_left=models.DateTimeField()
	time_returned = models.DateTimeField()
	last_location = models.CharField(max_length=50)

class Incoming_Shipments(models.Model):
	route_id = models.IntegerField(max_length=10, primary_key=True)
	post_office_shipping_from = models.IntegerField(max_length=5)
	post_office_shipping_to = models.IntegerField(max_length=5)
	route_type = models.IntegerField(max_length=5)

class Customer(models.Model):
	customer_id = models.AutoField(primary_key=True)
	phone_number = models.IntegerField(max length=10)
	first_name = models.CharField(max length=25)
	last_name = models.CharField(max length=25)
	customer_email = models.CharField(max length=50)
	date_joined = models.DateField()

class Driver(models.Model):
	driver_id = models.AutoField(primary_key=True)
	driver_ssn = models.IntegerField(max length=9)
	driver_name = models.CharField(max length=25)
	driver_phone_number = models.IntegerField(max length=10)
	drug_test_passed = models.BooleanField()
	
class Post_Office_Shipped_From(models.Model):
	HOUSTON = 01
	DALLAS = 02
	AUSTIN = 03
	SAN_ANTONIO = 04
	EL_PASO = 05
	POST_OFFICE_SHIPPED_FROM_CHOICES = (
		(HOUSTON, 77025),
		(DALLAS, 75032),
		(AUSTIN, 78721),
		(SAN_ANTONIO, 78205),
		(EL_PASO, 79922),
	)
	post_office_num = models.IntegerField(max_length=5, choices=POST_OFFICE_SHIPPED_FROM_CHOICES, default=HOUSTON, primary_key=TRUE)

class Package_Type(models.Model):
	ONE_DAY=00001
	TWO_DAY=00002
	THREE_DAY=00003
	GROUND=00004
	FREIGHT=00005
	PACKAGE_TYPE_CHOICES = (
		(ONE_DAY, 'One Day'),
		(TWO_DAY, 'Two Day'),
		(THREE_DAY, 'Three Day'),
		(GROUND, 'Ground'),
		(FREIGHT, 'Freight'),
	)
	package_code = models.IntegerField(max_length=5, choices=PACKAGE_TYPE_CHOICES, default=GROUND, primary_key=TRUE)

class Shipment_Type(models.Model):
	LAND=00010
	AIR=00020
	SEA=00030
	SHIPMENT_TYPE_CHOICES = (
		(LAND, 'Ground'),
		(AIR, 'Air'),
		(SEA, 'Sea'),
	)
	route_type_code(max_length=5, choices=SHIPMENT_TYPE_CHOICES, default=LAND)
	

class Delivery_Status(models.Model):
	Enrouted = 'EN'
	Completed = 'CO'
	Returned = 'RE'
	Damaged = 'DA'
	Delivery_Status = (
		(Enrouted, 'Enrouted'),
		(Completed, 'Completed'),
		(Returned, 'Returned'),
		(Damaged, 'Damaged')
	)
	Delivery_Status = models.CharField(max length=2, choices=Delivery_Status, default=Enrouted)

class Order_Status(models.Model):
	Pending = 'PE'
	Delivered = 'DE'
	Cancelled = 'CA'
	Order_Status = (
		(Pending, 'Pending'),
		(Delivered,'Delivered'),
		(Cancelled, 'Cancelled')
	)
	Order_Status = models.CharField(max length=2, choices=Order_Status, default=Pending)



















