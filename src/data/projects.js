// Import images
import MobileImage2 from '../images/mobile-project-2.jpg';
import SolvImage1 from '../images/solv-project.jpg';
import SolvPlaceholderMain from '../images/solv-project.jpg';

// TODO: ADD PERSONAL PROJECT, both existing and frameworks
export const projectsData = [
	{
		id: 1,
		slug: 'solv',
		title: 'Solv AI Technologies',
		category: 'Web App, AI, Startup',
		img: SolvPlaceholderMain,
		ProjectHeader: {
			title: 'Solv AI Technologies',
			publishDate: 'May 2023 – July 2024',
			tags: 'React, Flask, OpenAI, Azure, Canvas API, Figma, PostHog',
		},
		shortDescription: 'An AI-powered educational assistant integrated with Canvas that uses retrieval-augmented generation (RAG) to provide students with course-specific answers and source references pulled directly from their own course materials.'
	},
	{
		id: 2,
		slug: 'gpt2',
		title: 'Custom GPT2 Recreation',
		category: 'Machine Learning, NLP, AI Research',
		img: MobileImage2,
		ProjectHeader: {
			title: 'Custom GPT2 Recreation',
			publishDate: 'March 2025 – May 2025',
			tags: 'PyTorch, Python, Google Colab',
		},
		shortDescription: 'A minimal GPT-2-like model trained on movie quotes, built entirely from scratch using PyTorch, with transformer-style attention and beam search decoding.'
	},
];
