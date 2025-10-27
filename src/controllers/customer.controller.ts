import { Request, Response, NextFunction } from "express";
import { Customer } from "../models/customer.model";

// create
export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const customer = new Customer(data);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
};

// get all
export const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (err) {
    next(err);
  }
};

// get one
export const getCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const c = await Customer.findById(req.params.id);
    if (!c) return res.status(404).json({ message: "Customer not found" });
    res.json(c);
  } catch (err) {
    next(err);
  }
};

// update
export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const c = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!c) return res.status(404).json({ message: "Customer not found" });
    res.json(c);
  } catch (err) {
    next(err);
  }
};

// delete
export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const c = await Customer.findByIdAndDelete(req.params.id);
    if (!c) return res.status(404).json({ message: "Customer not found" });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    next(err);
  }
};
