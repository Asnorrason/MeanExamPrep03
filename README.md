# MeanExamPrep03


##Explain, generally, what is meant by a NoSQL database. 

NoSQL databases are non relational typed databases. You will usually not use SQL to communicate with the database.

##Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL. 

#####Pros:
- Schema less
-	Scalable
-	Simplicity of design
-	Can be faster than some SQL / RDBMS

#####Cons:
- Use more data than SQL databases, due to storing of fieldnames.
- Analytics and business intelligence.
  - Not many tools to analyze your database. 
- New technology
  - Low on support
  - Not yet standardized
- Not as good with transaction ACID support

##Explain how databases like MongoDB and redis would be classified in the NoSQL world. 

MongoDB and redis are two different NoSQL databases.

MongoDB is classified as a document oriented database. The database stores the data locally in a document.

Redis is classified as a key-value database. The database stores the data in memory, and can persist the data locally, by snapshotting.

##Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB. 

MongoDB is able to store to a database without schemas, and it is therefore easier to loose overview. Therefore you use Mongoose to create schemas to your database. It is somehow similar to ORM JPA.

##Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations) 

See examples in jokeFacade.js

##Demonstrate, using a REST-API, how to perform all CRUD operations on a MongoDB.

- See examples in api.js

##Explain the benefits from using Mongoose, and provide an example involving all CRUD operations. 

As before, NoSQL without mongoose is schema less, therefore it will be unorganized and be hard to read from. Therefore you add mongoose to get the opportunity to create schemas, then everything will be easier to read and organize.
See apiMoongoose.js and jokeMongoose for examples.

##Explain how redis "fits" into the NoSQL world, and provide an example of how to use it.

Redis is a in-memory key-value database. Redis is fast because of the in-memory storage. Redis wont save immidiately, but will snapshot after a given time or number of new lines.

##Explain, using a relevant example, how redis (or a similar) can increase scalability (drastic) for a server using server side sessions. 

You can partition multiple redis instances, which makes it possible to save data on multiple machines/servers easily.

##Explain, using a relevant example, a full MEAN application including relevant test cases to test the REST-API (not on the production database)

- See example of project.

