import Inventory from '../models/inventory.js';
import { createInventory, updateInventory, getInventory } from '../models/inventory.js';

function newInventory(req, res) {
    createInventory(req.body).then((inventory) => {
        if (inventory.error) {
            res.send({ error: inventory.error });
        } else {
            res.send(inventory);
        }
    });
}
function updateInventoryData(req, res) {
    updateInventory(req.params.inventoryId, req.body).then((inventory) => {
        if (inventory.error) {
            res.send({ error: inventory.error });
        } else {
            res.send(inventory);
        }
    });
}
function getInventoryData(req, res) {
    getInventory(req.params.inventoryId).then((inventory) => {
        if (inventory.error) {
            res.send({ error: inventory.error });
        } else {
            res.send(inventory);
        }
    });
}
export { newInventory, updateInventoryData, getInventoryData };
