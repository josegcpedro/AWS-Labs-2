# Scalable and secure web application

## Description

### Project overview

This project involves deploying a scalable and secure web application on AWS. The application consists of a static frontend hosted on Amazon S3 and distributed via CloudFront, and a backend API built with AWS Lambda and API Gateway. The backend is connected to a DynamoDB.

### Overall objectives

- Deploy a static frontend hosted on Amazon S3  
- Implement a backend API using AWS Lambda and API Gateway to provide business logic and data processing  
- Ensure security by configuring IAM Roles, Security Groups, and HTTP communication  
- Automate deployment and infrastructure setup using CloudFormation  
- Design the architecture to be scalable using AWS services and Load Balancers  

## Architecture
![Diagrama](/diagram.png)


## Main Components

### Frontend

I created a regular React App, created an S3 Bucket, and uploaded the app after running `npm run build`. I uploaded the `dist.` folder. I changed the bucket settings by turning on the “block all public access” option so that my bucket cannot be accessed from outside. I added a Bucket Policy so CloudFront can access my bucket.

For CloudFront, I used the S3 Bucket for hosting the static frontend content.

### Backend

I created a Lambda function that sends a JSON message `"Hello from Lambda"`.  
And added a trigger with API Gateway; there, it’s only a simple GET with `/` route.

---

## Security

My S3 bucket is secured. Anyone who is not logged into my AWS account cannot access it. However, with the bucket policy I added, CloudFront can access the bucket and provides a URL that anyone can use to view my project. (If distributions is running)

## Automation

I use GitHub Actions so I can automatically update the project just by pushing changes to my GitHub repository.
Automation is a really important thing, because it reduces errors.

## Scalability

(Not done yet)




