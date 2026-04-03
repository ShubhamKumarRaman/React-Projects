const data = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a powerful open-source JavaScript library used for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components and efficiently update the user interface when data changes by using a virtual DOM. React was developed by Facebook and is widely used because it improves performance, makes code more maintainable, and provides a declarative way to design complex UIs."
    },
    {
        id: 2,
        question: "What is an accordion component?",
        answer: "An accordion component is a user interface pattern that allows users to expand and collapse sections of content. It is commonly used to organize large amounts of information in a limited space, such as FAQs or menus. When a user clicks on a section header, the corresponding content is revealed while other sections may collapse, depending on the implementation. This improves user experience by reducing clutter and making content easier to navigate."
    },
    {
        id: 3,
        question: "Why use React hooks?",
        answer: "React hooks provide a way to use state and lifecycle features inside functional components, eliminating the need for class-based components. Hooks like useState, useEffect, and useContext make it easier to manage component logic, reuse code, and keep components clean and readable. They also enable better separation of concerns and simplify complex logic by allowing developers to break it into smaller, reusable functions."
    },
    {
        id: 4,
        question: "What is useState?",
        answer: "useState is a built-in React hook that allows you to add state to functional components. It returns a state variable and a function to update that state. When the state changes, the component automatically re-renders to reflect the new data. This makes it easy to handle dynamic data such as user input, toggles, counters, and more, without needing to write class-based components."
    },
    {
        id: 5,
        question: "What is useEffect?",
        answer: "useEffect is a React hook used to perform side effects in functional components. Side effects include operations like fetching data from an API, updating the DOM, setting up subscriptions, or timers. It runs after the component renders and can be configured to run only when certain dependencies change. This makes it a powerful tool for handling asynchronous operations and keeping your component behavior predictable."
    }
];

export default data;