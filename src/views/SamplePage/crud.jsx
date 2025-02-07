import React, { useState, useEffect } from 'react';
import CRUDTable, { Fields, Field, CreateForm, UpdateForm, DeleteForm } from 'react-crud-table';
import axios from 'axios';
import './crud.css';

const API_URL = 'http://localhost:5000/tasks';

const Crud = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const service = {
    fetchItems: async () => {
      return tasks;
    },

    create: async (task) => {
      try {
        const response = await axios.post(API_URL, task, {
          headers: { 'Content-Type': 'application/json' }
        });

        setTasks((prevTasks) => [...prevTasks, response.data]);
        return response.data;
      } catch (error) {
        console.error('Error creating task:', error);
      }
    },

    update: async (data) => {
      try {
        await axios.put(`${API_URL}/${data.id}`, data, {
          headers: { 'Content-Type': 'application/json' }
        });

        setTasks((prevTasks) => prevTasks.map((task) => (task.id === data.id ? data : task)));
        return data;
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },

    delete: async (data) => {
      try {
        await axios.delete(`${API_URL}/${data.id}`);

        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== data.id));
        return data;
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  return (
    <div style={{ margin: 'auto', width: 'fit-content' }}>
      <CRUDTable caption="Students" fetchItems={() => service.fetchItems()}>
        <Fields>
          <Field name="id" label="ID" />
          <Field name="name" label="Name" placeholder="Enter Name" />
          <Field name="email" label="Email" placeholder="Enter Email" />
          <Field name="password" label="Password" placeholder="Enter Password" type="password" />
          <Field name="age" label="Age" placeholder="Enter Age" type="number" />
          <Field name="address" label="Address" placeholder="Enter Address" />
        </Fields>

        <CreateForm
          title="Add New User"
          message="Create a new user!"
          trigger="Create User"
          onSubmit={(task) => service.create(task)}
          submitText="Create"
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = 'Name is required!';
            if (!values.email) errors.email = 'Email is required!';
            if (!values.password) errors.password = 'Password is required!';
            if (!values.age) errors.age = 'Age is required!';
            if (!values.address) errors.address = 'Address is required!';
            return errors;
          }}
        />

        <UpdateForm
          title="Update User"
          message="Update user details"
          trigger="Update"
          onSubmit={(task) => service.update(task)}
          submitText="Update"
          validate={(values) => {
            const errors = {};
            if (!values.id) errors.id = 'ID is required!';
            if (!values.name) errors.name = 'Name is required!';
            if (!values.email) errors.email = 'Email is required!';
            if (!values.password) errors.password = 'Password is required!';
            if (!values.age) errors.age = 'Age is required!';
            if (!values.address) errors.address = 'Address is required!';
            return errors;
          }}
        />

        <DeleteForm
          title="Delete User"
          message="Are you sure you want to delete this user?"
          trigger="Delete"
          onSubmit={(task) => service.delete(task)}
          submitText="Delete"
          validate={(values) => {
            const errors = {};
            if (!values.id) errors.id = 'ID is required!';
            return errors;
          }}
        />
      </CRUDTable>
    </div>
  );
};

export default Crud;

