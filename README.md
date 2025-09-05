This project was developed to test the core functionalities of the Airbnb website using Playwright, a modern automation testing tool 🛠️. The project includes various test scenarios to ensure that the website's key features work correctly and as expected. ✨

Project Goal 🎯
The main objective of this project is to validate critical user flows on Airbnb with automated tests. The following scenarios have been tested within the scope of this project:
 
Homepage Access: The test verifies whether the homepage opens successfully. ✅

Basic Search Functionality: It checks if the search function for a specific location (Istanbul) works correctly. 🔍 

Detailed Search Scenario: A detailed search scenario with a specific location (Istanbul) 🗺️, check-in/check-out dates (September 15-16) 📅, and number of guests (1 person) 🧑‍🤝‍🧑 has been tested.

Technologies Used 💻
Playwright: This is the main automation tool for the project. It's a modern automation library that provides fast, reliable, and cross-browser testing. 🌐

JavaScript / TypeScript: The test code is written in JavaScript. 📜

Node.js: It provides the necessary environment for the project to run. 🖥️
Test Senaryoları 📝
The following tests were written to validate the project's main functionalities:

Airbnb homepage is opening: Tests access to the site by verifying the title of the Airbnb homepage. 🏠

Search for Istanbul on Airbnb website: Tests the search functionality by typing "Istanbul" in the search bar and checking if the URL changes correctly. 🏙️

Airbnb Istanbul, September 15-16, 1 person search test: A detailed search test with specific dates and guest count, followed by verification of the results page. 🗓️

How to Run the Project
1.Clone this project to your local machine. 📥 

2.Navigate to the project directory and run the following command in the terminal to install the necessary dependencies: 📦
   npm install
3. To run all tests, use the following command:
   npx playwright test
4. To view the test report:
   npx playwright show-report
