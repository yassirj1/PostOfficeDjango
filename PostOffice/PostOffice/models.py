from django.db import models
from datetime import datetime, timedelta
import random, string

POST_OFFICE_SHIPPED_FROM = (
		(77025, "Houston"),
		(75032, "Dallas"),
		(78721, "Austin"),
		(78205, "San Antonio"),
		(79922, "El Paso"),
	)

PACKAGE_TYPE = (
		(1, 'One Day'),
		(2, 'Two Day'),
		(3, 'Three Day'),
		(4, 'Ground'),
		(5, 'Freight'),
	)

SHIPMENT_TYPE = (
		(1, 'Ground'),
		(2, 'Air'),
		(3, 'Sea'),
	)

DELIVERY_STATUS = (
		(1, 'Enroute'),
		(2, 'Completed'),
		(3, 'Returned'),
		(4, 'Damaged')
	)

ORDER_STATUS = (
		(1, 'Pending'),
		(2,'Delivered'),
		(3, 'Cancelled')
	)

COUNTRY_CODE = (
		(1, 'USA'),
		(2, 'Canada'),
		(3, 'Mexico'),
	)

STATE_CODE = (
		(0, 'Alabama'),
		(1, 'Alaska'),
		(2, 'Arizona'),
		(3, 'Arkansas'),
		(4, 'California'),
		(5, 'Colorado'),
		(6, 'Connecticut'),
		(7, 'Delaware'),
		(8, 'Florida'), 
		(9, 'Georgia'),
		(10, 'Hawaii'), 
		(11, 'Idaho'), 
		(12, 'Illinois'), 
		(13, 'Indiana'), 
		(14, 'Iowa'), 
		(15, 'Kansas'), 
		(16, 'Kentucky'), 
		(17, 'Louisiana'), 
		(18, 'Maine'), 
		(19, 'Maryland'), 
		(20, 'Massachusetts'), 
		(21, 'Michigan'), 
		(22, 'Minnesota'), 
		(23, 'Mississippi'), 
		(24, 'Missouri'), 
		(25, 'Montana'), 
		(26, 'Nebraska'), 
		(27, 'Nevada'), 
		(28, 'New Hampshire'), 
		(29, 'New Jersey'), 
		(30, 'New Mexico'), 
		(31, 'New York'), 
		(32, 'North Carolina'), 
		(33, 'North Dakota'), 
		(34, 'Ohio'), 
		(35, 'Oklahoma'), 
		(36, 'Oregon'), 
		(37, 'Pennsylvania'), 
		(38, 'Rhode Island'), 
		(39, 'South Carolina'), 
		(40, 'South Dakota'), 
		(41, 'Tennessee'), 
		(42, 'Texas'), 
		(43, 'Utah'), 
		(44, 'Vermont'), 
		(45, 'Virginia'), 
		(46, 'Washington'), 
		(47, 'West Virginia'), 
		(48, 'Wisconsin'), 
		(49, 'Wyoming')
	) 


class Incoming_Shipments_Manager(models.Manager):
	pass

class Incoming_Shipments(models.Model):
	objects = Incoming_Shipments_Manager()
	route_id = models.IntegerField(max_length=10, primary_key=True)
	post_office_shipping_from = models.IntegerField(choices=POST_OFFICE_SHIPPED_FROM, default=77025)
	post_office_shipping_to = models.IntegerField(choices=POST_OFFICE_SHIPPED_FROM, default=75032)
	route_type = models.IntegerField(choices=SHIPMENT_TYPE, default=1)

	def __unicode__(self):
		return '{} {}'.format(self.route_id, self.post_office_shipping_from, self.post_office_shipping_to , self.route_type )

class Customer_Manager(models.Manager):
	pass

class Customer(models.Model):
	objects = Customer_Manager()
	customer_id = models.AutoField(primary_key=True)
	phone_number = models.IntegerField(max_length=10)
	first_name = models.CharField(max_length=25)
	last_name = models.CharField(max_length=25)
	customer_email = models.EmailField(max_length=75)
	date_joined = models.DateField(auto_now=True)


	def __unicode__(self):
		return '{} {}'.format(self.customer_id, self.phone_number, self.first_name ,
			self.last_name , self.customer_email , self.date_joined)

