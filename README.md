
# adman-modal

Adman-modal is a npm package that provides a simple and customizable modal component for your React applications. This package allows you to easily display a modal with a clean and user-friendly design, making it suitable for various use cases, such as displaying success messages, alerts, or any other type of informative content.


This modal was created in particular for project 14 of openclassrooms (hr-net).


## Demo


You can see what this modal looks like here: https://hr-net-adman.netlify.app/


## Installation

You can install adman-modal using npm:

```bash
  npm install adman-modal
```

Then too use the adman-modal component in your React application, follow these steps:

Import the Modal component:

```bash
  import { Modal } from 'adman-modal';
```

Import the Modal component in your app, for exemple :

```bash
  <Modal title="Employee created" text="Nice ! Your employee has been successfully created 👌" closeModal={closeModal} />
```

## Props

You can add props into the adman-modal component :

- title("string")
- text("string")
- closeModal(function)