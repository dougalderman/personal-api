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
    updateName: function(req, res, next) {
        name.name = req.body
        res.json(name.name);
    },
    updateLocation: function(req, res, next) {
        location.location = req.body
        res.json(location.location);
    },
    createHobby: function(req, res, next) {
        hobbies.push(req.body);
        res.json(hobbies[hobbies.length - 1]);
    },
    createOccupation: function(req, res, next) {
        occupations.occupations.push(req.body);
        res.json(occupations.occupations[occupations.occupations.length - 1]);
    }

};