import "dotenv/config";
import { Vonage } from "@vonage/server-sdk";
import { Channels } from "@vonage/messages";


const vonage = new Vonage({
    applicationId: process.env.VONAGE_APPLICATION_ID,
    privateKey: process.env.VONAGE_PRIVATE_KEY,
});

vonage.messages
    .send({
        messageType: "file",
        channel: Channels.RCS,
        file: {
            url: process.env.MESSAGES_FILE_URL,
        },
        to: process.env.PHONE_NUMBER,
        from: process.env.RCS_SENDER_ID,
    })
    .then(({ messageUUID }) => console.log(messageUUID))
    .catch((error) => console.error(error));
