import evpark from '../assets/evpark.jpg';

const projects = [
    {
        id : 'evpark',
        title: 'EV Park N Charge',
        'subTitle': 'Android application for charging management',
        'description': 'This EV charging slot booking application aims to simplify the charging experience for electric vehicle drivers. It empowers users to easily find available charging stations, book slots in advance, and receive timely notifications. By effectively managing charging station resources, the application contributes to a smoother and more efficient EV charging ecosystem.',
        'image': evpark,
        'tech': [
            {
                name: 'Java',
                description: 'Leveraging Java for Android development to build a user-friendly and robust mobile application for EV drivers.'
            },
            {
                name: 'Spring Boot',
                description: 'Utilizing Spring Boot as the backend framework to create RESTful APIs for managing user accounts, booking slots, and handling charging station data.' 
            },
            {
                name: 'MySQL',
                description: 'Employing MySQL as the database to efficiently store and manage user data, charging station information, and booking records.'
            },
            {
                name: 'Google Maps API',
                description: 'Integrating Google Maps API to provide accurate location-based services, enabling users to easily find charging stations nearby and plan their routes.'
            }
        ],
        'design' : 'The application emphasizes a clean and intuitive user interface, prioritizing ease of navigation and a seamless user experience. The design incorporates material design principles for a visually appealing and consistent look and feel across different Android devices.',
        'lesson learned' : 'This project provided valuable insights into the challenges and rewards of developing a mobile application for a specific domain. We learned the importance of understanding user needs, designing a user-friendly interface, and building a robust backend infrastructure. The project also highlighted the significance of effective project management and collaboration within a team.',
        'link': 'https://github.com/jenish0612', 
    },
    // ... other projects
];

export default projects;