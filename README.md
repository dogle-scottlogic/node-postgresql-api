# node-postgresql-api
An API created using loopback based upon [this](https://github.com/htammen/n-odata-server/wiki/tutorial_01) tutorial

The API supports oData requests to /odata

The Server is connected to a Postgresql database.

**Notes:** 
- database config is managed in ```server/datasources.json```
- oData version is managed in ```server/component-config.json`` - v2 as v4 is not yet fully supported.

### Database ###
This example depends on a postgresql database. Tables can be auto created (see below) but must be populated manually.


### Models ###
- models are defined in ```common/models/```
- new models should be created using slc loopback:model from the odata-server folder
- slc command requires instalation of strongloop

```
npm install -g strongloop
```

- this install depends upon python.
- Type mappings for loopback to postgres can be found [here](https://loopback.io/doc/en/lb2/PostgreSQL-connector.html#postgresql-types-to-loopback)
- Unless a `plural` field is given an `s` will be appended to the name for queries. e.g. `/odata/sheeps` will fetch all sheep 
- Once created the model .json file should have an id column set or idInjection set to true to auto manage. [see docs](https://loopback.io/doc/en/lb3/Model-definition-JSON-file.html#id-properties)

### Sync ###
Loopback expects the data model to match the database schema exactly. 
By default Loopback requires an acl table in the database.
```server/create-lb-tables.js``` can be used to sync the Loopback models to the database. **WARNING - This will destroy tables that are not defined**.

To use: 
- Ensure all tables are referenced in the ```lbTables``` array as strings.
- navigate to ```/server``` 
- run ``` node create-lb-tables.js ```

## Running the api ##
To run the api run:
```
node . 
```

Navigation to ``` http://localhost:3000/explorer ``` will return the standard api docs

Navigation to ``` http://localhost:3000/odata ``` will return the oData api

To use odata queries use the ``` /odata ``` path. e.g. ``` http://localhost:3000/odata/films('T_605') ```