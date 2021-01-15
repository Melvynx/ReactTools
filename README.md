# ⚡️ React Tools ⚡️

> It's an Home Page with three tools.

### Motivation

To learn React and API with Firebase and Github api.

## 1. Random Sentence 

> Random a List of sentence.

We can add how many **Sentence** we want. And click on *randomizz* for give a Random List of your list.

We have 2 settings 🔧:
1. For set a timer before you can see the random list
2. For set only one sentence after clicking on *randomizz*

## 2. Base calculator

> Change base 10 to base **2** or **8** or **16**.

We can input a **number** and the calculator which instantly calculates the other bases.     

We have 4 settings 🔧:

1. Display / hide base 2 
2. Display / hide base 8 
3. Display / hide base 10
4. Display / hide base 16

## 3. My GitHub custom page

> I created a gitHub page with https://developer.github.com/v3/

To familiarize myself with api in GitHub, I created my Custom page GitHub with list of Repository and Commit. 

On this page, we can find information of my github account 👨‍💻.
After, we have a card per repository, with commit list and fork's link.

## Change log

* V1.6 :
    * Auth
        * Add user dialog (for see account)
        * add login dialog
        * add create account dialog
        * can create a group
        * add type password on password
        * add error of firebase on account create 
    * Forum
        * Add validation value on create topic
        * add validation value on create comment
        * if you're login, the username is not require
        * remove beug on unmounted component
        * can submit with enter key
        * change width forum
        * change marge forum card topic
        * add skeleton to topic
        * add setting button (edit and delete) -> only for owner user or admin.
        * Add validate icon when topic / answer is create by authentication user
            * change text on delete button by props

* V1.5 : 
    * **Global**
        * Refonte all style
        * Change primary and secondary color
        * Change all background
        * Change display button
        * -> style smooth 😮
    * Add a **Forum**
        * can create topic
        * can comment topic

* V1.3 : 
    * GitHub page
        * add skeleton before request
    * RandomSentence
        * add settings : edit time timer 
    * Topic (not visible)
        * Start topic
        * Link with firebase
        * Create Topic component
        * Other in progress...

* V1.3 : 
    * GitHub page
        * [NEW] GitHub Page is Deploy !!!
        * Change how request send on commit link
        * Fix warning
    * App 
        * Add footer
        * Reduc footer on smartphone
    * HomePage
        * Add card for gitHub page
    * RandomSentence
        * Add clean button

* V1.2 : 
    * My GitHub Page (not visible)
        * Add Acthor component 
        * change style card 
    * Base Calculator
        * Resolve helper text error
    * Shuffle Sentence
        * Resolve error for button on button


* V1.1 : 
    * Base Calculator
        * Add animation on focus
        * Remove alert on error
        * Add helper text on error
    * My GitHub Page
        * In Progress....
    * HomePage
        * Change Home Button (arrow to home icon)
