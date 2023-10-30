# OnlineGroceryWebsite

Project Structure<a name="project-structure"></a>
The project is divided into two main parts: the backend and the frontend.

### Backend
server/: Contains the backend code.
db.js: Establishes a connection to the MongoDB database.
index.js: Sets up the Express server and defines routes.
routes/: Contains API route handlers.
models/: Contains Mongoose models for interacting with the database.
Backend (Node.js, Express, MongoDB) <a name="backend"></a>
-	Server Setup<a name="server-setup"></a>
Created a folder for the backend (e.g., index.js as server).
Set up the Node.js server using Express.
-	Create API Routes<a name="create-api-routes"></a>Create routes for handling API requests (e.g., CRUD operations for managing data).
-	Database Setup<a name="database-setup"></a>
Set up the MongoDB database (we have used a cloud-based service i.e MongoDB ).
MONGODB_USERNAME=srikavya
MONGODB_PASSWORD=kavya123
MONGODB_URL="mongodb+srv://codecrafters:kavya123@codecrafters.7puxjql.mongodb.net/user?retryWrites=true&w=majority"

### Frontend
client/: Contains the React frontend.
src/: Contains the source code.
-	Pages: contains all the major pages i.e. Home.js, About us.js, Prediction.js, etc.
-	Assests: contains all the images that has been imported to the website.
LinkPeComponent.js: React component for creating UPI payment request links.
Other components: Additional components as needed.
Frontend (React)<a name="frontend"></a>
-	Create React App<a name="create-react-app"></a>
Set up the React frontend.
-	Created a Components<a name="create-components"></a>
Created components for our application, including LinkPeComponent.js.
-	Made API Calls<a name="make-api-calls"></a>
It is used fetch or libraries like Axios to make requests to our backend API.
Our proxy server used in frontend: RECAT_APP_SERVER_DOMIN="http://localhost:8080/"

### Deployment
Render is a cloud platform that makes it easy to deploy and scale web applications[4]. It supports Node.js applications, making it suitable for hosting your backend.
Steps for deploying backend:
-	Create a Render Account:
Go to Render's website and sign up for an account.
-	Create a New Service:
From the Render dashboard, click on "Create" and select "New Service".
-	Choose "Web Service" as the service type.
Connect your version control system (e.g., GitHub) to link your repository.
-	Configure Backend Service:
-	Choose the branch you want to deploy.
-	Set the build command (e.g., npm start or whatever command you use to start your Node.js server).
-	Choose an appropriate environment (Node.js in this case).
-	Add a new web service and define the routes (e.g., /api/links for your backend).
-	Deploy and Monitor:
-	Click on "Create Service" to deploy your backend.
-	Render will automatically build and deploy your Node.js server.
-	We can monitor our service from the dashboard and check logs if needed.
AWS is a cloud platform optimized for front-end deployments. It excels at hosting static assets, making it perfect for React applications.[2]
Steps:
-	Create an AWS Account:
-	Go to AWS's website and sign up for an account.
-	Import Your Frontend Repository:
    - Connect your frontend repository (e.g., the React app) to AWS.
    -	AWS will automatically detect the frontend framework and set up the build process.
- Configure Build Settings:
AWS will usually auto-detect the build settings for common frontend frameworks. If not, you can configure it in the settings.
-	Set Up Environment Variables:
If your frontend needs environment variables (e.g., API URLs), you can set them up in AWS's dashboard.
-	Deploy:
Once you've configured everything, push a new commit to your connected repository.
AWS will automatically build and deploy your React application.
-	You'll be provided with a URL where your frontend is hosted.
-	Connecting Backend and Frontend:
-	Since your backend is on Render and frontend on AWS, you'll need to ensure that your frontend knows where to send API requests.

### Machine Learning:
Introduction:
Our machine learning model predicts the price of a particular vegetable at particular location[3] at particular year, we have used time series prediction using LSTM to train our dataset.

Dataset Preparation 
The source of the JSON dataset has been prepared manually by taking help of the statistics and prices from past which helps in price prediction.
Our dataset includes Vegetable, Season, Month, Availability, Disaster Happen in last 3month, Vegetable condition, Price per kg, Location and Date.
