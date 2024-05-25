const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers');

router.get('/', (req, res) => UserController.getAllItems(req, res));
router.get('/:id', (req, res) => UserController.getSingleItem(req.params.id, res));
router.post('/', (req, res) => UserController.createNewItem(req.body, res));
router.put('/:id', (req, res) => UserController.updateExistingItem(req.params.id, req.body, res));
router.delete('/:id', (req, res) => UserController.deleteSingleItem(req.params.id, res));
router.delete('/', (req, res) => UserController.deleteAllItems(req, res));


module.exports = router;