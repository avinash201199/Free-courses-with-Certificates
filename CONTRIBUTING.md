## How to contribute in this repository 

You can contribute in many ways 

1. By adding new free courses into the list 

- Star this repository.
- Create an issue.
- Then fork this repository.
- Add description about the course with the link in the readme as well as in src/components/data/allcourse.json
- Make pull request and wait for review.


## Steps to add new Courses

- Add new course in readme with order.
- Head to src/components/data/allcourse.json
- To add a course, check if the title for your course Technology is present
- If so then just add the course data to cards of the Technology.
- For example, the title "Angular" is already present, you can add a card data to it.
- You can copy paste the icon value.
- Make sure to get a unique value for course name, source and provide a link to the course.

```json
{
    "cards": [
        {
            "icon": "fab fa-angular",
            "name": "Angular + NestJS",
            "source": "SoloLearn",
            "link": "https://www.sololearn.com/learning/1092"
        }
    ]
},
```

In case if your course Technology does not exist feel free to add it along with the title, example:
```json
{
    "title": "New Course Title",
    "cards": [
        {
            "icon": "Get this value from font awesome.com (Make sure to add classes only)",
            "name": "New Course",
            "source": "New Course Source",
            "link": "New Course Link"
        }
    ]
},
```

2. By Designing the website for this repository so that it can be helpful for more students

 - To design the website you can use HTML, CSS and JavaScript or anything you could suggest better then raise the issue.

3. If you are beginner then you can contribute by improving the structure or the layout or any mistakes in the repository.

#### Note- Before contributing please create an issue first so that I can assign you and you can start working on it.
