const inputSchema = {
  type: "object",
  properties: {
    intentName: { type: "string" },
    intentDescription: { type: "string" }
  },
  required: ["intentName"]
};

const outputSchema = {
  type: "object",
  properties: {
    utterance: { type: "string" }
  },
  required: ["utterance"]
};

const llm = new StructuredLLM(inputSchema, outputSchema);

const input = {
  intentName: "Send Email",
  intentDescription: "This operation is used to send an email to specific recipients."
};

const output = await llm.generate(input);

console.log(output)