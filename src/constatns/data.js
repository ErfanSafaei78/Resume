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
                "designation": "Frontend Developer (JavaScript, React)",
                "socialLinks": {
                    "linkedin": "linkedin.com/in/erfansafaei78",
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
                    "location": "Chitgar Lake,Tehran,Iran"
                },
                "cvDownloadLink": "https://storage.mtabazi.com/records/files/uploads/documents/f420be61-6e9c-4b81-9cf1-55d3d857327c.pdf?requester=34362e3230392e3137392e323431&resource=753a31333138303633&from=63765f7472616e73&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20230219%2F%2Fs3%2Faws4_request&X-Amz-Date=20230219T100600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=a34aae18b63fda3025870cc8cd399c426b9eb64e251ac2afc7c7b4eb77f305e0",
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
            "aboutMe": `My first experience was coding with C++ language in university. Being interested in programming and researching this field, I decided to gain experience in the field of Front end using an internship. In order to progress further, I began to learn more in the form of self-study and participated in the Front End bootcamp of Mapsa Educational Group to deepen my knowledge in this field. Currently, having mastered javascript and react topics, I am ready to work with a professional team in which I can grow. In the future, I plan to learn next.js and typescript.`,
            "resume": {
                "education": [
                    "Education",
                    {
                        "title": "JavaScript / React",
                        "institution": "Mapsa HR & Training",
                        "fromYear": "2022",
                        "toYear": "2023",
                        "description": `In this course, topics and algorithms of programming with JavaScript language such as:Hoisting, Recursion, Closure, Sort Algorithms, Cloning & Deep Cloning Topics related to Redux (designing and rewriting Redux and optimizing its performance), designing and rewriting DOM and Virtual DOM, topics related to React, working experience with Axios, Redux Saga, writing tests with Jest and Cypress and doing individual and group projects Among the projects launched as pwa, using ionic, react, redux, redux saga and supabase libraries, it was handled professionally.`,
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
            "skills": ["JavaScript","React","Readux","Redux Saga","Familiar with test writing libraries (jest, cypress)","Familiar with Axios","ionic","git","CSS/SASS","HTML5"],
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