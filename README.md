practical based
Brief Overview of Decisions Made During the Enhancement Process
During the enhancement process, we focused on making the React application more reusable, flexible, and user-friendly by implementing a Custom Hook named useFetch.

The following decisions were made:

1. Custom Hook Implementation
We created a reusable custom hook called useFetch to simplify API data-fetching operations and avoid writing the same logic in multiple components.

2. State Management
We used React's useState hook to manage three important states: API data, loading status, and error information.

3. API Fetching Management
We used useEffect to execute API requests when the component loads or when the API URL changes.

4. Function Optimization
We used useCallback to maintain a stable reference to the API-fetching function and avoid unnecessary function recreation.

5. Error Handling
We implemented error handling to manage situations such as network failures, unavailable APIs, and unsuccessful server responses.

6. API Selection
We initially selected the EscuelaJS API. Due to accessibility issues during testing, we switched to DummyJSON to continue testing the application's functionality.

7. User Interface Enhancement
We introduced loading messages, error messages, product information, and responsive product cards to improve the overall user experience.

8. Code Reusability
We separated API-fetching logic from UI components so that the same custom hook can be reused for different APIs, such as products, users, and employees.
