 var name = {name : "Doug A"};
 var location = {location: "Salt Lake City"};
 var occupations = {occupations : ["Creative Writer", "Computer Programmer", "Technical Support"]};
 var hobbies = [
         {
            name : "tennis",
            type : "sports"
         },
         {
            name : "hiking",
            type : "sports"
         },
         {
            name : "research",
            type : "intellectual"
         },
         {
            name : "writing",
            type : "intellectual"
         },
         {
            name : "reading",
            type : "intellectual"
         }
     ];

var skills = [
        {
            id: 1,
            name: "Javascript",
            experience: "Intermediate"
        }, 
        {
            "id": 2,
            "name": "HTML/CSS",
            "experience": "Intermediate"
        }, 
        {
            "id": 3,
            "name": "Angular JS",
            "experience": "Intermediate"
        }, 
        {
            "id": 4,
            "name": "Node JS",
            "experience": "Beginner"
        }
];

var secrets = [
    {
        "type" : "personal",
        "secret" : "I used to like Star Wars"
    },
    {
        "type" : "professional",
        "secret" : "I used to be a computer programmer"
    },
    {
        "type" : "professional",
        "secret" : "I want to be a computer programmer"
    }
]

var generateId = function(arr) {
    var len = arr.length;
    return len + 1;
}    

module.exports = {
    getName: function(req, res, next) {
        res.json(name);
    },
    getLocation: function(req, res, next) {
     
        res.json(location);
    },
    getOccupations: function(req, res, next) {
        if (req.query.order) {
            if (req.query.order === "asc")
                occupations.occupations.sort();
            else if (req.query.order === "desc")
                occupations.occupations.reverse();
        }
        res.json(occupations);
    },
    getLatestOccupation: function(req, res, next) {
        var latestOccupation = occupations.occupations[occupations.occupations.length - 1];
        // console.log("latestOccupation", latestOccupation);
        res.json({latestOccupation: latestOccupation});
    },
    getHobbies: function(req, res, next) {
        res.json(hobbies);
    },
    getTypeHobbies: function(req, res, next) {
        var type = req.params.type;
        var matchingHobbies = [];
        hobbies.forEach(function(hobby, index, array) {
                if (hobby.type === type) {
                    matchingHobbies.push(hobby);
                }   
        });
        res.json(matchingHobbies);
    },
    getSkills: function(req, res, next) {
        if (req.query.experience) {
            var experience = req.query.experience;
            var matchingSkills = [];
            skills.forEach(function(skill, index, array) {
                if (skill.experience === experience) {
                   matchingSkills.push(skill);
                }   
            });
            res.json(matchingSkills);
        }
        else {
            res.json(skills);
        }
    },
    getSecrets: function(req, res, next) {
        if (req.query.type) {
            var type = req.query.type;
            var matchingSecrets = [];
            secrets.forEach(function(secret, index, array) {
                if (secret.type === type) {
                   matchingSecrets.push(secret);
                }   
            });
            res.json(matchingSecrets);
        }
        else {
            res.json(secrets);
        }
    },
    updateName: function(req, res, next) {
        name.name = req.body.name
        res.json(name.name);
    },
    updateLocation: function(req, res, next) {
        location.location = req.body.location
        res.json(location.location);
    },
    createHobby: function(req, res, next) {
        hobbies.push(req.body);
        res.json(hobbies[hobbies.length - 1]);
    },
    createOccupation: function(req, res, next) {
        occupations.occupations.push(req.body.occupations);
        res.json(occupations.occupations[occupations.occupations.length - 1]);
    },
    createSkillz: function(req, res, next) {
        var obj = req.body;
        obj.id = generateId(skills);
        skills.push(obj);
        res.json(skills[skills.length - 1]);
    }
    
};