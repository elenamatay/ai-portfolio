import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Gym Personal Trainer',
		url: 'personal-trainer',
		category: 'Side Projects',
		img: '/images/gym-trainer-cover.png',
		githubUrl: '',
		ProjectHeader: {
			title: 'AI-Based Gym Personal Trainer',
			publishDate: 'Jul 26, 2024',
			tags: ['Side Project', 'GenAI', 'Multimodal'],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Gym Personal Trainer',
				img: '/images/gym-trainer.png',
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
						'2. Exercise Feedback: A multimodal model that provides personalized feedback on the exercise performance, comparing the user video to a reference video. This was the most successful part of the project. We used Gemini Flash 1.5 with prompt engineering. The model was able to provide detailed feedback on the exercise performance with ~90% accuracy. Feedback included the following categories: Form/technique, Tempo, Range of Movement, Fatigue Analysis (comparing the variation of the execution between repetitions on one same series), and more.',
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
		category: 'Learning',
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
				img: '/images/neural-style-transfer.png',
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
		title: 'Project Management UI',
		url: 'project-management-ui',
		category: 'UI/UX Design',
		img: '/images/ui-project-1.jpg',
		githubUrl: '',
		ProjectHeader: {
			title: 'Project Management UI',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/neural-style-transfer.png',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Share This',
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
		title: 'Cloud Storage Platform',
		url: 'cloud-storage-platform',
		category: 'UI/UX Design',
		img: '/images/ui-project-2.jpg',
		githubUrl: '',
		ProjectHeader: {
			title: 'Cloud Storage Platform',
			publishDate: 'Jul 26, 2021',
			tags: 'Web & Cloud',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/neural-style-transfer.png',
			},
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Share This',
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
		title: 'WeTalk Social Application',
		url: 'wetalk-social-app',
		category: 'Mobile Application',
		img: '/images/mobile-project-1.jpg',
		githubUrl: '',
		ProjectHeader: {
			title: 'WeTalk Social Application',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/neural-style-transfer.png',
			},
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Share This',
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
		title: 'Apple New Design System',
		url: 'apple-new-design-system',
		category: 'Web Application',
		img: '/images/web-project-1.jpg',
		githubUrl: '',
		ProjectHeader: {
			title: 'Apple New Design System',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Apple New Design System',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Apple New Design System',
				img: '/images/neural-style-transfer.png',
			},
			{
				id: uuidv4(),
				title: 'Kabul Apple New Design System',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Share This',
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
		id: 7,
		title: 'Face Recognition',
		category: 'Learning',
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
				img: '/images/face-recog-2.png',
			},
			{
				id: uuidv4(),
				title: 'Face Recognition System',
				img: '/images/face-recog-3.png',
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
