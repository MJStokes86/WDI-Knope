
#Alice Jones


```javascript
var alice_jones = {
  name: 'Alice Jones',
  dob: "10-30-87",
  address: {
    street: '502 Main St.',
    city: 'Newton',
    state: 'MA',
    zip_code: '01345'
    },
    employment_history: [
    {
      name: "Dunkin Donuts",
      title: "Donut Maker",
      contact: '978 453-5680',
      manager: "Joe Conway",
      },
      {
        name: "Google",
        title: "CEO",
        contact: '413 958-8909',
        manager: "God Himself"
        },

        ]
      }
```

Write code to:
- log the most recent job's manager and phone number
- change the manager at google to "Martin Short"
- log Alice's street address
- change the name of Dunkin Donuts to "funkin gonuts"
- change alice's address to '123 fake street'
- print out her zip code

#Talking Heads

- Below are some objects modeled to represent Talking Heads albums

```javascript
album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: "September 16, 1977",
    label: "Sire",
    formats: ["LP"]
  }
}



album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: "July 14, 1978",
    label: "Sire",
    formats: ["LP", "8-track"]
  }
}



album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: "August 3, 1979",
    label: "Sire",
    formats: ["Cassette"]
  }
}



album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: "October 8, 1980",
    formats: ["Cassette", "LP"]
  }
}


album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: "May 31, 1983",
    label: "Sire"
  }
}



album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: "June 10, 1985",
    label: ["Sire", "emi"],
    formats: ["CD", "cassette", "LP"]
  }
}



album7 = {
  title: "True Stories",
  albumDetails: {
    released: "October 7, 1986",
    label: "Sire, EMI",
    formats: ["CD", "cassette", "LP"]
  }
}

album8 = {
  title: "Naked",
  albumDetails: {
    released: "March 15, 1988",
    label: ["Sire", "EMI"],
    formats: ["CD", "cassette", "LP"]
  }
}
```

- Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
- Change the release date of album2 to "October 30th, 1986"
- Add "LP" to album3's formats
- Add the label "Sire" to album4
- Add a formats array to album 5 and add "CD", "Cassette", and "LP"
- Make the label "emi" in album6 all Uppercase
- Convert the label property in album7 from a string into an array ["Sire", "EMI"]

#Serial

- You've been tasked with solving the 1999 murder of Baltimore native Hae Lee. Copy the evidence below into a file and iterate through the collection to solve her murder.
- **bonus**
  - record a podcast about it.

```javascript
var evidence = [{"name":"Jay","residence":"Baltimore","age":16,"relationship_to_hae":"Friend of Ex Boyfriend"},{"name":"Adnan","residence":"Baltimore","age":17,"relationship_to_hae":"Ex Boyfriend"},{"name":"Neel","residence":"Prospect Heights","age":29,"relationship_to_hae":"God only knows"},{"name":"Don","residence":"Maryland","age":22,"relationship_to_hae":"Ex Boyfriend"},{"name":"Fritz","residence":"Gowanus","age":28,"relationship_to_hae":"admirer from a distance"},{"name":"David Schwimmer","residence":"Manhattan","age":42,"relationship_to_hae":"friend"}]
```
###Investigation
- Create a new array that only holds the names of the suspects
- Create a new array of suspects that are older than 20 and younger than 30
- Create a new array of suspects that are "Ex Boyfriend"s
- Create an array holding any suspects that reside in Baltimore, are younger than 20 and are considered "Ex Boyfriend"s. There's your killer.
