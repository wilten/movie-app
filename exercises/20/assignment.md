Assignment 18: Processing user input with a model driven form
==============================================

> ## Create a new movie detail component with a model driven form to capture and submit user input 

**Links**:
- [model driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/reactive-forms/reactive-forms.html)
- [model driven forms fundamentals](https://toddmotto.com/angular-2-forms-reactive#ngmodule-and-reactive-forms)
- [formcontrol api](https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html)
- [formgroup api](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
- &#185; [formbuilder api](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
- [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)
- *[pipes](https://angular.io/docs/ts/latest/guide/pipes.html)*

**Steps**:
- When using model driven forms, the `ReactiveFormsModule` has to be imported into the movies module from `@angular/forms`
- encapsulate the input fields with a `<form novalidate>` element
- Add a save button with type `submit` to the bottom of the form
- Remove all `ngModel` directives from the template, we don't need 'automagic' template binding in model driven forms
  - You can also savely remove the `FormsModule` import from the movies module now because we don't use it anymore.
- To build a model driven form we need the `FormGroup` en `FormControl` classes, import these in the detail component from `@angular/forms`
- Declare a class property `movieForm` of type `FormGroup` en assign a new `FormGroup` object to it in the`ngOnInit` function
- Supply an object literal to the `FormHroup` as first parameter
  - For every input field on the form, add a property to the object and assign a new `FormControl` object as value to it
  - Supply an 'initial state/value' to each `FormControl`
> Above steps can be simplified by using the angular `FormBuilder` service
- Import the `FormBuilder` from `@angular/forms`, inject it into the constructor and store it as a class property
- &#185; Rewrite the `FormGroup` and `FormControls` using the `FormBuilder` in `ngOnInit` function
> To synchronize the created `FormGroup` and `FormControl`'s to the template we use the `formGroup` and `formControlName` directives
- Add a property binding `[formGroup]` to the `form` element and bind it to the `movieForm` object 
- Add a `formControlName` directive to each input field and use the same name you used in the `ngOnInit` function, for example `formControlName="genre"`
> The `FormGroup` we bind to our root `form` element will store and handle all input and validations of its child controls and groups
- Add an event binding `(ngSubmit)` to the form element and call `onSubmit()`
- Create the function `onSubmit` in the detail component class
  - Map the properties on the `value` property of our `movieForm` to our `movie` model object to simulate a 'save'
  > You could use `Object.assign` if `value` is an actual `Movie`

**Result**:
> We now use a FormGroup and FormControl to capture input changes without directly modifying the model, and we are writing the data to the model on submit.
> Next we want to validate the input changes and show validation messages;