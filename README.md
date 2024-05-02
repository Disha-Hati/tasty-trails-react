# Tasty Trails- Swiggy Clone

This project is a clone of the popular food delivery app, Swiggy. It aims to replicate some of the core functionalities and user interface elements of Swiggy using modern web technologies.

### Tech Stack

- **React:** The project is built using the `create-react-app` boilerplate, allowing for efficient development and organization of components.
- **CSS:** Tailwind CSS is utilized for styling, providing a utility-first approach to styling components and layouts.
- **Routing:** React Router DOM is used for client-side routing, enabling navigation between different pages of the application without full page reloads.
- **State Management:** Redux Toolkit is employed for state management, offering a convenient way to manage application state and handle complex data flows.

### UI Features

- **Home Page:** Displays restaurant cards showcasing various eateries. Clicking on a card navigates the user to the respective restaurant's menu page.
- **Dark/Light Theme:** Utilizes context API to implement a dark and light mode toggle feature, enhancing user experience based on their preference.
- **Search Bar:** Implements debouncing in the search bar to improve performance, allowing users to efficiently search for restaurants.
- **Top Rated Restaurants:** Displays a button that, when clicked, shows all restaurants with a rating above 4.5 stars, aiding users in finding highly-rated establishments.
- **Offer Dropdown:** Shows available offers in a dropdown menu when the user clicks on the offer section, enhancing visibility of discounts and promotions.
- **Cart Page:** Navigates users to the cart page where they can view and manage items added to their cart.Powered by Redux Toolkit, it provides a seamless and efficient way to review and finalize your selections, bringing your culinary desires to fruition.
- **User Page:** Displays user information such as profile picture, name, and location, providing a personalized experience.
- **Error Page:** Utilizes `useErrorRouter` to handle incorrect URLs gracefully, redirecting users to an error page for a seamless browsing experience.



### Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.





