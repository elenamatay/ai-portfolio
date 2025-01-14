import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

const projectsData = [
	{
		id: 1,
		title: 'Gym Personal Trainer',
		url: 'personal-trainer',
		category: ['Side Projects'],
		img: '/images/gym-trainer-cover.png',
		githubUrl: 'https://github.com/elenamatay/personal-trainer-notebooks',
		ProjectHeader: {
			title: 'AI-Based Gym Personal Trainer',
			publishDate: 'Jul 26, 2024',
			tags: ['Side Project', 'GenAI', 'Multimodal'],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Gym Personal Trainer',
                                 type: 'image',
                                 src: '/images/gym-trainer.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Timeline',
					details: 'Apr-Sep 2024',
				},
				{
					id: uuidv4(),
					title: 'Format',
					details: 'Webapp',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'On-hold after Beta phase',
				},
				{
					id: uuidv4(),
					title: 'Team Size',
					details: '2',
				},
				{
					id: uuidv4(),
					title: 'My Role',
					details: 'PM, AI Engineer',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'AI-powered tool that analyzes video recordings of strength exercises to provide personalized feedback, helping users improve performance and reduce injury risk.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Multimodal models (Gemini Flash)',
						'Embeddings',
						'Prompt Engineering',
						'Ionic Framework',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge, Solution, Lessons Learnt and Next Steps',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Many people want to improve their fitness but can’t afford a personal trainer. This causes that they often perform exercises incorrectly, leading to injuries and suboptimal results.',
				},
				{
					id: uuidv4(),
					details:
						'The goal was to create an AI-powered tool that analyzes video recordings of strength exercises to provide personalized feedback, helping users improve performance and reduce injury risk. In order to do this, two main AI-based components were developed:',
				},
				{
					id: uuidv4(),
					details:
						'1. Exercise Recognition: A multimodal model that classifies the exercise being performed in a video. Surprisingly, this was the most challenging piece of the project. For Beta phase (family and friends only), I tried both Gemini Flash 1.5 with lots of prompt engineering and chain-of-thought (no fine-tuning) and Embeddings. None of these approaches worked well enough for production (~50% accuracy in exercise classification on a video library of 250+ exercises).',
				},
				{
					id: uuidv4(),
					details:
						'2. Exercise Feedback: Once the exercise has been recognised, a multimodal model provides personalized feedback on the exercise performance, comparing the user video to a reference video. This was the most successful part of the project. We used Gemini Flash 1.5 with prompt engineering. The model was able to provide detailed feedback on the exercise performance with ~90% accuracy. Feedback included the following categories: Form/technique, Tempo, Range of Movement, Fatigue Analysis (comparing the variation of the execution between repetitions on one same series), and more.',
				},
				{
					id: uuidv4(),
					details:
						'Me and my friend Pablo -performing the SWE role- worked on this project in our free time for 6 months. We performed a Beta Phase with family and friends (20+ participants) who tried the webapp on 150+ videos in total and filled out a detailed <a href="https://docs.google.com/forms/d/e/1FAIpQLScLgpi8SF2Uq9vYyf-jF3K8NLxBjGLK70S0A_hxweEpWV6uuQ/viewform" target="_blank" rel="noopener noreferrer" className="project-details">feedback form</a>. After the Beta phase, we decided to put the project on hold due to lack of availability from Pablo\'s side. Even so, we learnt a lot about multimodal models, embeddings, prompt engineering, and the Ionic Framework. I also learnt that exercise recognition is a more challenging problem than I anticipated. If we resume the project someday, we will need to re-evaluate different solutions depending on the new state of the art and find a solution for this problem (could be fine-tuning of a model like Gemini, a more traditional deep-learning classification model implementation, a more advanced embedding-based approach, or others).',
				},
				{
					id: uuidv4(),
					details:
						'As we are open to continue the project in the future, the app code repository and the full AI pieces repository are private. If you are interested in the project, please contact me, I will be happy to share more details. I also published a public repository. You can access it with the button below. It contains some Jupyter Notebooks about the experiments I performed for the project.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Neural Style Transfer',
		url: 'phoenix-digital-agency',
		category: ['Learning'],
		img: '/images/neural-style-transfer-cover.png',
		githubUrl: 'https://github.com/elenamatay/art-generation-neural-style-transfer',
		ProjectHeader: {
			title: 'Art Generation with Neural Style Transfer',
			publishDate: 'Dec 28, 2024',
			tags: ['Learning', 'Deep Learning', 'Computer Vision'],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Art Generation with Neural Style Transfer',
                                 type: 'image',
                                 src: '/images/neural-style-transfer.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Course',
					details: 'CNNs',
				},
				{
					id: uuidv4(),
					title: 'Entity',
					details: 'DeepLearning.AI',
				},
				{
					id: uuidv4(),
					title: 'Course info',
					details: 'https://www.deeplearning.ai/courses/deep-learning-specialization/#syllabus',
				},
				{
					id: uuidv4(),
					title: 'Repository',
					details: 'https://github.com/elenamatay/art-generation-neural-style-transfer/tree/c21921b7b9d2c1460ebcb5981ce323a7a1bc9afc',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Implement a Neural Style Transfer algorithm to generate an image that combines the content of one image with the style of another.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'TensorFlow',
						'Keras',
						'Transfer Learning',
						'Neural Style Transfer (NST)',
						'Jupyter Notebooks',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Neural Style Transfer (NST) is one of the most fun and interesting optimization techniques in deep learning. It merges two images: a "content" image (C) and a "style" image (S), to create a "generated" image (G). The generated image G combines the "content" of the image C with the "style" of image S.',
				},
				{
					id: uuidv4(),
					details:
						'In this coding assignment, I learnt about Neural Style Transfer, an algorithm created by Gatys et al. (2015). Using this learnings, I combined the Louvre museum in Paris (content image C) with the impressionist style of Claude Monet (style image S) to generate the above image.',
				},
				{
					id: uuidv4(),
					details:						
						'Upon completion of this assignment, I was able to implement the neural style transfer algorithm, define both the content and the style cost functions for Neural Style Transfer, and generate novel artistic images using my algorithm.',
				},

			],
		},
	},
	{
		id: 3,
		title: 'Experiments Tracking',
		url: 'vertex-ai-experiments',
		category: ['Customers'],
		img: '/images/experiments-cover.png',
		githubUrl: 'https://github.com/elenamatay/vertex-ai-experiments',
		ProjectHeader: {
			title: 'Tracking Experiments with Vertex AI',
			publishDate: 'Apr 13, 2023',
			tags: ['Machine Learning', 'Vertex AI', 'Google Cloud'],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Experiments',
                                 type: 'image',
                                 src: '/images/experiments.jpeg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Customer Industry',
					details: 'FSI',
				},
				{
					id: uuidv4(),
					title: 'Project Name',
					details: 'ML Platform Advisory',
				},
				{
					id: uuidv4(),
					title: 'My Role',
					details: 'AI Consultant',
				},
				{
					id: uuidv4(),
					title: 'Team Size',
					details: '18 Engineers (Google + Customer)',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Keep track and analyze different ML model architectures, hyperparameters, and training environments.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Vertex AI',
						'Google Cloud',
						'Machine Learning',
						'Scikit-learn',
						'LGBM',
						'XGBoost',
						'Boosted trees',
					],
				},
			],
			ProjectDetailsHeading: 'Project Context and Sample Shared Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'I developed this code sample to support my team (Google engineers) in the technical delivery for a project I was leading. The project objective was to advise an FSI customer in migrating their ML platform from on-prem to Google Cloud. The seven-month project involved guiding the customer in building the cloud-based ML Platform where dozens of use cases would live, including the deployment of the first three use cases. I led the project, managed the customer relationship, oversaw the Google team\'s work, and ensured on-time, on-budget delivery with 100% customer satisfaction (as measured by the CSAT survey).',
				},
				{
					id: uuidv4(),
					details:
						'The project spanned many areas of the MLOps lifecycle, but my primary technical contribution was in Experiments and Explainable AI. This particular sample focuses on Experiments Tracking. The customer needed to track and analyze different ML model architectures, hyperparameters, and training environments. I decided to use Vertex AI Experiments autologging feature, a one-line code SDK capability which leverages MLflow to provide automatic metrics and parameters tracking, to fulfill this need. I delivered a technical workshop where I showed the customer how to use the feature and performed a live demo. Then, we did a hands-on session where each engineer from the customer side created a new experiment, trained a model for a real use case on the customer data, logged and analyzed the results.',
				},
				{
					id: uuidv4(),
					details:
						'The live demo was conducted with the notebook present in the below repo. It\'s a modified version of a Google Cloud official tutorial, where I adapted the models trained to make it more realistic and useful for the customer. The original tutorial trains three models: a scikit-learn one, a Tensorflow one, and a PyTorch one, and logs the results of the training experiments. This customer didn\'t have expertise in Deep Learning and wanted an example of logging experiments with frameworks they were familiar with. I adapted a Jupyter Notebook that uses the Vertex AI Python SDK to create a new experiment, train five simple models (one scikit-learn, one LGBM, and three XGBoost models with different hyperparameters), and log the results to be reviewed later in the Vertex AI Experiments UI.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Entity Resolution',
		url: 'entity-matching-genai',
		category: ['Customers', 'Side Projects'],
		img: '/images/entity-resolution-cover.png',
		githubUrl: 'https://github.com/elenamatay/entity-resolution/',
		ProjectHeader: {
			title: 'Entity Resolution leveraging GenAI',
			publishDate: 'Aug 26, 2024',
			tags: ["GenAI", "Entity Resolution", "RAG", "Embeddings", "Vector Search"],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Entity Resolution Architecture on GCP',
                                 type: 'image',
                                 src: '/images/entity-resolution-architecture.jpeg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Customer Industry',
					details: 'SaaS (Startup)',
				},
				{
					id: uuidv4(),
					title: 'Project Name',
					details: 'AI Booster',
				},
				{
					id: uuidv4(),
					title: 'My Role',
					details: 'AI Consultant (20%)',
				},
				{
					id: uuidv4(),
					title: 'Team Size',
					details: '4 (Customer CEO, CTO, CDO, and myself)',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Recognise entities (products) and their attributes in thousands of retailers websites, then do entity resolution (similar to entity matching) to identify which products are the same accross retailers.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'GenAI',
						'VertexAI',
						'LLMs',
						'Multimodal',
						'RAG',
						'Embeddings',
						'Vector Search',
					],
				},
			],
			ProjectDetailsHeading: 'Project Context and Sample Shared Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'This was a 20% project for me. At Google, this means a project you do voluntarily to learn something new or have a new experience, fully separate from your work. The 20% project was called AI Booster, and it was a collaboration with spanish startups. These startups had an AI use case that they wanted to implement, and if selected, I designed the architecture and provided advisory for their engineers to implement a first version of the use case within one month. This specific project was for one of the great startups I worked with, which had a SaaS product around business intelligence for retailers.',
				},
				{
					id: uuidv4(),
					details:
						'The use case was using GenAI for Name Entity Recognition (NER - extracting and standarizing information about products in e-commerces) and resolution (ER - identifying matching identical products present in different websites or sources). The focus of my advisory was on the latter -ER area-, where they needed more help.',
				},
				{
					id: uuidv4(),
					details:
						'The code samples shared include two Jupyter Notebooks. The first one shows how to use the VertexAI SDKs to create and query a Vector Store using Vector Search. The second one shows how to perform advance Entity Resolution using filtering. Specifically, I create and deploy a ready-to-filter index based on metadata (e.g. product category), then perform queries using these filters, and lastly call Gemini to check which from top N retrieved neighbours are actually the same product.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'Baby Names Finder',
		url: 'baby-names-finder',
		category: ['Side Projects'],
		img: '/images/baby-names-finder-cover.png',
		githubUrl: 'https://github.com/elenamatay/baby-names-genai',
		ProjectHeader: {
			title: 'AI-Powered Baby Names Finder',
			publishDate: 'Oct 15, 2023',
			tags: ['GenAI', 'Full-Stack', 'NextJS', 'TailwindCSS'],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Product demo',
                type: 'video',
				src: "https://storage.googleapis.com/thename_web_media_us/video-ui-form.mp4",
			},
			{
				id: uuidv4(),
				title: 'Baby names web UI',
				type: 'image',
				src: '/images/baby-names-ui.png',
			},
			{
				id: uuidv4(),
				title: 'Baby names decoration mockup',
				type: 'image',
				src: '/images/baby-names-mockup.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Timeline',
					details: 'Jan 2024 - Oct 2024',
				},
				{
					id: uuidv4(),
					title: 'Format',
					details: 'Webapp',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'In Production',
				},
				{
					id: uuidv4(),
					title: 'Team Size',
					details: '1',
				},
				{
					id: uuidv4(),
					title: 'My Role',
					details: 'PM, Full-Stack Developer, AI Engineer',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Help users find the perfect name for an upcoming baby based on their family\'s values and preferences.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'NextJS',
						'TailwindCSS',
						'DaisyUI',
						'Google Cloud',
						'MongoDB',
						'Vercel',
						'Next-auth',
						'Google Auth',
						'Stripe',
						'Mailgun',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge, Solution, Lessons Learnt and Next Steps',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'The project aims to help users find the perfect name for an upcoming baby based on their family\'s values and preferences. To achieve this, we needed a solid database of baby names. We started with a Kaggle dataset of registered names worldwide and used Gemini (model available through Vertex AI SDK) to generate a synthetic database enriched with various attributes such as meaning, origin, and sound details.',
				},
				{
					id: uuidv4(),
					details:
						'Based on user input from a questionnaire/form, the project filters the data and makes another call to Gemini AI to find the most suitable names for a family.',
				},
				{
					id: uuidv4(),
					details:
						'The project includes a much larger repository of files, but the sample data shared in this portfolio includes only two key files, both of them using Gemini\'s GenAI capabilities. The first is a Jupyter notebook outlining the process of creating a synthetic dataset for girl names, and the second is a script responsible for finding the ideal baby names based on user input.',
				},
				{
					id: uuidv4(),
					details:
						'The stack used for this project includes NextJS as a programming framework, TailwindCSS and DaisyUI for the front-end part, MongoDB as the database, Vercel for hosting, Next-auth and Google Auth for authentication, Stripe for payments handling, Mailgun for mail sending, and Google Cloud products for the AI part.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	{
		id: 6,
		title: 'Face Recognition',
		category: ['Learning'],
		img: '/images/face-recog-cover.png',
		githubUrl: 'https://github.com/elenamatay/face-recognition',
		ProjectHeader: {
			title: 'Building a Face Recognition System',
			publishDate: 'Dec 22, 2024',
			tags: ['Learning', 'Deep Learning', 'Computer Vision'],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Face Recognition System',
                                 type: 'image',
                                 src: '/images/face-recog-2.png',
			},
			{
				id: uuidv4(),
				title: 'Face Recognition System',
                                 type: 'image',
                                 src: '/images/face-recog-3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Course',
					details: 'CNNs',
				},
				{
					id: uuidv4(),
					title: 'Entity',
					details: 'DeepLearning.AI',
				},
				{
					id: uuidv4(),
					title: 'Course info',
					details: 'https://www.deeplearning.ai/courses/deep-learning-specialization/#syllabus',
				},
				{
					id: uuidv4(),
					title: 'Repository',
					details: 'https://github.com/elenamatay/face-recognition',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Build a face recognition system.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'TensorFlow',
						'Keras',
						'Triplet Loss',
						'Jupyter Notebooks',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'In this assignment, I built a face recognition system. Many of the ideas presented here are from FaceNet.'
				},
				{
					id: uuidv4(),
					details:
						'Face recognition problems commonly fall into one of two categories:'
				},
				{
					id: uuidv4(),
					details:
						'1. Face Verification "Is this the claimed person?" For example, at some airports, you can pass through customs by letting a system scan your passport and then verifying that you (the person carrying the passport) are the correct person. A mobile phone that unlocks using your face is also using face verification. This is a 1:1 matching problem.'
				},
				{
					id: uuidv4(),
					details:						
						'2. Face Recognition "Who is this person?" For example, a face recognition system of a ACME employees entering the office without needing to otherwise identify themselves. This is a 1:K matching problem.',
				},
				{
					id: uuidv4(),
					details:						
						'In this notebook, I implemented one-shot learning to solve a face recognition problem. For this, I applied the triplet loss function to learn a network\'s parameters in the context of face recognition. Besides, after explaining how to pose face recognition as a binary classification problem and mapping face images into 128-dimensional encodings using a pretrained model, I also performed face verification and face recognition with these encodings.',
				},

			],
		},
	},
];

export { projectsData };