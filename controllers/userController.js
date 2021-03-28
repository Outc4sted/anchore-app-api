const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address,
    notes: req.body.notes,
  };

  // Validate request
  if (Object.entries(user).some(([ key, value ]) => (!value && key !== 'notes')))
    return res.status(400).send({
      message: 'Form not completely filled out!'
    });

  // Save User in the database
  User.create(user)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
      message: err.message || 'Some error occurred while creating the User.'
    }));
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
      message: err.message || 'Some error occurred while retrieving users.'
    }));
};

// Update a User by the id in the request
exports.update = ({ body, params: { userId } }, res) => {
  if (!userId)
    return res.status(400).send({
      message: "A userId must be sent."
    });

  User.update(body, {
    where: { id: userId }
  })
  .then(num =>
    res.send({
      message: num === 1
        ? 'User was updated successfully.'
        : `Cannot update User with id=${userId}. Maybe User was not found or req.body is empty!`
    })
  )
  .catch(err =>
    res.status(500).send({
      message: `Error updating User with id=${userId}`
    })
  );
};

// Delete a User with the specified id in the request
exports.delete = ({params: { userId }}, res) => {
  if (!userId)
    return res.status(400).send({
      message: 'A userId must be sent.'
    });

  User.destroy({
    where: { id: userId }
  })
  .then(num =>
    res.send({
      message: num === 1
        ? 'User was deleted successfully!'
        : `Cannot delete User with id=${userId}. Maybe User was not found!`
    })
  )
  .catch(err =>
    res.status(500).send({
      message: `Could not delete User with id=${userId}`
    })
  );
};