import { ModelsData } from '../types/models';

export const models: ModelsData = {
    'o3': {
        id: 'o3',
        name: 'o3',
        score: 87.7,
        image: '/o3.svg',
        provider: 'Anthropic',
        specs: {
            released: 'Jan 2024',
            parameters: '~1T',
            context: '128K',
            pricing: '-',
            speed: '~35 tokens/second',
            license: 'Proprietary',
            modelSize: '128,000'
        },
        capabilities: {
            'Overall Score': 87.7,
            'Knowledge Score': 90.4,
            'Writing Score': 86.9,
            'Math Score': 77.6
        }
    },
    'claude-3-sonnet': {
        id: 'claude-3-sonnet',
        name: 'Claude 3.5 Sonnet',
        score: 67.2,
        image: '/claude-3-sonnet.svg',
        provider: 'Anthropic',
        specs: {
            released: 'Jan 2024',
            parameters: '~1T',
            context: '200K',
            pricing: '$3.00/1M input, $15.00/1M output',
            speed: '~35 tokens/second',
            license: 'Proprietary',
            modelSize: '200,000',
            inputCost: '$3.00',
            outputCost: '$15.00'
        },
        capabilities: {
            'Overall Score': 67.2,
            'Knowledge Score': 90.4,
            'Writing Score': 90.4,
            'Math Score': 77.6
        }
    },
    'deepseek-r1': {
        id: 'deepseek-r1',
        name: 'DeepSeek-R1',
        score: 71.5,
        image: '/deepseek.svg',
        provider: 'DeepSeek',
        specs: {
            released: 'Jan 2024',
            parameters: '671B',
            context: '131,072',
            pricing: '$0.55/1M input, $2.19/1M output',
            speed: '~35 tokens/second',
            license: 'Open',
            modelSize: '131,072',
            inputCost: '$0.55',
            outputCost: '$2.19'
        },
        capabilities: {
            'Overall Score': 71.5,
            'Knowledge Score': 90.8,
            'Writing Score': 90.8,
            'Math Score': 84.0
        }
    },
    'gemini-pro': {
        id: 'gemini-pro',
        name: 'Gemini 1.5 Pro',
        score: 59.1,
        image: '/google.svg',
        provider: 'Google',
        specs: {
            released: 'Dec 2023',
            parameters: '~1.5T',
            context: '2,097,152',
            pricing: '$2.50/1M input, $10.00/1M output',
            speed: '~40 tokens/second',
            license: 'Proprietary',
            modelSize: '2,097,152',
            inputCost: '$2.50',
            outputCost: '$10.00'
        },
        capabilities: {
            'Overall Score': 59.1,
            'Knowledge Score': 85.9,
            'Writing Score': 85.9,
            'Math Score': 75.8
        }
    },
    'gpt4': {
        id: 'gpt4',
        name: 'GPT-4o',
        score: 53.6,
        image: '/openai.svg',
        provider: 'OpenAI',
        specs: {
            released: 'Nov 2023',
            parameters: '~1.8T',
            context: '128K',
            pricing: '$2.50/1M input, $10.00/1M output',
            speed: '~30 tokens/second',
            license: 'Proprietary',
            modelSize: '128,000',
            inputCost: '$2.50',
            outputCost: '$10.00'
        },
        capabilities: {
            'Overall Score': 53.6,
            'Knowledge Score': 88.0,
            'Writing Score': 88.0,
            'Math Score': 74.7
        }
    },
    'llama-70b': {
        id: 'llama-70b',
        name: 'Llama 3.1 40.5B Instruct',
        score: 50.7,
        image: '/meta.svg',
        provider: 'Meta',
        specs: {
            released: 'Dec 2023',
            parameters: '405B',
            context: '128K',
            pricing: '$0.90/1M tokens',
            speed: '~25 tokens/second',
            license: 'Open',
            modelSize: '128,000',
            inputCost: '$0.90',
            outputCost: '$0.90'
        },
        capabilities: {
            'Overall Score': 50.7,
            'Knowledge Score': 87.3,
            'Writing Score': 87.3,
            'Math Score': 73.3
        }
    }
};