 # Course Registration

 <h2>React is a powerful library for building dynamic and interactive web applications. Here are three project features that showcase some of React's capabilities.</h2>
 
- User Authentication and Authorization.

- Interactive Dashboards.
  
- Real-Time Data Updates.

# In the assignment project, state management is primarily handled using React's built-in `useState` hook. Here's how state is managed in this project:

1. **Course Bookmarks and Credits:**
   - `bookmarks` state is used to keep track of the courses that the user has bookmarked. It's initialized as an empty array.
   - `courseCredit` state keeps track of the total credit hours of the bookmarked courses.
   - `remaining` state tracks the remaining credit hours that a user can add to their bookmarks (initialized at 20).

2. **Adding Courses to Bookmarks:**
   - The `handleAddToBookmark` function is called when a user clicks on the "Add to Bookmark" button for a course card.
   - It first checks if the course already exists in the `bookmarks` array to prevent duplicates. If the course is already in the bookmarks, a toast notification is shown to the user.
   - If the course is not in the bookmarks, it calculates the total credit hours of the courses in the bookmarks and checks if it exceeds 20 credit hours (the maximum allowed). If it exceeds the limit, a toast notification is displayed.
   - If the total credit hours are within the limit, the new course is added to the `bookmarks` array, and the `courseCredit` and `remaining` states are updated accordingly.

3. **Toast Notifications:**
   - Toast notifications are displayed using the `react-toastify` library. The `notify` and `notify1` functions trigger toast messages when certain conditions are met during the course addition process.

4. **Rendering UI Components:**
   - The course cards and bookmarks are rendered using the `Cards` and `Bookmarks` components. The `handleAddToBookmark` function is passed as a prop to the `Cards` component to allow users to add courses to their bookmarks.

5. **Updating UI with State Changes:**
   - Whenever a course is added to bookmarks or when the credit state changes, the UI components relying on these states are automatically re-rendered to reflect the updated information.

the state management in this project is focused on keeping track of bookmarked courses, calculating total credits, and ensuring that users don't exceed the maximum credit limit. React's `useState` hook is used effectively to manage and update these states, and toast notifications provide feedback to the user based on specific conditions.


# <h1>Resources</h1>

CSS Framework -> [Tailwind](https://tailwindcss.com/) , [Daisyui](https://daisyui.com/)

React Hot Toast -> [Link](https://react-hot-toast.com/docs)

Icon -> [ReactIcon](https://react-icons.github.io/react-icons/search?q=dol)


 
