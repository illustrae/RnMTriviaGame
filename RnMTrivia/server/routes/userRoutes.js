const UserController = require('../controllers/userController')

module.exports = app => {
    app.get('/api/users', UserController.getAllUsers)
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.loginUser)
    app.post('/api/logout', UserController.logout)
    app.patch('/api/users/:id', UserController.editUser)
}