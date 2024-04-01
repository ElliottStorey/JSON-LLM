import Ajv from "ajv";
import addFormats from "ajv-formats";

import { LlamaModel, LlamaJsonSchemaGrammar, LlamaContext, LlamaChatSession } from "node-llama-cpp";

const ajv = new Ajv();
addFormats(ajv);

class StructuredLLM {
  constructor(inputSchema, modelPath, outputSchema) {
    this.inputSchema = inputSchema;
    const model = new LlamaModel({ modelPath });
    this.context = new LlamaContext(model);
    this.grammar = new LlamaJsonSchemaGrammar(outputSchema);
  }
  async generate(prompt) {
    const tokens = this.context.encode(prompt);
    cons
  }
}