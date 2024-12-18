import evpark from '../assets/evpark.jpg';

const projects = [
    {
        id : 'evpark',
        title: 'EV Park N Charge',
        'subTitle': 'Android application for charging management',
        'description': 'The purpose of the EV charging online slot booking application is to provide a convenient and ecient way for EV drivers to book charging slots at public charging stations.The application should allow users to search for charging stations by location, type of charger, and availability. Users should also be able to book slots in advance and receive notications when their slot is ready.',
        'image': evpark,
        'tech': [
            {
                name: 'React',
                description: 'Employing React.js for frontend development to create a responsive and interactive user interface for users to create and manage sports tournaments.'
            },
            {
                name: 'SpringBoot',
                description: 'Spring Boot for backend development to create RESTful APIs for handling user authentication, tournament creation, and match scheduling.'
            },
            {
                name: 'Mysql',
                description: 'Utilizing MySQL as the database management system for storing match, tournament, player, and team data to ensure data integrity and consistency.'
            }
        ],
        'design' : 'SportSplash is designed to be a dynamic, user-friendly platform that caters to sports enthusiasts, allowing them to create and participate in various sports tournaments. The application follows a modular design with clear separation of concerns, ensuring maintainability and scalability. The design leverages modern web development technologies, ensuring a seamless and interactive user experience.',
        'lesson learned' : 'Developing the SportSplash application as part of our college semester project taught us many valuable lessons 📚. We learned the importance of good communication and teamwork, which were crucial for our success 🤝. This project helped us understand full-stack development better. We created user-friendly interfaces using React and Tailwind CSS, built strong backend services with Spring Boot, and managed our database with MySQL 💻. This experience also highlighted the importance of thorough testing and using user feedback to enhance our features 🛠️. Overall, working on SportSplash improved our technical skills and prepared us for future collaborative projects 🚀',

        'link': 'https://github.com/Kevin0403/SportSplash',
    },
    // {
    //     title: 'FarMart',
    //     'subTitle': '',
    //     'description': 'Project 2 Description',
    //     'image': sportSplash,
    //     'tech': [
    //         {
    //             name: 'React',
    //             description: 'React Description'
    //         },
    //         {
    //             name: 'NodeJS',
    //             description: 'NodeJS Description'
    //         }
    //     ]
    // },
    // {
    //     title: 'Project 3',
    //     'subTitle': 'Project 3 Subtitle',
    //     'description': 'Project 3 Description',
    //     'image': sportSplash,
    //     'tech': [
    //         {
    //             name: 'React',
    //             description: 'React Description'
    //         },
    //         {
    //             name: 'NodeJS',
    //             description: 'NodeJS Description'
    //         }
    //     ]
    // }
]

export default projects;