// Import images
import SolvPlaceholderMain from '../images/projects/solv/solv-page-project.jpg';
import SolvScreenshot1 from '../images/projects/solv/solv-logo-page.jpg';
import SolvScreenshot2 from '../images/projects/solv/solv-page-project.jpg';
import SolvScreenshot3 from '../images/projects/solv/solv-landing.jpg';
import Gpt2PlaceholderMain from '../images/projects/gpt2/gpt2-diagram.jpg';
import Gpt2PlaceholderScreenshot1 from '../images/projects/gpt2/gpt2-dialogue.jpg';
import ThriftiMain from '../images/projects/thrifti/thrifti-cover.jpg';
import ThriftiScreenshot1 from '../images/projects/thrifti/thrifti-explore.jpg';
import ThriftiScreenshot2 from '../images/projects/thrifti/thrifti-analytics.jpg';
import GenScoreImage1 from '../images/projects/genscore/genscore-architecture.jpg';
import GenScoreImage2 from '../images/projects/genscore/genscore-eval-graph.jpg';
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
				title: 'Solv Logo Page',
				img: SolvScreenshot1,
			},
			{
				id: 2,
				title: 'Solv Landing Page Screenshot',
				img: SolvScreenshot3,
			},
			{
				id: 3,
				title: 'Solv AI-Canvas Page',
				img: SolvScreenshot2,
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
			// TODO: Make project sharable link
			SocialSharing: [
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
					details: `One of the primary challenges in building Custom GPT2 Recreation was operating within significant resource limitations. Developing the model on Google Colab meant access to only a single GPU, which constrained the dataset size and required careful management of batch sizes and training iterations to make meaningful progress. With just 10MB of training data available, the model was highly susceptible to overfitting and noise, making it difficult to generalize or produce fluent text reliably. To mitigate this, letter-based tokenization paired with convolutional layers was used to improve representation efficiency. Another key difficulty was evaluating output quality — the model's responses often hovered between plausible and incoherent, and without large-scale benchmarks, progress was assessed manually through qualitative analysis and tuning. These constraints demanded a highly iterative and resource-aware development process.`
				}
			],
			SocialSharingHeading: 'Share This',
			// TODO: Make project sharable link
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
	thrifti: {
		ProjectHeader: {
			title: 'Thrifti',
			publishDate: 'January 2024 – May 2024',
			tags: 'Mobile App, Marketplace, React Native, TypeScript, Flask, Pinecone, Firebase, PostHog, Docker, GCP, Figma, ExpoGo',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Thrifti main screen',
				img: ThriftiMain,
			},
			{
				id: 2,
				title: 'Thrifti item listing screenshot',
				img: ThriftiScreenshot1,
			},
			{
				id: 3,
				title: 'Thrifti chat screenshot',
				img: ThriftiScreenshot2,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Involvement',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client/Company',
					details: 'Independent Group Project',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Backend lead — responsible for Firebase integration, vector database search via Pinecone, and full backend system design and deployment',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Thrifti is a full-featured mobile marketplace app designed to make peer-to-peer resale safer, easier, and more sustainable for college students. Targeted especially at graduating students looking to offload used items or clothing, the platform promotes both environmental awareness and community trust by encouraging on-campus transactions.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React Native (TypeScript)',
						'Python (Flask)',
						'Pinecone',
						'Firebase (Realtime DB, Storage, Analytics)',
						'PostHog',
						'Docker',
						'GCP',
						'Figma',
						'ExpoGo',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details: `Thrifti delivers a seamless mobile experience on both iOS and Android via ExpoGo. Users can post, browse, and filter items by tag, price, or location, and benefit from intelligent similarity-based item search using Pinecone's vector database. Real-time messaging is enabled through Firebase, while compressed image upload and local caching ensure fast performance. Analytics are tracked via Firebase and PostHog, and an admin-only dashboard provides real-time monitoring of app behavior and user flow.`
				},
				{
					id: 2,
					details: `Building Thrifti required careful coordination between frontend performance and backend scalability. Leveraging Pinecone for similarity search introduced complexity around efficient tagging and vector generation. Firebase's Realtime Database enabled fast messaging but required strict data structuring to remain performant at scale. Ensuring a smooth experience across both platforms with ExpoGo demanded rigorous testing, especially for image handling and caching. Tight integration between these services, along with lightweight deployment via Docker on GCP, allowed the app to remain performant and stable during active use and testing.`
				}
			],
			SocialSharingHeading: 'Share This',
			// TODO: Make project sharable link
			SocialSharing: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/lgastaldi3/',
				},
			],
			Links: [
				{
					title: 'Source Code',
					details: 'https://github.com/lgastaldi3/thrifti',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [],
		},
	},
	genscore: {
		ProjectHeader: {
			title: 'GenScore',
			publishDate: 'March 2025 – Present',
			tags: 'Machine Learning, NLP, TensorFlow, Regex, Google Colab, BERT (in progress)',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'GenScore architecture diagram',
				img: GenScoreImage1,
			},
			{
				id: 2,
				title: 'Training data visualization',
				img: GenScoreImage2,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client/Company',
					details: 'Independent / Personal Project',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Sole developer — responsible for architecture design, data preprocessing, model training, and evaluation',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'GenScore is an evaluation framework designed to assess the quality of language model outputs—a critical step toward developing more user-aligned and trustworthy AI systems, with future potential to guide safer generations and reduce issues like hallucination and misinformation.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TensorFlow',
						'Regex',
						'Google Colab',
						'BERT (in progress)',
					],
				},
			],
			Links: [
				{
					title: 'Source Code',
					details: 'TODO: Add GitHub link',
				},
				{
					title: 'Case Study / Blog Post',
					details: 'TODO: Add link',
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details: `GenScore uses a dual bidirectional RNN architecture for comparative evaluation, trained on 8GB of human preference data (query + two outputs + selected winner). Tokenization and deep preprocessing with Regex were used for noise reduction, and the system is designed to reflect average human preferences in generative text ranking. Ongoing optimization includes a shift toward transformer-based models (e.g., BERT), and the project has been built and iterated entirely within a research notebook (Jupyter/Colab).`
				},
				{
					id: 2,
					details: `The most significant challenge in developing GenScore was operating within the resource constraints of Google Colab. Training a neural network on such a large dataset using only a single GPU required thoughtful iteration cycles, selective sampling, and careful tracking of model behavior. Output coherence was particularly difficult to measure objectively, leading to the consideration of pre-trained transformer models like BERT to accelerate convergence and improve generalization. As the project evolves, integrating these models allows GenScore to scale beyond its original architecture while remaining grounded in interpretability and reproducibility.`
				}
			],
			SocialSharingHeading: 'Share This',
			// TODO: Make project sharable link
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
	storyboardai: {
		ProjectHeader: {
			title: 'StoryBoard AI',
			publishDate: 'April 2025 – Present',
			tags: 'Media Generation Platform, AI Content Tool, Flask, Python, OpenAI API, DALL·E, AWS EC2, Amazon S3, Prompt Engineering',
		},
		ProjectImages: [
			/*{
				id: 1,
				title: 'Storyboard AI generated scene placeholder',
				img: GenScoreImage1, // Placeholder, update with actual image later
			},
			{
				id: 2,
				title: 'Storyboard AI scene segmentation placeholder',
				img: GenScoreImage2, // Placeholder, update with actual image later
			},*/
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client/Company',
					details: 'Personal consulting project in collaboration with a business partner',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Sole developer — built the backend, handled model integration, AWS deployment, and overall technical architecture',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Storyboard AI is a content generation platform that transforms written stories into illustrated storyboards. Users can submit up to 10,000 words of text, which is automatically parsed into scenes using an LLM and converted into images using OpenAI\'s DALL·E. The backend is built with Flask, deployed on AWS EC2, and uses Amazon S3 for image storage. The project began in April 2025 as a collaborative MVP, aimed at exploring new applications of generative AI in media and marketing. Ongoing development is focused on improving visual consistency and scaling input handling for longer stories.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Flask (Python)',
						'OpenAI API (DALL·E)',
						'AWS EC2',
						'Amazon S3',
						'Prompt Engineering',
					],
				},
			],
			Links: [
				{
					title: 'Live Demo',
					details: 'TODO: Add URL',
				},
				{
					title: 'Source Code',
					details: 'TODO: Add GitHub repo if available',
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: 1,
					details: `Converts story text into illustrated scenes using DALL·E. Automatic scene segmentation and prompt generation. Custom Flask API backend with AWS deployment. Image storage and retrieval via Amazon S3. Foundation for future short film generation using video models. Visual consistency under active development via prompt engineering.`
				}
			],
			// TODO: Make project sharable link
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