class Address_Manager(models.Manager):
	pass

class Address(models.Model):
	objects = Address_Manager()
	address_id = models.AutoField(max_length=10,primary_key=True)
	customer_id = models.ForeignKey(Customer, related_name="CustomerAddress")
	street_line1 = models.CharField(max_length=200)
	city = models.CharField(max_length=20)
	state = models.IntegerField(choices=STATE_CODE, default=42)
	country = models.IntegerField(choices=COUNTRY_CODE, default=1)
	zipcode = models.IntegerField(max_length=5)

	def __unicode__(self):
		return '{} {}'.format(self.street_line1, self.city , self.state, self.country , self.zipcode)


class Shipments_Manager(models.Manager):
	pass

class Shipments(models.Model):
	objects = Shipments_Manager()
	shipment_id = models.AutoField(primary_key=True)
	tracking_number = models.CharField(max_length=10)
	customer_id = models.ForeignKey(Customer, related_name = "ShipmentCustomer")
	time_shipped = models.DateTimeField(auto_now=True)
	reciever_address = models.ForeignKey(Address, related_name = "ShipmentAddress")
	receiver_name = models.CharField(max_length=200)
	post_office_shipped_from = models.IntegerField(choices=POST_OFFICE_SHIPPED_FROM, default=77025)
	date_ship = models.DateField(auto_now=True)
	est_arrival = models.DateField()
	last_post_office = models.IntegerField(choices=POST_OFFICE_SHIPPED_FROM, default=75032)
	order_status = models.IntegerField(choices=ORDER_STATUS, default=1)
	delivery_status = models.IntegerField(choices=DELIVERY_STATUS, default=1)
	package_type = models.IntegerField(choices=PACKAGE_TYPE, default=3)
	package_weight = models.DecimalField(max_digits=4,decimal_places=2)
	package_rate = models.DecimalField(max_digits=4,decimal_places=2)
	signature_required = models.BooleanField(default=False)
	signature_confirmed = models.BooleanField(default=False)

	def save(self, *args, **kwargs):
		if not self.package_rate:
			self.order_status = 1
			self.delivery_status = 1
			self.last_post_office = self.post_office_shipped_from
			self.tracking_number = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(10))
			self.package_rate = self.package_weight + (7-self.package_type)
			self.est_arrival = datetime.now() + timedelta(days=self.package_type)
		super(Shipments,self).save( *args, **kwargs)


	def __unicode__(self):
		return '{} {}'.format(self.tracking_number, self.customer_id, self.time_shipped ,
			self.reciever_address , self.receiver_name , self.post_office_shipped_from, self.date_ship , 
			self.est_arrival , self.last_post_office , self.order_status , self.delivery_status , 
			self.package_type , self.package_weight , self.package_rate , self.signature_required ,
			self.signature_confirmed)

class Driver_Manager(models.Manager):
	pass

class Driver(models.Model):
	objects = Driver_Manager()
	driver_id = models.AutoField(primary_key=True)
	driver_ssn = models.IntegerField(max_length=9)
	driver_name = models.CharField(max_length=25)
	driver_phone_number = models.IntegerField(max_length=10)
	drug_test_passed = models.BooleanField(default=None)

	def __unicode__(self):
		return '{} {}'.format(self.driver_id, self.driver_ssn, self.driver_name ,
			self.driver_phone_number , self.drug_test_passed)

class Delivery_Routes_Manager(models.Manager):
	pass

class Delivery_Routes (models.Model):
	objects = Delivery_Routes_Manager()
	delivery_route_id = models.IntegerField(max_length=10, primary_key=True)
	zipcode = models.IntegerField(max_length=5)
	shipments_carried = models.IntegerField(max_length=7)
	driver_id = models.ForeignKey(Driver, related_name = "RouteDriver")
	time_left=models.DateTimeField()
	time_returned = models.DateTimeField()
	last_location = models.CharField(max_length=50)

	def __unicode__(self):
		return '{} {}'.format(self.delivery_route_id , self.zipcode , self.shipments_carried , 
			self.driver_id , self.time_left , self.time_returned , self.last_location)
	






