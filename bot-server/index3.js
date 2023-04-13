import {} from "dotenv/config";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "@koa/router";
import cors from "@koa/cors";
//const bodyParser = require("koa-bodyparser");
import { Configuration, OpenAIApi } from "openai";

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 4000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  // make sure you mention or change the openai api key in the .env file
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const handleSubmit = async (event) => {
  event.preventDefault();

  const pharmacyRegex = /nearest pharmacy|find pharmacy (.+)/i;
  const pharmacyMatch = input.match(pharmacyRegex);

  if (pharmacyMatch) {
    const location = await getLocation();
    if (!location) {
      setOutput("Sorry, I couldn't determine your location.");
      setInput("");
      return;
    }

    const nearestPharmacy = findNearestPharmacy(location);
    if (!nearestPharmacy) {
      setOutput("Sorry, I couldn't find a pharmacy near you.");
      setInput("");
      return;
    }

    setOutput(
      `The nearest pharmacy is ${nearestPharmacy.name}, located at ${nearestPharmacy.address}.`
    );
    setInput("");
    return;
  }

  const pharmacyNameRegex = /pharmacy (.+)/i;
  const pharmacyNameMatch = input.match(pharmacyNameRegex);

  if (pharmacyNameMatch) {
    // Find the pharmacy in the data
    const pharmacyName = pharmacyNameMatch[1];
    const pharmacy = findPharmacyByName(pharmacyName);
    if (!pharmacy) {
      setOutput(`Sorry, I couldn't find a pharmacy named ${pharmacyName}.`);
      setInput("");
      return;
    }

    // Return the pharmacy information
    setOutput(
      `${pharmacy.name} is located at ${pharmacy.address}. Their phone number is ${pharmacy.phone}.`
    );
    setInput("");
    return;
  }
};

router.post("/message", async (ctx) => {
  const { message } = ctx.request.body;
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Check whether the query is related to drugs or pharmacy or not. 
    Answer only in 0 and 1, where 0 means the query is related to drugs and pharmacy and 1 means it is not related to pharmacy. 
    The only exception is when the input says something related to hello then output 0\n
    User: ${message} in pharmacy\n
    Bot:`,
    max_tokens: 100,
    temperature: 0.9,
  });
  console.log(response.data.choices[0].text);

  if (response.data.choices[0].text == 0) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `assume yourself as pharmacy chatbot named C²-PILS and answer queries only related to pharmacy 
      and in context of pharmacy\n
      User: ${message} in pharmacy\n
      Bot:`,
      max_tokens: 100,
      temperature: 0.9,
    });

    ctx.body = {
      message: response.data.choices[0].text,
    };
    ctx.status = 200;
  } else {
    ctx.body = {
      message: "Please Enter Pharmacy related questions",
    };
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
