//1. Go to Mongo Atlas and Login using google account patelravi09272@gmail.com
//2. Go to Network Access and Add Current IP Address in IP Addresses
//3. Click on Connect button on Cluster0 in MERN_Grapql Database
//4. Click on connect to MonogDBCompass option
//5. Copy the Connection String and Paste in new connection option in MongoDBCompass App
//6. Replace the <password> with ravi@991998 in connection string
//7. Replace the test with clients_projects in connection string

//Command to run the Project
npm run dev //in MERN_GRAPHQL folder

npm start //in client folder

//localhost:5000/graphql in browser to check graphql queries



Env variables

PORT = 5000
NODE_ENV = 'development'

//copied the URI from MONGODB Atlas - Connect to Application using mongo drivers 
//special characters in password should be encoded with their %hexcode or else it will give error
//Error: MongoAPIError: URI must include hostname, domain name, and tld        at resolveSRVRecord
//Here ravi@991998 = ravi%40991998
MONGO_URI = 'mongodb+srv://Ravindra:ravi%40991998@cluster0.twcee8i.mongodb.net/clients_projects?retryWrites=true&w=majority'