# 0x15. JavaScript - Web jQuery

## Overview

This project focuses on using jQuery to enhance front-end web development by manipulating the DOM, handling events, and making AJAX requests. You'll work with JavaScript in the browser and learn to distinguish between static and dynamic data handling.

### Concepts Covered

- JavaScript in the browser
- Dealing with data statically versus dynamically

## Resources

The following resources will help you understand the project:

- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [Selector](https://api.jquery.com/category/selectors/)
- [Get and set content](https://api.jquery.com/category/manipulation/)
- [Manipulate CSS classes](https://api.jquery.com/category/css/)
- [Manipulate DOM elements](https://api.jquery.com/category/manipulation/)
- [API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Introduction](https://www.w3schools.com/js/js_ajax_intro.asp)
- [GET & POST request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JQuery Ajax Tutorial #1 - Using AJAX & APIs](https://www.youtube.com/watch?v=fEYx8dQr_cQ)
- [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JQuery](https://jquery.com/)
- [JQuery API](https://api.jquery.com/)
- [JQuery Ajax](https://api.jquery.com/jquery.ajax/)

## Learning Objectives

By the end of this project, you should be able to:

- Explain why jQuery simplifies front-end programming.
- Select HTML elements using JavaScript and jQuery.
- Understand the differences between ID, class, and tag name selectors.
- Modify an HTML element's style and content.
- Manipulate the DOM.
- Perform GET and POST requests using jQuery Ajax.
- Listen and bind to DOM and user events.

## Requirements

### General

- Allowed editors: `vi`, `vim`, `emacs`
- All your files will be interpreted on Chrome (version 57.0)
- All your files should end with a new line
- A `README.md` file at the root of the project is mandatory
- Your code should be semistandard compliant. Use the flag `--global $` to allow global variables like `jQuery`.
- You must use jQuery version 3.x
- You are not allowed to use `var`
- HTML should not reload for each action (DOM manipulation, updating values, fetching data, etc.)

### Importing jQuery

Include jQuery in your HTML files:

```html
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

# Tasks

## 0. No JQuery
Write a JavaScript script that updates the text color of the `<header>` element to red (#FF0000). You must use `document.querySelector` to select the HTML tag. The jQuery API is not allowed.

**File:** `0-script.js`

## 1. With JQuery
Write a JavaScript script that updates the text color of the `<header>` element to red (#FF0000). Use the jQuery API instead of `document.querySelector`.

**File:** `1-script.js`

## 2. Click and turn red
Write a JavaScript script that updates the text color of the `<header>` element to red (#FF0000) when the user clicks on the tag `DIV#red_header`. Use the jQuery API.

**File:** `2-script.js`

## 3. Add .red class
Write a JavaScript script that adds the class `red` to the `<header>` element when the user clicks on the tag `DIV#red_header`. Use the jQuery API.

**File:** `3-script.js`

## 4. Toggle classes
Write a JavaScript script that toggles the class of the `<header>` element between `red` and `green` when the user clicks on the tag `DIV#toggle_header`. The `<header>` element must always have one class: `red` or `green`, never both and never empty. Use the jQuery API.

**File:** `4-script.js`

## 5. List of elements
Write a JavaScript script that adds an `<li>` element to a list when the user clicks on the tag `DIV#add_item`. The new element must be `<li>Item</li>` and added to `UL.my_list`. Use the jQuery API.

**File:** `5-script.js`

## 6. Change the text
Write a JavaScript script that updates the text of the `<header>` element to "New Header!!!" when the user clicks on `DIV#update_header`. Use the jQuery API.

**File:** `6-script.js`

## 7. Star Wars character
Write a JavaScript script that fetches the character name from the URL `https://swapi-api.alx-tools.com/api/people/5/?format=json` and displays it in the HTML tag `DIV#character`. Use the jQuery API.

**File:** `7-script.js`

## 8. Star Wars movies
Write a JavaScript script that fetches and lists the titles of all movies using the URL `https://swapi-api.alx-tools.com/api/films/?format=json`. The movie titles must be listed in the HTML tag `UL#list_movies`. Use the jQuery API.

**File:** `8-script.js`

## 9. Say Hello!
Write a JavaScript script that fetches from `https://hellosalut.stefanbohacek.dev/?lang=fr` and displays the value of "hello" in the HTML tag `DIV#hello`. Your script must work when it is imported from the `<head>` tag. Use the jQuery API.

**File:** `9-script.js`




## Advanced Tasks

10. **No jQuery - document loaded**
   Write a JavaScript script that updates the text color of the `<header>` element to red (#FF0000):
   - You must use `document.querySelector` to select the HTML tag.
   - You can’t use the jQuery API.
   - Note: Your script must be imported from the `<head>` tag, not at the end of the HTML.
   - File: [100-script.js](100-script.js)
   - HTML file for testing:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>Holberton School</title>
         <script type="text/javascript" src="100-script.js"></script>
       </head>
       <body>
         <header> 
           First HTML page
         </header>
         <footer>
           Holberton School - 2017
         </footer>
       </body>
     </html>
     ```

11. **List, add, remove**
   Write a JavaScript script that adds, removes, and clears `<li>` elements from a list when the user clicks:
   - The new element must be: `<li>Item</li>`.
   - The new element must be added to `UL.my_list`.
   - When the user clicks on `DIV#add_item`: a new element is added to the list.
   - When the user clicks on `DIV#remove_item`: the last element is removed from the list.
   - When the user clicks on `DIV#clear_list`: all elements of the list are removed.
   - You can’t use `document.querySelector` to select the HTML tag.
   - You must use the jQuery API.
   - Your script must work when imported from the `<head>` tag.
   - File: [101-script.js](101-script.js)
   - HTML file for testing:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>Holberton School</title>
         <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
         <script type="text/javascript" src="101-script.js"></script>
       </head>
       <body>
         <header> 
           First HTML page
         </header>
         <br />
         <div id="add_item">Add item</div>
         <div id="remove_item">Remove item</div>
         <div id="clear_list">Clear list</div>
         <br />
         <ul class="my_list">
           <li>Item</li>
         </ul>
         <footer>
           Holberton School - 2017
         </footer>
       </body>
     </html>
     ```

12. **Say hello to everybody!**
   Write a JavaScript script that fetches and prints how to say “Hello” depending on the language:
   - You should use the API service: `https://www.fourtonfish.com/hellosalut/hello/`.
   - The language code will be the value entered in the tag `INPUT#language_code` (e.g., es, fr, en, etc.).
   - The translation must be fetched when the user clicks on `INPUT#btn_translate`.
   - The translation of “Hello” must be displayed in the HTML tag `DIV#hello`.
   - You can’t use `document.querySelector` to select the HTML tag.
   - You must use the jQuery API.
   - Your script must work when imported from the `<head>` tag.
   - File: [102-script.js](102-script.js)
   - HTML file for testing:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>Holberton School</title>
         <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
         <script type="text/javascript" src="102-script.js"></script>
       </head>
       <body>
         <header> 
           Say Hello
         </header>
         <br />
         <input id="language_code" type="text" placeholder="Language code"/>
         <input id="btn_translate" type="button" value="Translate"/>
         <br />
         <div id="hello"></div>
         <br />
         <footer>
           Holberton School - 2017
         </footer>
       </body>
     </html>
     ```

13. **And press ENTER**
   Write a JavaScript script that fetches and prints how to say “Hello” depending on the language:
   - You should use the API service: `https://www.fourtonfish.com/hellosalut/hello/`.
   - The language code will be the value entered in the tag `INPUT#language_code` (e.g., es, fr, en, etc.).
   - The translation must be fetched when the user clicks on `INPUT#btn_translate` or presses ENTER when the focus is on `INPUT#language_code`.
   - The translation of “Hello” must be displayed in the HTML tag `DIV#hello`.
   - You can’t use `document.querySelector` to select the HTML tag.
   - You must use the jQuery API.
   - Your script must work when imported from the `<head>` tag.
   - File: [103-script.js](103-script.js)
   - HTML file for testing:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>Holberton School</title>
         <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
         <script type="text/javascript" src="103-script.js"></script>
       </head>
       <body>
         <header> 
           Say Hello
         </header>
         <br />
         <input id="language_code" type="text" placeholder="Language code"/>
         <input id="btn_translate" type="button" value="Translate"/>
         <br />
         <div id="hello"></div>
         <br />
         <footer>
           Holberton School - 2017
         </footer>
       </body>
     </html>
     ```

