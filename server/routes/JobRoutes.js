const express = require('express');
const router = express.Router();
const JobController = require('../controllers/JobControllers');

router.get('/', (req, res) => JobController.getAllItems(req, res));
router.get('/:id', (req, res) => JobController.getSingleItem(req.params.id, res));
router.post('/', (req, res) => JobController.createNewItem(req.body, res));
router.put('/:id', (req, res) => JobController.updateExistingItem(req.params.id, req.body, res));
router.delete('/:id', (req, res) => JobController.deleteSingleItem(req.params.id, res));
router.delete('/', (req, res) => JobController.deleteAllItems(req, res));


module.exports = router;