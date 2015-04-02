app = angular.module 'PostOffice.api', ['ngResource']

app.factory 'Address', ['$resource', ($resource) ->
    $resource '/api/addresses/:address_id', address_id: '@address_id'
]

app.factory 'Shipments', ['$resource', ($resource) ->
    $resource '/api/shipments/:shipment_id', shipment_id: '@shipment_id'
]

app.factory 'Customer', ['$resource', ($resource) ->
    $resource '/api/customer/:customer_id', customer_id: '@customer_id'
]

app.factory 'AllAddress', ['$resource', ($resource) ->
	$resource '/api/addresses'
]

# app.factory ''

# # And the nested resources
# app.factory 'UserPost', ['$resource', ($resource) ->
#     $resource '/api/users/:username/posts/:id'
# ]

# app.factory 'PostPhoto', ['$resource', ($resource) ->
#     $resource '/api/posts/:post_id/photos/:id'
# ]