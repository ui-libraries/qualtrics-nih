import AWS from 'aws-sdk'

export const albumBucketName = 'survey-webcam'
const bucketRegion = 'us-east-1'
const identityPoolId = 'us-east-1:f7603a39-0ba9-4523-96dd-fe81991e80f3'

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId
    })
})

export const s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: {
        Bucket: albumBucketName
    }
})