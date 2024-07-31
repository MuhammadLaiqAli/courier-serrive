# routes.py

from flask import Flask, request, jsonify
from services import create_user, register_package, request_pickup

def setup_routes(app):
    @app.route('/users', methods=['POST'])
    def create_new_user():
        data = request.json
        user = create_user(data['name'], data['address'], data['contact_info'])
        return jsonify({'user_id': user.user_id, 'name': user.name}), 201

    @app.route('/packages', methods=['POST'])
    def register_new_package():
        data = request.json
        package = register_package(data['dimensions'], data['weight'], data['pickup_address'], data['delivery_address'])
        return jsonify({'package_id': package.package_id, 'status': package.status}), 201

    @app.route('/pickup', methods=['POST'])
    def create_pickup_request():
        data = request.json
        pickup_request = request_pickup(data['user_id'], data['package_id'])
        if pickup_request:
            return jsonify({'pickup_request_id': pickup_request.request_id, 'status': pickup_request.status}), 200
        return jsonify({'message': 'User or Package not found'}), 404
