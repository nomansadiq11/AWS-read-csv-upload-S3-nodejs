# Read csv file and upload AWS S3 using NodeJS
This repo use for read csv file and upload that file to AWS S3, this application will be deployed as container base application, those container will be manage by kubernates. 

## Prerequisite

- Kubernetes
- Docker
- NodeJS
- AWS (S3 Bucket and read Write credentials)
- Terraform

## Summary

This repo having the all require files to run this application in container and container can be manage by kubernates

- KubeDeploymentConfig : This folder has all the Kubernates depoyment configuration
- Terraform-AS : This folder has terraform script which spin up S3 Bucket
- Web : This folder has all NodeJS application file
- In the home folder there is Dockerfile which use to create the docker image

