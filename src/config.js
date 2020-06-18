const dev = {
  STRIPE_KEY: "sk_test_YOqoRfdSyHRyIgy1T1aA52mA00UyNNvNcb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "hoyle-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dn98rgcnml.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0PXcOoK3s",
    APP_CLIENT_ID: "2g90dh4re2m7vv9o3dtmllj067",
    IDENTITY_POOL_ID: "us-east-1:97f4c34d-38ee-4f6b-93fe-09cdd93ed03f"
  }
};

const prod = {
  STRIPE_KEY: "sk_test_YOqoRfdSyHRyIgy1T1aA52mA00UyNNvNcb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "hoyle-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9vspca1n6b.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UV8kYOijx",
    APP_CLIENT_ID: "1hbnrq4pcv9toe2pdsglj6d21p",
    IDENTITY_POOL_ID: "us-east-1:2193f047-49ca-4369-b716-313c1085fd41"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
