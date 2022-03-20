Vocabulary App

Concept

The idea for this project came from a time when I was searching for a similar solution. I was just starting to learn Danish and although there are various applications which help people learn other languages, I wanted to have option to set up my “learning plan”. I was searching for an app where I could upload vocabulary list so I could learn and practise new words. 

This experience inspired me to create an application for this project. The idea for this project, therefore, became an app where a user can upload their own words and their meaning, with option to upload an image for those who prefer visual learning. Since majority of apps is created in English, this kind of solution offers users an option to upload words in two different languages, and so the translation doesn’t have to be in English. 

In my initial idea this kind of application could have numerous features, for example games and tests. The app could be able to generate a game or a test where it would ask for a translation or a meaning of the word. I imagine the concept of this feature would be similar to games in for example Duolingo. The app could afterwards determine which words user learnt and which of them need to be practised more. Due to lack of the time I couldn’t create these features but I think they would make an amazing part of such application.

Description

My Vocabulary App consists of three pages “Learn”, “Add” and “Revise”. On the page “Learn” you can see all your created words with their translation (text or image). Each row ends with pop-over icon that opens options of three actions:
 “Move to Revise” - that allows user to move element to page “Revise”. When user learn a word but doesn’t want to get rid of it yet, they can store it in the “Revise” page and get to it later.
“Edit” - that allows user to update the element.
“Delete” - that allows user to remove the element.

Page “Add” is used to create new elements. After pressing save the “Add” page reloads and therefore user can keep uploading words without being redirected to the “Learn” page.

Page “Revise” works in the same way as page “Learn” with the difference in the option “Move to Learn”.


Design

Regarding design I opted for simple layout in order to make the app easy to use and navigate. For navigation I used tab bar in the bottom part of the screen, which consists of three tabs “Learn”, “Add” and “Revise”. Pages “Learn” and “Revise” consists of the same layout and design as they differ only in usability function. For displaying words and their translation I decided to use grid layout which helped me organise text elements. Words and their translations are positioned in rows divided by lines, which reminded me of regular dictionaries. “Add” and “Update” pages contain only inputs and Save button for simple usage. 


Project structure

This application consists of four JSX pages. Although there are only three clickable tabs “Learn”, “Add” and “Revise”, there is fourth page “Update”. Each page contains a header and a component with the content. 

In pages “Learn” and “Revise” application loops through the database and maps all the elements. Each element is then displayed as component. The component in this case is one row containing word and translation. In both of these pages application also filters only those items from the database which have corresponding location (learn/revise). When user clicks on “Move to Learn/Revise” in the popover, “location” in the database changes.

When user clicks on “Edit”, application redirects to page “Update” where user can change the information. After clicking on “Save” button, application returns to previous page.

When user adds new element on page “Add”, after clicking the “Save” button application save the information about “word”, “translation” and image using “useState” hook in the database with “location: learn” as default. Then all values are set to empty string using “useState” hook.


How to run the app

In order to run the application in the browser, run $ ionic serve from the command line in the project's directory (learn-vocab). 

In order to run the application in the browser, run $ npx cap run ios from the command line.