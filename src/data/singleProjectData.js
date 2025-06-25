// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import SolvPlaceholderMain from '../images/solv-page-project.jpg';
import SolvPlaceholderScreenshot1 from '../images/solv-page-project.jpg';
import SolvPlaceholderScreenshot2 from '../images/solv-page-project.jpg';
import Gpt2PlaceholderMain from '../images/mobile-project-2.jpg';
import Gpt2PlaceholderScreenshot1 from '../images/mobile-project-2.jpg';
import Gpt2PlaceholderScreenshot2 from '../images/mobile-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	solv: {
		ProjectHeader: {
			title: 'Solv AI-Enabled Tutor',
			publishDate: 'May 2023 – July 2024',
			tags: 'Web App, AI, React, Flask, OpenAI, Azure, Canvas API, Figma, PostHog',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Solv AI dashboard screenshot',
				img: SolvPlaceholderMain,
			},
			{
				id: 2,
				title: 'Solv AI Canvas integration screenshot',
				img: SolvPlaceholderScreenshot1,
			},
			{
				id: 3,
				title: 'Solv AI analytics panel screenshot',
				img: SolvPlaceholderScreenshot2,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Involvement',
			CompanyInfo: [
				{
					id: 1,
					title: 'Solv AI Technologies',
					details: 'Independent Startup',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Chief Software Engineer – Led backend development and directed technical roadmap',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Solv AI Technologies is an AI-powered web application designed to transform how students engage with their course content on Canvas. Developed as part of an independent startup, the project was shaped by over 300 customer discovery and research interviews to ensure a user-centered solution for contextual, accurate answers from personal course materials.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'Python Flask',
						'OpenAI API',
						'Azure',
						'Canvas API',
						'Figma',
						'PostHog',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details: `At its peak, Solv AI Technologies supported up to 500 concurrent users, demonstrating robust scalability and real-world demand. The platform offers seamless Canvas integration for each user, providing access to personal course files and enabling natural language question answering through retrieval-augmented generation. The system supports follow-up questions that retain prior file context, allowing for deeper academic conversations. References in answers include direct links to relevant pages within Canvas content, and the AI tutoring interface mimics real-time dialogue for an engaging user experience.`
				},
				{
					id: 2,
					details: `The platform features PostHog-powered usage analytics and an admin panel, as well as custom authentication with elevated permissions for internal users. A major challenge was ensuring full compliance with Canvas API terms and handling diverse file formats, which was addressed by building custom pipelines for parsing PowerPoints, PDFs, DOCX files, and even video content. Dynamic content linking was achieved by creating a robust system to map answers to exact source locations in course materials, enhancing user trust and usability.`
				},
				{
					id: 3,
					details: `Prompt engineering was a key focus: Solv leverages RAG to preprocess relevant content into narrow, highly contextual prompts, minimizing issues with OpenAI's context window limits and ensuring efficient, accurate responses.`
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/lgastaldi3/',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [],
		},
	},
	gpt2: {
		ProjectHeader: {
			title: 'Custom GPT2 Recreation',
			publishDate: 'March 2025 – May 2025',
			tags: 'Machine Learning, NLP, AI Research, PyTorch, Python, Google Colab',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'GPT-2 model architecture diagram',
				img: Gpt2PlaceholderMain,
			},
			{
				id: 2,
				title: 'Training progress visualization',
				img: Gpt2PlaceholderScreenshot1,
			},
			{
				id: 3,
				title: 'Generated text samples',
				img: Gpt2PlaceholderScreenshot2,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Project Type',
					details: 'Independent / Personal Research',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Sole developer – implemented dataset preprocessing, model architecture, training loop, and evaluation',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Custom GPT2 Recreation is a fully custom-built natural language generation model designed to mimic the architecture and behavior of GPT-2 at a simplified scale. Trained on a curated dataset of movie quotes, this project was an exploration of deep learning architecture design, constrained learning, and the limits of language generation under strict resource constraints.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'PyTorch',
						'Python',
						'Google Colab',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details: `Built in PyTorch, the project began with preprocessing the MovieQuote dataset — including cleaning punctuation and tokenizing the data at both the word and letter level. Letter-level inputs were further processed using convolutional layers (3–5 wide) to extract local features. The model itself followed an encoder-decoder architecture, incorporating transformer-style single-head attention and beam search to improve output quality during decoding.`
				},
				{
					id: 2,
					details: `Despite being trained on just 10MB of data for 10 epochs using a single Colab GPU, the model was able to generate cohesive English text resembling conversational movie dialogue. This result was notable given the severe constraints on data size, compute, and time, and required careful iteration to distinguish genuine model improvements from noisy or incoherent outputs.`
				},
				{
					id: 3,
					details: `One of the primary challenges in building Custom GPT2 Recreation was operating within significant resource limitations. Developing the model on Google Colab meant access to only a single GPU, which constrained the dataset size and required careful management of batch sizes and training iterations to make meaningful progress. With just 10MB of training data available, the model was highly susceptible to overfitting and noise, making it difficult to generalize or produce fluent text reliably. To mitigate this, letter-based tokenization paired with convolutional layers was used to improve representation efficiency. Another key difficulty was evaluating output quality — the model’s responses often hovered between plausible and incoherent, and without large-scale benchmarks, progress was assessed manually through qualitative analysis and tuning. These constraints demanded a highly iterative and resource-aware development process.`
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/lgastaldi3/',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [],
		},
	},
};
