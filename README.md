# react-shopping-cart
- A simple e-commerce Shopping-Cart app made using React JS.

## Description:
Using ReactJS and some external libraries, this app mimics an e-commerce platform, allowing users to browse categories and products, and add them in their cart.

## Features:
- Allows user to browse through different Categories and Products.
- Uses hard-coded JSON documents as Database for Category and Product information.
- Provides filters to help users find suitable Products.
- User can add/remove Products from the Cart, and can change their quantities.

## Main Pages/Components:
- **AppHeader:** App Header that stays throughout the app, displaying Title, current Products in the Cart, and a Nav bar to locate to different pages.  
- **Homepage**: Displays a Carousel of featured Products.
- **Categories**: Lists down the various Categories, namely, **Keyboards, Headphones, Speakers, and Mouse**. Clicking on a Category would lead to the **Products** page showing products from that Category.
- **Products**: Lists down the all the Products by default. User can add a Product to the Cart based on its availability. User can also make use of **filters** to find the best Product that fits their requirements.
- **Cart**: Located on the top right side of the App, it displays current Products in the Cart. Clicking on it leads to the **Checkout** page which displays information about all the Products in the Cart. The user can **add/reduce quantity**, or **reset** the whole Cart.

## React Hooks used:
- **useContext and Context API:** Built a *custom-hook*, **useCart()** around the **useContext** hook to share **Cart** state (current Products in the Cart) to all Components.
- **useReducer:** Built another *custom-hook* around the **useReducer** hook **useFilters()** to manage states for **filters** applied to Products.
*Find these files inside the **misc** folder under the **src** directory*.

## APIs/Libraries used;
- **rsuitejs:** To use UI Components like **Avatar, Button, Icon, and Carousel**.
- **styled-components:** To provide styles for different Pages/Components. Also used for globally-defined styles accessible to all Components, like **font-color**.
- **css-in-js-media:** To enable Responsive Design for Components styled using the **styled-components API**.
- **google-fonts:** For App Title font.

## Deployment
Check out the app deployed on GitHub pages, or [here](https://neilanshtriestocode.github.io/react-shopping-cart/#/).

## References:
- https://rsuitejs.com/
- https://styled-components.com/
- https://css-in-js-media.netlify.app/#/?id=question-how-to-use
- https://fonts.google.com/
