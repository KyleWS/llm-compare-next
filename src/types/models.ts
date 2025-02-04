export interface ModelSpecs {
  released: string;
  parameters: string;
  context: string;
  pricing: string;
  speed: string;
  license: string;
  modelSize?: string;
  inputCost?: string;
  outputCost?: string;
}

export interface ModelCapabilities {
  'Overall Score': number;
  'Knowledge Score'?: number;
  'Writing Score'?: number;
  'Math Score'?: number;
}

export interface Model {
  id: string;
  name: string;
  score: number;
  image: string;
  provider: string;
  specs: ModelSpecs;
  capabilities: ModelCapabilities;
}

export type ModelsData = {
  [key: string]: Model;
}