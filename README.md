**Zerodha-Clone Project**

This project is a Zerodha-clone website that replicates features of the popular stock trading platform. The application includes a front-end for viewing and buying stocks, and a back-end built using Node.js and MongoDB for managing user orders, holdings, and positions.



**Project Structure**


The project is organized into three main folders:

1.	zerodha-frontend: Contains all the React.js components for the UI organized in separate folders based on functionality , the Navbar, footer, and reusable elements for the interface are also in this folder.

2.	dashboard: Responsible for stock-related functionality such as buying and selling stocks, displaying holdings, and showing various charts for performance and data visualization. This is connected to mongo database and the data are queried from there.

3.	backend: Built using Node.js and Express.js. This part handles data management, API routes, and communication with the MongoDB Atlas database, including user orders, stock holdings, and positions.


**Features**


•	Full Stack MERN App: Complete implementation using React for frontend and Node.js with MongoDB for backend.

•	Reusability: Components like openAccount, footer, and navbar are reused across pages, improving the code maintainability and reducing redundancy.

•	React Routes: used to set up internal  routes for the navbar to render different sections.

•	Kite Dashboard: A dashboard page that shows stock holdings with options to buy or sell stocks. The stock data is stored and updated in a MongoDB Atlas database.

•	Charts and Graphs: Integration with Chart.js for visualizing stock performance through graphs like doughnut and vertical bar charts.
 
   
**Key Tools and Technologies**


Frontend:

•	React.js for UI components and state management.

•	Material UI and Bootstrap for styling and responsiveness.

•	Axios for API calls to the backend.

•	HTML, CSS, and JavaScript for structuring and styling.



Backend:


•	Node.js and Express.js to handle API requests and business logic.

•	MongoDB Atlas for storing stock data, user orders, and positions.

•	Cors for managing cross-origin requests.


Charts:


•	Chart.js for dynamic charts and data visualizations.


 
