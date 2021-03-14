import {
  startOfDay, endOfDay,
  startOfWeek, endOfWeek,
  startOfMonth, endOfMonth,
  startOfYear, endOfYear,
} from 'date-fns';
import TaskModel from '../Model/TaskModel';

const current = new Date();

class TaskController {

  async store(req, res) {
    await TaskModel.create(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async update(req, res) {
    await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async index(req, res) {
    await TaskModel.find()
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async all(req, res) {
    await TaskModel.find({ macaddress: { $in: req.params.macaddress } })
      .sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async show(req, res) {
    await TaskModel.findById(req.params.id)
      .then((response) => {
        if (response) return res.status(200).json(response);
        return res.status(404).json({ error: 'tarefa não encontrada' });
      })
      .catch((error) => res.status(500).json(error));
  }

  async delete(req, res) {
    await TaskModel.findByIdAndRemove(req.params.id)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async done(req, res) {
    await TaskModel.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true },
    )
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async late(req, res) {
    await TaskModel.find({
      when: { $lt: current },
      macaddress: { $in: req.params.macaddress },
    })
      .sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async today(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfDay(current), $lte: endOfDay(current) },
      
    })
      .sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
      
  }

  async week(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfWeek(current), $lte: endOfWeek(current) },
    })
      .sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async month(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfMonth(current), $lte: endOfMonth(current) },
    })
      .sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async year(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfYear(current), $lte: endOfYear(current) },
    })
      .sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

}

export default new TaskController();
