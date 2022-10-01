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
        }
    ]
}

let technologyTemplate = ``;
course_details.technology.forEach((tech, index) => {
    const technologyTitle = tech.title;
    let courseTemplate = ``
    tech.courses.forEach(course => {
        courseTemplate += ` <div class="row">
        <div class="collapse multi-collapse" id="multiCollapse">
            <div class="card card-body" style="cursor: pointer"
                onClick="window.open('${course.link}','_newtab');">
               ${course.website_name} - ${course.course_description}
            </div>
        </div>
    </div>`
    })
    technologyTemplate += `<div>
    <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse" role="button"
            aria-expanded="false" aria-controls="multiCollapse">${technologyTitle}</a>
    </p>
    <div id=course_${index + 1}>${courseTemplate}</dix>
</div>`
})
// load courses from the json
window.onload = function(){
    document.getElementById('course-list').innerHTML = technologyTemplate;
};
