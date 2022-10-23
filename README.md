# Plugin modal react

This is a modal converted from jquery to react.

It is publish to [NPM](<[NPM](https://www.npmjs.com/package/hrnet-react-plugin)>).

This project was initialized using Create React App.

To install it you need node (v16.13.1) and npm (8.4.1) and use the command

`npm install`

To run the project use the command

`npm run start`

There is an example of the Modal component in App.js.

To edit this projects, do your changes, commit them and don't forget to publish the plugin :

```
npm login
npm run publish:npm
npm publish
```

To use it in your project you need to install it first from npm :

`npm install hrnet-react-plugin`

Then you have to import it :

`import Modal from "hrnet-react-plugin";`

And use the code bellow :

```
<Modal
  show={showModal}
  closeCallback={showCallback}
  style={{ backgroundColor: "green" }}
  >
    Content oh the modal
    <strong>content</strong>
</Modal>
```

The `show` props is a boolean, if true the modal is show, if false the modal is hidden.

The `closeCallback` props is a callback function that must be call to close the modal by changing the `show` props. You can additionnaly add specific behavior in this function. It is call when customer click on the cross.

The `style` props may contain additionnal style to customize the modal.

The children props can contain text or html that will be render into the modal.
