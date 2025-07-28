# Send and Open RCS Files Using GitHub Codespaces

How to send multimedia files using the RCS channel of the Vonage Messages API.

## Getting Started

### 1. Clone or Fork the Repository

```bash
git clone https://github.com/Vonage-Community/blog-messages-nodejs-rcs-file.git
cd blog-messages-nodejs-rcs-file
````

Or run in GitHub Codespaces by appending `/codespaces` to the URL in your browser:

```
https://github.com/Vonage-Community/blog-messages-nodejs-rcs-file/codespaces
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Copy the example file and edit it:

```bash
cp .env.example .env
```

Fill in your values for:

```env
VONAGE_APPLICATION_ID=your-app-id
VONAGE_PRIVATE_KEY=./private.key
RCS_SENDER_ID=your-rcs-agent-id
MESSAGES_FILE_URL=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
PHONE_NUMBER=your-test-phone-number
```

> Don’t forget to upload your `private.key` file to the root of the project.

### 4. Run the Code

```bash
node index.js
```

This will send the file specified in `MESSAGES_FILE_URL` to the RCS-enabled phone number.

## Requirements

* Node.js 18+
* A Vonage API account
* A registered RCS Business Messaging agent
* A phone with RCS support

## Next Steps

* Try sending different file types
* Add inbound message support via webhooks
* Add JWT verification for incoming requests

## Contact

Got questions?
Join our [Developer Slack](https://developer.vonage.com/community/slack), follow us on [X (formerly Twitter)](https://x.com/VonageDev), or check out our [Developer Blog](https://developer.vonage.com/blog).

