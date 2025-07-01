// Import images
import MobileImage2 from '../images/projects/gpt2/gpt2-diagram.jpg';
import SolvImage from '../images/projects/solv/solv-project.jpg';
import ThriftiImage from '../images/projects/thrifti/thrifti-cover.jpg';
import GenScoreImage from '../images/projects/genscore/genscore-cover.jpg';
import StoryBoardImage from '../images/projects/storyboard/storyboard-cover.jpg';

// TODO: ADD PERSONAL PROJECT, both existing and frameworks
export const projectsData = [
	{
		id: 1,
		slug: 'solv',
		title: 'Solv AI Technologies',
		category: 'Web App, AI, Startup',
		img: SolvImage,
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
	{
		id: 3,
		slug: 'thrifti',
		title: 'Thrifti',
		category: 'Mobile App, Marketplace',
		img: ThriftiImage,
		ProjectHeader: {
			title: 'Thrifti',
			publishDate: 'January 2024 – May 2024',
			tags: 'React Native, TypeScript, Flask, Pinecone, Firebase, PostHog, Docker, GCP, Figma, ExpoGo',
		},
		shortDescription: 'A mobile marketplace for college students to safely and sustainably buy, sell, or give away secondhand items — built with React Native and a custom backend supporting intelligent search and real-time messaging.',
		sourceCode: 'https://github.com/lgastaldi3/thrifti',
	},
	{
		id: 4,
		slug: 'genscore',
		title: 'GenScore',
		category: 'Machine Learning, NLP, Data Science',
		img: GenScoreImage,
		ProjectHeader: {
			title: 'GenScore',
			publishDate: 'March 2025 – Present',
			tags: 'PyTorch, Python, Google Colab',
		},
		shortDescription: 'TODO: Add description',
		sourceCode: 'TODO: Add source code',
	},
	{
		id: 5,
		slug: 'storyboardai',
		title: 'StoryBoard AI',
		category: 'Generative AI, Web App, Media Platform',
		img: StoryBoardImage,
		ProjectHeader: {
			title: 'StoryBoard AI',
			publishDate: 'April 2025 – Present',
			tags: 'Flask, Python, React, OpenAI API, AWS S3, AWS EC2, iOS',
		},
		shortDescription: 'TODO: Add description',
		sourceCode: 'TODO: Add source code',
	},
];
