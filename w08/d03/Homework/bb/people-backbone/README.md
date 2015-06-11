**DONT COPY PASTE**

**ASK YOURSELF WHAT YOU NEED TO DO AND WHY**
#Subjects and Observers

> The pattern of subjects and observers is a key takeaway from today's classwork. Subjects hold data and let their observers know when that data changes so they can behave accordingly. In Backbone, models are subjects and views are observers. Models should send out a signal when any data they contain is changed, and Views should be waiting to update themselves upon that change.


###Warm-Up
- Make a President model class by extending Backbone
    - practice making `instances` of People. Give them whatever attributes you want. Practice `get`ing and `set`ing their attributes
- Now make a PresidentView class by extending backbone
    - make `instances` of this class.
    - each PresidentView `instance` should observe one President model
      - make a function inside the PresidentView constructor called "changedModel" that logs "my model changed" when called.
      - make an initialize function inside the PresidentView constructor
          - we want the view to `listenTo` it's model
          - when `this.model` `change`s, call `this.changedModel`
          - practice changing the models with model.set



###Part One
Using Backbone, create a small application that:

- Updates the name and age of a person dynamically
    - If we enter an age and click the corresponding button, the age will update.
    - If we enter a name and click the corresponding button, the name will update.


###Thoughts
- You will have to create a Person model class and a Person view class by extending Backbone.
- Within app.js, you will have to create instances of the above classes.
- Use backbone to make sure that the PersonView instance is observing the Person instance.
- You will want to use a template here. Just bring in Mustache!




###Part Two
- Change the HTML and app.js so that the application tracks 3 different people.
    - You will have to add forms to accomodate this.
    - Remember to hardcode two more People models and corresponding views that observe the models.
