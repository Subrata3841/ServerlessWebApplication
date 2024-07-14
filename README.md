# Serverless Student Registration Web Application
# Overview
This project demonstrates a serverless web application built using various AWS services. The application allows users to register students and view the list of registered students. It leverages AWS S3 for static website hosting, DynamoDB for data storage, API Gateway for API management, Lambda for serverless compute, and IAM for secure access control.

## Key Components
### Amazon S3 (Simple Storage Service)
Hosts the static assets of the web application, including HTML, CSS, and JavaScript files.

### Amazon DynamoDB
Serves as the NoSQL database to store student registration data.

### Amazon API Gateway
Acts as the entry point for HTTP requests, routing them to the appropriate Lambda functions.

### AWS Lambda
Handles the business logic of the application, such as processing student data submissions and fetching records from DynamoDB.

### AWS IAM (Identity and Access Management)
Manages permissions and roles for the various AWS services interacting within the application.



## Features
* Student Registration: Users can register students by providing details such as name,    email, gender, and course.

* View Registered Students: Users can view a list of all registered students.
* Asynchronous Data Handling: Utilizes AJAX for asynchronous data submission and          retrieval.
