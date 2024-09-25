# Library App

This project is a simple **Library App** built using **Tailwind CSS** for styling and **JavaScript** for functionality. The app allows users to add books to their personal library by filling out a form that asks for details like the **book title**, **author**, **number of pages**, and whether the book has been read. The data is stored locally on the user's device using **Local Storage**, so the library persists even after refreshing the page.

## Features

- Add new books to the library by filling out a form.
- Fields include:
  - **Book Title**: The title of the book.
  - **Author**: The author of the book.
  - **Number of Pages**: How many pages the book has.
  - **Read Status**: Whether or not the user has read the book.
- Books are displayed in a cards format with their details.
- Data is saved in **Local Storage**, allowing users to retain their library between sessions.

- [Live Site](https://rh0se.github.io/Library-App/)

## Technologies Used

- **Tailwind CSS**: For responsive and utility-first styling.
- **JavaScript**: To handle form submission, DOM manipulation, and local storage management.
- **Local Storage**: To persist the user's library data locally in the browser.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/library-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd library-app
    ```

3. **Open `index.html` in your browser**:
    You can simply open the `index.html` file in your preferred web browser to start using the app.

4. **Add books to the library**:
    - Fill out the form with the book title, author, number of pages, and whether or not you’ve read the book.
    - Click on **"Add Book"** to add the book to your library. Your books will be saved in **Local Storage** and will remain available even after refreshing the page.

## Installation (Optional)

If you want to set up a development environment to make changes:

1. Install **Tailwind CSS** via npm:
    ```bash
    npm install -D tailwindcss
    ```

2. Build your CSS:
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

3. Edit the `index.html` and `app.js` files to customize the app according to your needs.


---

