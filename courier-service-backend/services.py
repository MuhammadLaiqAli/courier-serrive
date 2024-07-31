# services.py

from models import users, couriers, packages, pickup_requests, User, Package, PickupRequest

def create_user(name, address, contact_info):
    user_id = len(users) + 1
    user = User(user_id, name, address, contact_info)
    users[user_id] = user
    return user

def register_package(dimensions, weight, pickup_address, delivery_address):
    package_id = len(packages) + 1
    package = Package(package_id, dimensions, weight, pickup_address, delivery_address)
    packages[package_id] = package
    return package

def request_pickup(user_id, package_id):
    if user_id in users and package_id in packages:
        request_id = len(pickup_requests) + 1
        pickup_request = PickupRequest(request_id, user_id, package_id)
        pickup_requests[request_id] = pickup_request
        return pickup_request
    return None
