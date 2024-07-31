# models.py

class User:
    def __init__(self, user_id, name, address, contact_info):
        self.user_id = user_id
        self.name = name
        self.address = address
        self.contact_info = contact_info

class Courier:
    def __init__(self, courier_id, name, vehicle_details):
        self.courier_id = courier_id
        self.name = name
        self.vehicle_details = vehicle_details

class Package:
    def __init__(self, package_id, dimensions, weight, pickup_address, delivery_address):
        self.package_id = package_id
        self.dimensions = dimensions
        self.weight = weight
        self.pickup_address = pickup_address
        self.delivery_address = delivery_address
        self.status = "Ready for pickup"

class PickupRequest:
    def __init__(self, request_id, user_id, package_id, pickup_time=None):
        self.request_id = request_id
        self.user_id = user_id
        self.package_id = package_id
        self.pickup_time = pickup_time
        self.status = "Pending"

# In-memory data storage (for simplicity)
users = {}
couriers = {}
packages = {}
pickup_requests = {}
