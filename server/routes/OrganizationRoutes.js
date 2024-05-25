const express = require('express');
const router = express.Router();
const OrganizationController = require('../controllers/OrganizationControllers');

router.get('/', (req, res) => OrganizationController.getAllItems(req, res));
router.get('/:id', (req, res) => OrganizationController.getSingleItem(req.params.id, res));
router.post('/', (req, res) => OrganizationController.createNewItem(req.body, res));
router.put('/:id', (req, res) => OrganizationController.updateExistingItem(req.params.id, req.body, res));
router.delete('/:id', (req, res) => OrganizationController.deleteSingleItem(req.params.id, res));
router.delete('/', (req, res) => OrganizationController.deleteAllItems(req, res));


module.exports = router;