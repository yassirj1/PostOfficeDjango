from django.db import models

class Post_Office_Manager(models.Manager):
	pass

class Post_Office(models.Model):
	zipcode = models.IntegerField(max_length=5,primary_key=True)
	city = models.CharField(max_length=40)

class Package_Type_Manager(models.Manager):
	pass

class Package_Type(models.Model):
	package_code = models.IntegerField(max_length=5,primary_key=True)
	package = models.CharField(max_length=40)

class Shipment_Type_Manager(models.Manager):
	pass

class Shipment_Type(models.Model):
	shipment_code = models.IntegerField(max_length=5,primary_key=True)
	shipment_is = models.CharField(max_length=40)

class Delivery_Status_Manager(models.Manager):
	pass

class Delivery_Status(models.Model):
	delivery_short = models.CharField(max_length=2,primary_key=True)
	delivery_stat = models.CharField(max_length=40)

class Order_StatusManager(models.Manager):
	pass

class Order_Status(models.Model):
	order_short = models.CharField(max_length=2,primary_key=True)
	order_stat = models.CharField(max_length=40)

class Country_Manager(models.Manager):
	pass

class Country(models.Model):
	country_short = models.CharField(max_length=2,primary_key=True)
	country_long = models.CharField(max_length=40)

class State_Manager(models.Manager):
	pass

class State(models.Model):
	objects = State_Manager()
	state_code = models.IntegerField(max_length=2,primary_key=True)
	state_long = models.CharField(max_length=40)

class Address_Manager(models.Manager):
    pass

class Address(models.Model):
	objects = Address_Manager()
	address_id = models.AutoField(max_length=10,primary_key=True)
	street_line1 = models.CharField(max_length=50)
	street_line2 = models.CharField(max_length=50)
	street_line3 = models.CharField(max_length=50)
	street_line4 = models.CharField(max_length=50)
	city = models.CharField(max_length=20)
	state = models.ForeignKey(State, related_name="State")
	country = models.ForeignKey(Country, related_name="Country")
	zipcode = models.IntegerField(max_length=5)

	def __unicode__(self):
   	    return '{} {}'.format(self.street_line1, self.street_line2, self.street_line3 , self.street_line4 , self.city , self.state, self.country , self.zipcode)

class Incoming_Shipments_Manager(models.Manager):
	pass

class Incoming_Shipments(models.Model):
	objects = Incoming_Shipments_Manager()
	route_id = models.IntegerField(max_length=10, primary_key=True)
	post_office_shipping_from = models.ForeignKey(Post_Office, related_name = "PO_From")
	post_office_shipping_to = models.ForeignKey(Post_Office, related_name = "POTo")
	route_type = models.ForeignKey(Shipment_Type, related_name = "ShipmentType")

	def __unicode__(self):
   	    return '{} {}'.format(self.route_id, self.post_office_shipping_from, self.post_office_shipping_to , self.route_type )


class Employee_Manager(models.Manager):
	pass

class Employee(models.Model):
	objects = Employee_Manager()
	employee_id = models.AutoField(primary_key=True)
	employee_ssn = models.IntegerField(max_length=9)
	employee_email = models.EmailField(max_length=75)
	employee_post_office = models.ForeignKey(Post_Office,related_name="EmployeePostOffice")


class Customer_Manager(models.Manager):
	pass

class Customer(models.Model):
	objects = Customer_Manager()
	customer_id = models.AutoField(primary_key=True)
	phone_number = models.IntegerField(max_length=10)
	first_name = models.CharField(max_length=25)
	last_name = models.CharField(max_length=25)
	customer_email = models.EmailField(max_length=75)
	date_joined = models.DateField()

	def __unicode__(self):
   	    return '{} {}'.format(self.customer_id, self.phone_number, self.first_name ,
        	self.last_name , self.customer_email , self.date_joined)

class Shipments_Manager(models.Manager):
	pass

class Shipments(models.Model):
	objects = Shipments_Manager()
	shipment_id = models.AutoField(primary_key=True)
	tracking_number = models.CharField(max_length=200)
	customer_id = models.ForeignKey(Customer, related_name = "ShipmentCustomer")
	time_shipped = models.DateTimeField()
	reciever_address = models.ForeignKey(Address, related_name = "ShipmentAddress")
	receiver_name = models.CharField(max_length=200)
	post_office_shipped_from = models.ForeignKey(Post_Office, related_name = "POFrom")
	date_ship = models.DateField()
	est_arrival = models.DateField()
	last_post_office = models.ForeignKey(Post_Office, related_name="POLast" )
	order_status = models.ForeignKey(Order_Status, related_name= "OrderStatus")
	delivery_status = models.ForeignKey(Delivery_Status,related_name="DeliveryStatus")
	package_type = models.ForeignKey(Package_Type, related_name="PackageType")
	package_weight = models.IntegerField(max_length=5)
	package_rate = models.IntegerField(max_length=5)
	signature_required = models.BooleanField(default=None)
	signature_confirmed = models.BooleanField(default=None)

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
	






