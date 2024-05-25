const mongoose  = require('mongoose')

class BaseController {
    constructor(Model) {
        this.Model = Model;
    }

    handleErrors(res, error, customMessage) {
        const message = customMessage || error.message;
        res.status(500).json({ error: message, traceback: error.traceback });
    }

    async validate(email, res) {
        try {
            const item = await this.Model.findOne({ email: email });
            if (!item) {
                res.status(404).json({ error: "Email not found in the database" });
                return false;
            }
            return true;
        } catch (error) {
            this.handleErrors(res, error);
            return false;
        }
    }

    async getAllItems(req, res) {
        try {
            const items = await this.Model.find();
            res.status(200).json({ items });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async getSingleItem(id, res) {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({msg: "Invalid ID"});
        }
        try {
            const item = await this.Model.findById(id);
            if (!item) {
                res.status(404).json({ msg: "Item not found" });
                return;
            }
            res.status(200).json({ item });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async createNewItem(data, res) {
        try {
            const item = await this.Model.create(data);
            res.status(200).json({ item });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateExistingItem(id, data, res) {
        try {
            const updatedItem = await this.Model.findByIdAndUpdate(id, data, { new: true });
            res.status(200).json({ item: updatedItem });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async deleteSingleItem(id, res) {
        try {
            const deletedItem = await this.Model.findByIdAndDelete(id);
            if (!deletedItem) {
                res.status(404).json({ msg: "Item not found" });
                return;
            }
            res.status(200).json({ msg: "Item deleted successfully" });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async deleteAllItems(req, res) {
        try {
            await this.Model.deleteMany({});
            res.status(200).json({ msg: "All items deleted successfully" });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }
}

module.exports = BaseController;
