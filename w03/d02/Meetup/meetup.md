#Hipster Code Meetup

##Problem

NYC is home to some pretty sweet, hipster developers. Genevieve, a developer from BKLN's up-and-coming Carrol Gardens neighborhood, wants to facillitate a monthly meetup for hipster devs. She knows there is nothing more enticing to fellow developers than a hand-crafted, artisinal TCP app. She has contracted you to build it for her.

1) The users should be able to access the app via their username password and IP address.

~~~bash
telnet 127.0.0.1 8124
username password 
'User is connected'
~~~

2) The admin should be able to create an event only by her.

```bash
'create new topic date'
```


3) The developers should be able to see the date and the name of the current event

```bash

telnet 127.0.0.1 8124
current date topic

'Hackathon May 18th, 2015'
```
4) The developers should be able to RSVP the event

```bash
telnet 127.0.0.1 8124 RSVP topic

'You are set to attend the event'
```
The username and contact info should display

```bash
Username and email address
```
If RSVP is unsuccessful it should print

```bash
'Unable to RSVP. Please provide your name and email address'
```

5) The app should display a list of attendees....

```bash
nodejs meetupapp.js password topic list
telnet 127.0.0.1 8124

'There are currently # of developers attending this event. '
```
