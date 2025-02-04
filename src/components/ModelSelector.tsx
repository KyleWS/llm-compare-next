import { Model } from '../types/models';

interface ModelSelectorProps {
  models: Model[];
  selectedModel: Model;
  otherSelectedModel: Model;
  onSelect: (model: Model) => void;
}

const ModelSelector = ({
  models,
  selectedModel,
  otherSelectedModel,
  onSelect
}: ModelSelectorProps) => {
  // Filter out the model selected in the other dropdown
  const availableModels = models.filter(
    model => model.id !== otherSelectedModel.id
  );

  return (
    <div className="relative w-full max-w-[450px] mb-4">
      <select
        value={selectedModel.id}
        onChange={(e) => {
          const model = models.find(m => m.id === e.target.value);
          if (model) onSelect(model);
        }}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                 text-[#1a1a1a] appearance-none cursor-pointer focus:outline-none focus:ring-2 
                 focus:ring-[#1a73e8] focus:border-transparent"
      >
        {availableModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name} - {model.provider}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ModelSelector;