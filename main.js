const course_details = {
    "technology": [
        {
            "title": "Android Application Development",
            "courses": [
                {
                    "website_name": "Great Learning",
                    "course_description": "Android Application Development",
                    "link": "https://www.mygreatlearning.com/academy/learn-for-free/courses/android-application-development",
                    "tags": "android"
                },
                {
                    "website_name": "Udemy",
                    "course_description": "Become an Android Developer from Scratch",
                    "link": "https://www.udemy.com/course/become-an-android-developer-from-scratch",
                    "tags": "android,scratch"
                }
                {
                    "website_name": "Udemy",
                    "course_description": "Essential Non Technical Skills of Effective Data Scientists",
                    "link": "https://www.udemy.com/share/104fI23@HXPESfaal6TkxBGwZVO4s8bsVUcn2pCEvhFwpop5i0kIQeGdP4BlxQn6kiJdDGm_6w==/",
                    "tags": "Data Scientists, Begineers"
                }

            ]
        },
        {
            "title": "Angular",
            "courses": [
                {
                    "website_name": "Sololearn",
                    "course_description": "Angular + NestJS",
                    "link": "https://www.sololearn.com/learning/1092",
                    "tags": "angular"
                }
            ]
        },
        {
            "title": "Big Data",
            "courses": [
                {
                    "website_name": "GREAT LEARNING ACADEMY",
                    "course_description": "Introduction to Big Data and Hadoop",
                    "link": "https://www.greatlearning.in/academy/learn-for-free/courses/introduction-to-big-data-and-hadoop",
                    "tags": "bigdata"
                },
                {
                    "website_name": "GREAT LEARNING ACADEMY",
                    "course_description": "Introduction to Apache Hive",
                    "link": "https://www.greatlearning.in/academy/learn-for-free/courses/introduction-to-apache-hive",
                    "tags": "bigdata"
                },
                {
                    "website_name": "GREAT LEARNING ACADEMY",
                    "course_description": "Spark Basics",
                    "link": "https://www.greatlearning.in/academy/learn-for-free/courses/spark-basics",
                    "tags": "bigdata"
                },
                {
                    "website_name": "FUTURE LEARN",
                    "course_description": "Big Data Analytics: Opportunities, Challenges, and the Future",
                    "link": "https://www.futurelearn.com/courses/applied-big-data-analytics",
                    "tags": "bigdata"
                }
            ]
        },
        {
            "title": "Blockchain Technology",
            "courses": [
                {
                    "website_name": "COURSERA",
                    "course_description": "Blockchain Basics",
                    "link": "https://www.coursera.org/learn/blockchain-basics?ranMID=40328&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-DVWDPTM3td0_wUL_LQyS5Q&siteID=JVFxdTr9V80-DVWDPTM3td0_wUL_LQyS5Q&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=JVFxdTr9V80",
                    "tags": "blockchain"
                },
                {
                    "website_name": "COGNITIVE CLASS",
                    "course_description": "Blockchain Essentials",
                    "link": "https://cognitiveclass.ai/courses/blockchain-course",
                    "tags": "blockchain"
                },
                {
                    "website_name": "GREAT LEARNING ACADEMY",
                    "course_description": "Blockchain Basics",
                    "link": "https://www.greatlearning.in/academy/learn-for-free/courses/blockchain-basics",
                    "tags": "blockchain"
                },
                {
                    "website_name": "DIGITALDEFYND",
                    "course_description": "10 best Blockchain free certification courses",
                    "link": "https://digitaldefynd.com/best-blockchain-courses-training-and-certifications-online/#1_Blockchain_Certification_by_INSEAD_Courser",
                    "tags": "blockchain"
                },
                {
                    "website_name": "PLURALSIGHT",
                    "course_description": "Blockchain Principles and Practices",
                    "link": "https://www.pluralsight.com/courses/blockchain-principles-practices?clickid=w3vydT2oUxyIWE2wQIVNPydYUkBXHI1YZ05ezo0&irgwc=1&mpid=1193463&aid=7010a000001xAKZAA2&utm_medium=digital_affiliate&utm_campaign=1193463&utm_source=impactradius",
                    "tags": "blockchain"
                }
            ]
        }
    ]
}

let technologyTemplate = ``;
course_details.technology.forEach((tech, index) => {
    const technologyTitle = tech.title;
    let courseTemplate = ``
    tech.courses.forEach(course => {
        courseTemplate += ` <div class="row">
        <div class="collapse multi-collapse" id="multiCollapse_${index + 1}">
            <div class="card card-body" style="cursor: pointer; margin: 10px 0"
                onClick="window.open('${course.link}','_newtab');">
               ${course.website_name} - ${course.course_description}
            </div>
        </div>
    </div>`
    })
    technologyTemplate += `<div>
    <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse_${index + 1}" role="button"
            aria-expanded="false" aria-controls="multiCollapse_${index + 1}">${technologyTitle}</a>
    </p>
    <div id=course_${index + 1} style="margin: 5px 20px 5px 20px">${courseTemplate}</dix>
</div>`
})
// load courses from the json
window.onload = function () {
    document.getElementById('course-list').innerHTML = technologyTemplate;
};
