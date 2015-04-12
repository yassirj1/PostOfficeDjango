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
	state_code = models.IntegerField(max_length=2,primary_key=True)
	state_long = models.CharField(max_length=40)


# class Post_Office_Shipped_From(models.Model):
# 	HOUSTON = 01
# 	DALLAS = 02
# 	AUSTIN = 03
# 	SAN_ANTONIO = 04
# 	EL_PASO = 05
# 	POST_OFFICE_SHIPPED_FROM_CHOICES = (
# 		(HOUSTON, 77025),
# 		(DALLAS, 75032),
# 		(AUSTIN, 78721),
# 		(SAN_ANTONIO, 78205),
# 		(EL_PASO, 79922),
# 	)
# 	post_office_num = models.IntegerField(max_length=5, choices=POST_OFFICE_SHIPPED_FROM_CHOICES, default=HOUSTON)

# class Package_Type(models.Model):
# 	ONE_DAY=00001
# 	TWO_DAY=00002
# 	THREE_DAY=00003
# 	GROUND=00004
# 	FREIGHT=00005
# 	PACKAGE_TYPE_CHOICES = (
# 		(ONE_DAY, 'One Day'),
# 		(TWO_DAY, 'Two Day'),
# 		(THREE_DAY, 'Three Day'),
# 		(GROUND, 'Ground'),
# 		(FREIGHT, 'Freight'),
# 	)
# 	package_code = models.IntegerField(max_length=5, choices=PACKAGE_TYPE_CHOICES, default=GROUND)

# class Shipment_Type(models.Model):
# 	LAND=00010
# 	AIR=00020
# 	SEA=00030
# 	SHIPMENT_TYPE_CHOICES = (
# 		(LAND, 'Ground'),
# 		(AIR, 'Air'),
# 		(SEA, 'Sea'),
# 	)
# 	route_type_code = models.IntegerField(max_length=5, choices=SHIPMENT_TYPE_CHOICES, default=LAND)
	

# class Delivery_Status(models.Model):
# 	Enrouted = 'EN'
# 	Completed = 'CO'
# 	Returned = 'RE'
# 	Damaged = 'DA'
# 	Delivery_Status = (
# 		(Enrouted, 'Enrouted'),
# 		(Completed, 'Completed'),
# 		(Returned, 'Returned'),
# 		(Damaged, 'Damaged')
# 	)
# 	Delivery_Status = models.CharField(max_length=2, choices=Delivery_Status, default=Enrouted)

# class Order_Status(models.Model):
# 	Pending = 'PE'
# 	Delivered = 'DE'
# 	Cancelled = 'CA'
# 	Order_Status = (
# 		(Pending, 'Pending'),
# 		(Delivered,'Delivered'),
# 		(Cancelled, 'Cancelled')
# 	)
# 	Order_Status = models.CharField(max_length=2, choices=Order_Status, default=Pending)


# class Country(models.Model):
# 	UNITED_STATES = 'US'
# 	CANADA = 'CA'
# 	MEXICO = 'MX'
# 	Country_Enum = (
# 		(UNITED_STATES, 'USA'),
# 		(CANADA, 'Canada'),
# 		(MEXICO, 'Mexico'),
# 	)
# 	country = models.CharField(max_length=2, choices=Country_Enum, default=UNITED_STATES)





# class State(models.Model):
# 	alabama = '00'
# 	alaska = '01'
# 	arizona = '02'
# 	arkansas = '04'
# 	california = '05'
# 	colorado = '06'
# 	connecticut = '07'
# 	delaware = '08'
# 	florida = '08'
# 	georgia = '09'
# 	hawaii = '10'
# 	idaho = '11'
# 	illinois = '12'
# 	indiana = '13'
# 	iowa = '14'
# 	kansas = '15'
# 	kentucky = '16'
# 	louisiana = '17'
# 	maine = '18'
# 	maryland = '19'
# 	massachusetts = '20'
# 	michigan = '21'
# 	minnesota = '22'
# 	mississippi = '23'
# 	missouri = '24'
# 	montana = '25'
# 	nebraska = '26'
# 	nevada = '27'
# 	newhampshire = '28'
# 	newjersey = '29'
# 	newmexico = '30'
# 	newyork = '31'
# 	northcarolina = '32'
# 	northdakota = '33'
# 	ohio = '34'
# 	oklahoma = '35'
# 	oregon = '36'
# 	pennsylvania = '37'
# 	rhodeisland = '38'
# 	southcarolina = '39'
# 	southdakota = '40'
# 	tennessee = '41'
# 	texas = '42'
# 	utah = '43'
# 	vermont = '44'
# 	virginia = '45'
# 	washington = '46'
# 	westvirginia = '47' 
# 	wisconsin = '48'
# 	wyoming	= '49'		

# 	State_code = (
# 		('alabama', 'Alabama'),
# 		('alaska', 'Alaska'),
# 		('arizona', 'Arizona'),
# 		('arkansas', 'Arkansas'),
# 		('california', 'California'),
# 		('colorado', 'Colorado'),
# 		('connecticut', 'Connecticut'),
# 		('delaware', 'Delaware'),
# 		('florida', 'Florida'),
# 		('georgia', 'Georgia'),
# 		('hawaii', 'Hawaii'),
# 		('idaho', 'Idaho'),
# 		('illinois', 'Illinois'),
# 		('indiana', 'Indiana'),
# 		('iowa', 'Iowa'),
# 		('kansas', 'Kansas'),
# 		('kentucky', 'Kentucky'),
# 		('louisiana', 'Louisiana'),
# 		('maine', 'Maine'),
# 		('maryland', 'Maryland'),
# 		('massachusetts', 'Massachusetts'),
# 		('michigan', 'Michigan'),
# 		('minnesota', 'Minnesota'),
# 		('mississippi', 'Mississippi'),
# 		('missouri', 'Missouri'),
# 		('montana', 'Montana'),
# 		('nebraska', 'Nebraska'),
# 		('nevada', 'Nevada'),
# 		('newhampshire', 'New Hampshire'),
# 		('newjersey', 'New Jersey'),
# 		('newmexico', 'New Mexico'),
# 		('newyork', 'New York'),
# 		('northcarolina', 'North Carolina'),
# 		('northdakota', 'North Dakota'),
# 		('ohio', 'Ohio'),
# 		('oklahoma', 'Oklahoma'),
# 		('oregon', 'Oregon'),
# 		('pennsylvania', 'Pennsylvania'),
# 		('rhodeisland', 'Rhode Island'),
# 		('southcarolina', 'South Carolina'),
# 		('southdakota', 'South Dakota'),
# 		('tennessee', 'Tennessee'),
# 		('texas', 'Texas'),
# 		('utah', 'Utah'),
# 		('vermont', 'Vermont'),
# 		('virginia', 'Virginia'),
# 		('washington', 'Washington'),
# 		('westvirginia', 'West Virginia'),
# 		('Wisconsin', 'Wisconsin'),
# 		('wyoming', 'Wyoming'),
# 	) 
# 	state = models.CharField(max_length=2, choices=State_code, default=texas)