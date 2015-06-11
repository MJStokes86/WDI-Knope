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

     alice_jones.employment_history[0].contact
     alice_jones.employment_history[0].manager
     alice_jones.employment_history[1].manager.replace("God Himself", "Martin Short")
     alice_jones.address.street
     alice_jones.employment_history[0].name.replace("Dunkin Donuts", "funkin gonuts")
     alice_jones.address.street.replace('502 Main St.', '123 fake street')
     alice_jones.address.zip_code



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
  albumDetails: {J
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



/*- Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
- Change the release date of album2 to "October 30th, 1986"
- Add "LP" to album3's formats
- Add the label "Sire" to album4
- Add a formats array to album 5 and add "CD", "Cassette", and "LP"
- Make the label "emi" in album6 all Uppercase
- Convert the label property in album7 from a string into an array ["Sire", "EMI"]*/


album1.title.replace('Talking Heads', 'Talking Heads: 77')
album2.albumDetails.released.replace('July 14, 1978', 'October 30th, 1986')
album3.albumDetails.formats.push("LP")
album4.albumDetails.label.push("Sire")
album5.albumDetails.




var evidence = [{"name":"Jay","residence":"Baltimore","age":16,"relationship_to_hae":"Friend of Ex Boyfriend"},{"name":"Adnan","residence":"Baltimore","age":17,"relationship_to_hae":"Ex Boyfriend"},{"name":"Neel","residence":"Prospect Heights","age":29,"relationship_to_hae":"God only knows"},{"name":"Don","residence":"Maryland","age":22,"relationship_to_hae":"Ex Boyfriend"},{"name":"Fritz","residence":"Gowanus","age":28,"relationship_to_hae":"admirer from a distance"},{"name":"David Schwimmer","residence":"Manhattan","age":42,"relationship_to_hae":"friend"}]

for(var i = 0; i = evidence.length; i++){
  names.push(evidence[i].name);
}

