export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_GgWwfvGupUp1FlKSekMPbHnB00wu9MOz5c",
  s3: {
    REGION: "us-east-1",
    BUCKET: "hoyle-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h92jyjar9d.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ltKmZBWoS",
    APP_CLIENT_ID: "1efqquk636j0hqg0u3rg7hvlut",
    IDENTITY_POOL_ID: "us-east-1:952e597d-495b-4c4e-9b9f-b24f8a9c4da7"
  }
};
