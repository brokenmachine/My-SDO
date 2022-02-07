({
    createNewOrderItem: function() {
        var orderItem = {};
        orderItem.product_sfid = '';
        orderItem.sku = '';
        orderItem.productName = '';
        orderItem.price = 0;
        orderItem.cart_item_sfid = '';

        orderItem.qty = 1;
        orderItem.orig_qty = 1;

        return orderItem;
    },
    getProductDataLive : function(component, filterValuesJson) {

        console.log('getProductDataLive begin')

        var messages = [];

        messages.push({'severity' : 'info', 'message' : 'Loading products.  Please wait...'});

        component.set("v.pageMessages", messages);

        this.waiting(component);

        var storefront = component.get('v.storefront');
        var locale = component.get('v.locale');
        var accountId = component.get("v.accountId");
        var currencyCode = component.get("v.currencyCode");
        var userId = component.get("v.userId");

        var action = component.get("c.findProductsWithFilters");

        action.setParams({
            "userId" : userId,
            "accountId" : accountId,
            "currencyCode" : currencyCode,
            "storefront" : storefront,
            "locale" : locale,
            "filterValuesJson" : filterValuesJson
        });

        action.setCallback(this, function (response) {
            var state = response.getState();
            console.log('state = ' + state);
            if (state === 'SUCCESS') {

                component.set("v.pageMessages", []);

                var returnValue = response.getReturnValue();

                console.log('returnValue = ' + returnValue);

                if('productList' in returnValue) {
                    var data = returnValue.productList;

                    this.processProductData(component, data);
                }

            }
            else {
                console.log('Failed with state: ' + state);
            }

            this.doneWaiting(component);
        });

        $A.enqueueAction(action);

    },
    processProductData : function(component, data) {
        for(var i = 0; i < data.length; i++) {
            var product = data[i];

            if(product.EProductMediasS && product.EProductMediasS.length > 0) {
                product.searchImage = product.EProductMediasS[0];
            }
        }

        component.set("v.productData", data);

    },
    getProductDataMock: function(component) {

        this.waiting(component);

        var data = [
                   	{
                   		"friendlyUrl": "/EnergyProducts/Fuses(Setof4",
                   		"qtySingleIncrement": 1,
                   		"canAddtoCart": true,
                   		"showNewSubscriptionSelection": false,
                   		"savings": 46.0,
                   		"basePrice": 276.0,
                   		"price": 230.0,
                   		"shortDesc": "Made of high-quality materials and designed to be long-lasting, this product is available in a range of sizes to suit your needs.",
                   		"EProductMediasS": [
                   			{
                   				"URI": "https://sfdc-ckz-b2b.s3.amazonaws.com/SDO/products/sdo_fuses.jpg",
                   				"startDate": "2018-05-03",
                   				"sequence": 500,
                   				"productMediaSource": "URI",
                   				"mediaType": "Product Search Image",
                   				"locale": "en_US",
                   				"endDate": "2022-05-04",
                   				"enabled": true,
                   				"sfdcName": "000028",
                   				"sfid": "a5s4x000000HIx4AA2",
                   				"product": "a5x4x000000LmmkAAG"
                   			}
                   		],
                   		"unitOfMeasure": "Each",
                   		"SEOId": "Fuses(Setof4",
                   		"startDate": "2018-05-03",
                   		"productType": "Product",
                   		"productStatus": "Released",
                   		"storefront": "DefaultStore",
                   		"SKU": "C-100",
                   		"ownerId": "0054x000001TNNrAAX",
                   		"sfdcName": "Fuses (Set of 4)",
                   		"sfid": "a5x4x000000LmmkAAG"
                   	},
                   	{
                   		"friendlyUrl": "/PartsAndConsumables/ReplacementParts/PowerInverter",
                   		"qtySingleIncrement": 1,
                   		"canAddtoCart": true,
                   		"showNewSubscriptionSelection": false,
                   		"savings": 119.8,
                   		"basePrice": 718.8,
                   		"price": 599.0,
                   		"shortDesc": "This product provides high performance and dependability, making it ideal for demanding environments.",
                   		"EProductMediasS": [
                   			{
                   				"URI": "https://sfdc-ckz-b2b.s3.amazonaws.com/SDO/products/sdo_power_inverter.jpg",
                   				"startDate": "2018-05-03",
                   				"sequence": 500,
                   				"productMediaSource": "URI",
                   				"mediaType": "Product Search Image",
                   				"locale": "en_US",
                   				"endDate": "2022-05-04",
                   				"enabled": true,
                   				"sfdcName": "000019",
                   				"sfid": "a5s4x000000HIx5AA2",
                   				"product": "a5x4x000000LmmlAAG"
                   			}
                   		],
                   		"unitOfMeasure": "Each",
                   		"SEOId": "PowerInverter",
                   		"startDate": "2018-05-03",
                   		"productType": "Product",
                   		"productStatus": "Released",
                   		"storefront": "DefaultStore",
                   		"SKU": "H-36378",
                   		"ownerId": "0054x000001TNNrAAX",
                   		"sfdcName": "Power Inverter",
                   		"sfid": "a5x4x000000LmmlAAG"
                   	},
                   	{
                   		"friendlyUrl": "/PartsAndConsumables/ReplacementParts/EnergyMeter",
                   		"qtySingleIncrement": 1,
                   		"canAddtoCart": true,
                   		"showNewSubscriptionSelection": false,
                   		"savings": 200.8,
                   		"basePrice": 1204.8,
                   		"price": 1004.0,
                   		"shortDesc": "This is a robust, high-performance product that optimizes efficiency while remaining economical.",
                   		"EProductMediasS": [
                   			{
                   				"URI": "https://sfdc-ckz-b2b.s3.amazonaws.com/SDO/products/sdo_energy_meter.jpg",
                   				"startDate": "2018-05-03",
                   				"sequence": 500,
                   				"productMediaSource": "URI",
                   				"mediaType": "Product Search Image",
                   				"locale": "en_US",
                   				"endDate": "2022-05-04",
                   				"enabled": true,
                   				"sfdcName": "000013",
                   				"sfid": "a5s4x000000HIx6AA2",
                   				"product": "a5x4x000000LmmmAAG"
                   			}
                   		],
                   		"unitOfMeasure": "Each",
                   		"SEOId": "EnergyMeter",
                   		"startDate": "2018-05-03",
                   		"productType": "Product",
                   		"productStatus": "Released",
                   		"storefront": "DefaultStore",
                   		"SKU": "E-1000",
                   		"ownerId": "0054x000001TNNrAAX",
                   		"sfdcName": "Energy Meter",
                   		"sfid": "a5x4x000000LmmmAAG"
                   	},
                   	{
                   		"friendlyUrl": "/PartsAndConsumables/ReplacementParts/ConnectorCables",
                   		"qtySingleIncrement": 1,
                   		"canAddtoCart": true,
                   		"showNewSubscriptionSelection": false,
                   		"savings": 130.0,
                   		"basePrice": 780.0,
                   		"price": 650.0,
                   		"shortDesc": "Built with the highest-quality materials and compatible with all IEC-standard products.",
                   		"EProductMediasS": [
                   			{
                   				"URI": "https://sfdc-ckz-b2b.s3.amazonaws.com/SDO/products/sdo_connector_cables.jpg",
                   				"startDate": "2018-05-03",
                   				"sequence": 500,
                   				"productMediaSource": "URI",
                   				"mediaType": "Product Search Image",
                   				"locale": "en_US",
                   				"endDate": "2022-05-04",
                   				"enabled": true,
                   				"sfdcName": "000022",
                   				"sfid": "a5s4x000000HIx7AA2",
                   				"product": "a5x4x000000LmmnAAW"
                   			}
                   		],
                   		"unitOfMeasure": "Each",
                   		"SEOId": "ConnectorCables",
                   		"startDate": "2018-05-03",
                   		"productType": "Product",
                   		"productStatus": "Released",
                   		"storefront": "DefaultStore",
                   		"SKU": "C-300",
                   		"ownerId": "0054x000001TNNrAAX",
                   		"sfdcName": "Connector Cables",
                   		"sfid": "a5x4x000000LmmnAAW"
                   	},
                   	{
                   		"friendlyUrl": "/PartsAndConsumables/ReplacementParts/MountingSystem",
                   		"qtySingleIncrement": 1,
                   		"canAddtoCart": true,
                   		"showNewSubscriptionSelection": false,
                   		"savings": 149.8,
                   		"basePrice": 898.8,
                   		"price": 749.0,
                   		"shortDesc": "Innovative, cost-effective solution for demanding environments.",
                   		"EProductMediasS": [
                   			{
                   				"URI": "https://sfdc-ckz-b2b.s3.amazonaws.com/SDO/products/sdo_mounting_system.jpg",
                   				"startDate": "2018-05-03",
                   				"sequence": 500,
                   				"productMediaSource": "URI",
                   				"mediaType": "Product Search Image",
                   				"locale": "en_US",
                   				"endDate": "2022-05-04",
                   				"enabled": true,
                   				"sfdcName": "000031",
                   				"sfid": "a5s4x000000HIx8AA2",
                   				"product": "a5x4x000000LmmoAAW"
                   			}
                   		],
                   		"unitOfMeasure": "Each",
                   		"SEOId": "MountingSystem",
                   		"startDate": "2018-05-03",
                   		"productType": "Product",
                   		"productStatus": "Released",
                   		"storefront": "DefaultStore",
                   		"SKU": "C-400",
                   		"ownerId": "0054x000001TNNrAAX",
                   		"sfdcName": "Mounting System",
                   		"sfid": "a5x4x000000LmmoAAW"
                   	}
                   ];

        for(var i = 0; i < data.length; i++) {
            var product = data[i];

            if(product.EProductMediasS && product.EProductMediasS.length > 0) {
                product.searchImage = product.EProductMediasS[0];
            }
        }

        this.doneWaiting(component);

        return data;
    },
    getFiltersForAllProducts : function(component) {

        //this.getFilterDataMock(component);
        this.getFilterDataLive(component);

    },
    processFilterData : function(component, data) {

        // 2019-10-28  msobczak: added code to address FSL error
        var allFilters = [];

        if(data.prodFilters) {
            allFilters = data.prodFilters;
        }

        var checkboxFilters = [];

        for(var i = 0; i < allFilters.length; i++ ) {
            var filter = allFilters[i];

            if(filter.filterType === 'Checkbox') {

                var filterName = filter.name;
                var specValues = filter.specValues;

                var options = [];

                for(var j = 0; j < specValues.length; j++) {
                    var option = {};
                    option.label = specValues[j].value;
                    option.value = specValues[j].value;

                    options.push(option);
                }

                var customFilter = {};
                customFilter.name = filterName;
                customFilter.sfid = filter.sfid;
                customFilter.options = options;

                checkboxFilters.push(customFilter);
            }
        }

        component.set("v.filterData", checkboxFilters);

        this.doneWaiting(component);

        console.log('processFilterData exit')
    },
    getFilterDataLive : function(component) {

        console.log('getFilterDataLive begin')

        this.waiting(component);

        var storefront = component.get('v.storefront');
        var locale = component.get('v.locale');
        var accountId = component.get("v.accountId");
        var currencyCode = component.get("v.currencyCode");
        var userId = component.get("v.userId");

        var action = component.get("c.findFilters");

        action.setParams({
            "userId" : userId,
            "accountId" : accountId,
            "currencyCode" : currencyCode,
            "storefront" : storefront,
            "locale" : locale
        });

        action.setCallback(this, function (response) {
            var state = response.getState();
            console.log('state = ' + state);
            if (state === 'SUCCESS') {
                var returnValue = response.getReturnValue();

                console.log('returnValue = ' + returnValue);

                var data = returnValue.filters;

                this.processFilterData(component, data);

            }
            else {
                console.log('Failed with state: ' + state);
            }

            this.doneWaiting(component);
        });

        $A.enqueueAction(action);

    },
    getFilterDataMock : function(component) {

        var data = {
        "prodFilters": [
            {
                "specValues": [
                    {
                        "count": 1,
                        "value": "000000000000000400"
                    },
                    {
                        "count": 1,
                        "value": "000000000000001000"
                    },
                    {
                        "count": 1,
                        "value": "000000000000001200"
                    },
                    {
                        "count": 1,
                        "value": "000000000000002000"
                    },
                    {
                        "count": 1,
                        "value": "000000000000003000"
                    },
                    {
                        "count": 1,
                        "value": "000000000000006000"
                    }
                ],
                "filterType": "Slider",
                "sequence": 500,
                "sfid": "a6P4x000000H6ziEAK",
                "name": "Watt"
            },
            {
                "specValues": [
                    {
                        "count": 5,
                        "value": "1 Year"
                    },
                    {
                        "count": 6,
                        "value": "2 Years"
                    },
                    {
                        "count": 1,
                        "value": "4 Years"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zjEAK",
                "name": "Warranty"
            },
            {
                "specValues": [
                    {
                        "count": 2,
                        "value": "10 mph"
                    },
                    {
                        "count": 1,
                        "value": "10mph"
                    },
                    {
                        "count": 1,
                        "value": "7 mph"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zkEAK",
                "name": "Wind Required"
            },
            {
                "specValues": [
                    {
                        "count": 1,
                        "value": "125 VAC"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zlEAK",
                "name": "Max Volt"
            },
            {
                "specValues": [
                    {
                        "count": 3,
                        "value": "Batteries"
                    },
                    {
                        "count": 3,
                        "value": "Consumables"
                    },
                    {
                        "count": 5,
                        "value": "Replacement Parts"
                    },
                    {
                        "count": 5,
                        "value": "Service"
                    },
                    {
                        "count": 2,
                        "value": "Solar Systems"
                    },
                    {
                        "count": 2,
                        "value": "Wind System"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 1,
                "sfid": "a6P4x000000H6zmEAK",
                "name": "Type"
            },
            {
                "specValues": [
                    {
                        "count": 3,
                        "value": "Electric"
                    },
                    {
                        "count": 2,
                        "value": "Solar"
                    },
                    {
                        "count": 4,
                        "value": "Wind"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6znEAK",
                "name": "Power Source"
            },
            {
                "specValues": [
                    {
                        "count": 5,
                        "value": "ETL"
                    },
                    {
                        "count": 4,
                        "value": "UL"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zoEAK",
                "name": "Approvals"
            },
            {
                "specValues": [
                    {
                        "count": 5,
                        "value": "No"
                    },
                    {
                        "count": 11,
                        "value": "Yes"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zpEAK",
                "name": "GFCI Safety Circuit"
            },
            {
                "specValues": [
                    {
                        "count": 19,
                        "value": "No"
                    },
                    {
                        "count": 1,
                        "value": "Yes"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zqEAK",
                "name": "Subscription"
            },
            {
                "specValues": [
                    {
                        "count": 3,
                        "value": "No"
                    },
                    {
                        "count": 1,
                        "value": "Yes"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zrEAK",
                "name": "License"
            },
            {
                "specValues": [
                    {
                        "count": 1,
                        "value": "Yes"
                    }
                ],
                "filterType": "Checkbox",
                "sequence": 500,
                "sfid": "a6P4x000000H6zsEAK",
                "name": "Onsite"
            }
        ],
        "success": true,
        "sizing": {
            "product": {
                "sz_data": "sz_l"
            }
        },
        "prodCategoryIds": [
            "a534x000000HCwBAAS"
        ],
        "version": 10
       };

       this.processFilterData(component, data);

    },
    waiting: function(component) {
        component.set("v.showSpinner", true);
    },
    doneWaiting: function(component) {
        component.set("v.showSpinner", false);
    },
});