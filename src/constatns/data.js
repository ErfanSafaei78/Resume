//Profile image
import ProfileImg from "../assets/images/profileImg.jpg"
//project images
import Project01Image from "../assets/images/chemnitzImage.png";

export const data = {
    "content": {
        "sideBar": {
            "profile": {
                "profileImage": ProfileImg,
                "name": "Erfan Safaei",
                "designation": "Frontend Developer",
                "socialLinks": {
                    "linkedin": "linkedin.com/erfansafaei78",
                    "github": "github.com/erfansafaei78",
                    "facebook": "",
                    "twitter": "",
                    "behance": "",
                    "dribbble": ""
                },
                "personalInformation": {
                    "birth": "2000",
                    "website": "",
                    "phoneNumber": "+989363134954",
                    "email": "erfan.safaei.78@gmail.com",
                    "location": "Tehran,Iran"
                },
                "cvDownloadLink": "",
                "shareLink": ""

            },
            "widgets": [
                {
                    "title": "LANGUAGES",
                    "items": [
                        "English: native"
                    ]
                }
            ]
    
        },
        "sections": {
            "aboutMe": `In this course, topics and algorithms of programming with JavaScript language such as:
            Hoisting, Recursion, Closure, Sorting, Searching & Deep Searching, Cloning & Deep Cloning
            Topics related to Redux (designing and rewriting Redux and optimizing its efficiency), designing and rewriting DOM and Virtual DOM, topics related to React, working experience with Axios, Redux Saga and doing individual and group projects on these topics professionally It was paid.`,
            "resume": {
                "education": [
                    "Education",
                    {
                        "title": "JavaScript / React",
                        "institution": "Mapsa HR",
                        "fromYear": "2022",
                        "toYear": "2023",
                        "description": `In this course, topics and algorithms of programming with JavaScript language such as:
                        Hoisting, Recursion, Closure, Sorting, Searching & Deep Searching, Cloning & Deep Cloning
                        Topics related to Redux (designing and rewriting Redux and optimizing its efficiency), designing and rewriting DOM and Virtual DOM, topics related to React, working experience with Axios, Redux Saga and doing individual and group projects on these topics professionally It was paid.`,
                    },
                    {
                        "title": "Computer Engineering",
                        "institution": "Karaj Azad University",
                        "fromYear": "2019",
                        "toYear": "Current",
                        "description": ""
                    }
                ],
                "experience": [
                    "Experience",
                    {
                        "title": "Front-End Developer Intern",
                        "companyName": "Rahkar Hoshmand-e Iranian .co",
                        "fromYear": "2020",
                        "toYear": "2021",
                        "description": "Learn topics related to web design and programming and SEO"
                    }
                ]
            },
            "skills": ["React","Redux Thunk","Redux Saga","Axios","Javascript","git","CSS/SASS","Linux","HTML5"],
            "projects": [
                [Project01Image,],
                {
                    "title": "CHEMNITZ 2025",
                    "image": 0,
                    "description": `Chemnitz is a city located in Germany that has been chosen as the European Capital of Culture in 2025.
                    The mentioned project is a web application with a responsive design (Responsive Design) that was built with the React framework and it also uses TypeScript and SASS and is being implemented as a continuous delivery.`,
                    "link": "http://2025chemnitz.com/"
                }
            ]
        }
    }
}