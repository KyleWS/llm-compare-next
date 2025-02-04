import { Model } from '../types/models';

interface ModelCardProps {
  model: Model;
  onClose: () => void;
  onTryModel: () => void;
}

const ModelCard = ({ model, onClose, onTryModel }: ModelCardProps) => {
  return (
    <div className="relative bg-white rounded-2xl p-8 w-[450px] shadow-md">
      {/* Score Badge */}
      <div className="absolute -top-4 -left-4 bg-[#1a73e8] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
        {model.score}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 bg-[#ff4081] text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-lg"
      >
        ×
      </button>

      {/* Model Image and Provider */}
      <div className="text-center mb-4">
        <img
          src={model.image}
          alt={model.name}
          className="w-[120px] h-[120px] object-contain mx-auto mb-2"
        />
        <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">{model.name}</h2>
        <span className="text-sm text-gray-600">by {model.provider}</span>
      </div>

      {/* Specifications */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-2 text-[#4a4a4a]">
          <span className="text-xl min-w-6">📅</span>
          Released: {model.specs.released}
        </div>
        <div className="flex items-center gap-2 text-[#4a4a4a]">
          <span className="text-xl min-w-6">📊</span>
          Size: {model.specs.parameters}
        </div>
        <div className="flex items-center gap-2 text-[#4a4a4a]">
          <span className="text-xl min-w-6">📝</span>
          Context: {model.specs.modelSize} tokens
        </div>
        <div className="flex items-center gap-2 text-[#4a4a4a]">
          <span className="text-xl min-w-6">💰</span>
          {model.specs.inputCost ? (
            <div className="flex flex-col">
              <span>Input: ${model.specs.inputCost}/1M tokens</span>
              <span>Output: ${model.specs.outputCost}/1M tokens</span>
            </div>
          ) : (
            <span>{model.specs.pricing}</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-[#4a4a4a]">
          <span className="text-xl min-w-6">⚡</span>
          Speed: {model.specs.speed}
        </div>
        <div className="flex items-center gap-2 text-[#4a4a4a]">
          <span className="text-xl min-w-6">🔒</span>
          License: {model.specs.license}
        </div>
      </div>

      {/* Capabilities */}
      <div className="mb-6">
        <h3 className="text-[#1a1a1a] mb-3 font-semibold">Performance Metrics</h3>
        <div className="space-y-2">
          {Object.entries(model.capabilities).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-[#4a4a4a] text-sm">{key.replace('Score', '')}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a73e8] rounded-full"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-sm text-[#1a73e8] font-medium">
                  {value}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Try Model Button */}
      <button
        onClick={onTryModel}
        className="w-full bg-[#00c853] hover:bg-[#00a844] text-white border-none py-4 rounded-lg text-base font-bold cursor-pointer transition-colors"
      >
        Try Model
      </button>
    </div>
  );
};

export default ModelCard;