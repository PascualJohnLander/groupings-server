const express = require('express');
const app = express();

const dsUsers = [
    {
        id: 1,
        name: [ "ingredient for chicken",
            "4 boneless, skinless chicken breasts",
            "1/4 cup olive oil",
            "3 tablespoons fresh lemon juice",
            "2 cloves garlic, minced",
            "1 teaspoon dried oregano",
            "1 teaspoon dried thyme",
            "1 teaspoon paprika",
            "Salt and black pepper to taste",
            "Lemon wedges for serving",
            "Chopped fresh parsley for garnish"
        ]
    },
    {
        id: 2,
        name: [ "ingredient for crab",
            "2 lbs crab legs",
            "1/2 cup unsalted butter, melted",
            "4 cloves garlic, minced",
            "1 tablespoon fresh lemon juice",
            "1 teaspoon Old Bay seasoning",
            "1 tablespoon chopped fresh parsley",
            "Salt and pepper to taste"
        ]
    },
    {
        id: 3,
        name: [ "ingredient fro shrimp",
        "8 oz linguine or spaghetti",
        "1 lb large shrimp, peeled and deveined",
        "3 tablespoons olive oil",
        "4 cloves garlic, minced",
        "1/2 teaspoon red pepper flakes (optional)",
        "1/4 cup fresh lemon juice",
        "Zest of 1 lemon",
        "1/2 cup cherry tomatoes, halved",
        "1/4 cup chopped fresh parsley",
        "Salt and black pepper to taste",
        "Grated Parmesan cheese for serving"
    ]
    },
    {
        id: 4,
        name: [ "ingredient for Pasta Primavera",
            "8 oz penne pasta",
            "2 tablespoons olive oil",
            "1 bell pepper, thinly sliced",
            "1 zucchini, thinly sliced",
            "1 cup cherry tomatoes, halved",
            "1 cup broccoli florets",
            "3 cloves garlic, minced",
            "1/4 cup grated Parmesan cheese",
            "Salt and black pepper to taste",
            "Fresh basil for garnish"
        ]
    },
    {
        id: 5,
        name: [ "ingredient for Mango Avocado Salsa",
            "1 ripe mango, diced",
            "1 avocado, diced",
            "1/2 red onion, finely chopped",
            "1 jalapeño, seeded and minced",
            "1/4 cup fresh cilantro, chopped",
            "Juice of 2 limes",
            "Salt and black pepper to taste",
            "Tortilla chips for serving"
        ]
    },
    {
        id: 6,
        name: [ "ingredient for Honey Mustard Glazed Salmon",
            "4 salmon fillets",
            "1/4 cup Dijon mustard",
            "2 tablespoons honey",
            "1 tablespoon soy sauce",
            "2 cloves garlic, minced",
            "1 teaspoon fresh ginger, grated",
            "1 tablespoon olive oil",
            "Lemon wedges for serving",
            "Chopped fresh parsley for garnish"
        ]
    },
];

app.get('/api/users', (req, res) => {
    //Return the list of users
    res.send(dsUsers);
});

app.get('/api/users/:id', (req, res) => 
{
    const user = dsUsers.find((c) => c.id
    === parseInt(req.params.id));
    if(!user)
        return res.status(404).send('the user with the given ID was not found');
    res.send(user);
});

app.get('/api/users', (req, res) => {
    //sort by name from parameters
    if (req.query.sortBy === 'name') {
        dsUsers.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
    }
        //return the list of users
        res.send(dsUsers)
});

app.post('/api/users', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        // 400 Bad Request
        res
           .status(400)
           .send('Name is required and should be minimum 3 characters.');
           return;    
    }
    const user = dsUsers.find((c) => c.id === parseInt(req.params.id, 10));
      if (!user)
         return res.status(404).send('The user with the given ID was not found.');

    const schema = Joi.object({
         name: Joi.string().min(3).required(), 
    });

    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error.detatils[0].message);
        return;
    }

    user.name = req.body.name;
    res.send(user);

    app.use(express.json());
    const dsUsers = {
      id: dsUsers.length + 1,
    };
    dsUsers.push(user);
    res.send(user);  
  });
  
const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log('listening on http://localhost:${port} ... ')
);