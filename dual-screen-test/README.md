# DualScreenTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `npx ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Dual-screen staff / customer setup (web)

1. Run the development server:

   `npx ng serve`

2. In your browser, navigate to:

   `http://localhost:4200/staff`

3. On the staff screen, click **\"Open Customer Display\"**.

- On supported browsers with the Multi-Screen Window Placement API, the app will try to place the customer window on a secondary monitor.
- If the API is not available or permission is denied, the app falls back to a normal popup window and shows a status message telling you that you may need to move it manually.
- If the popup is blocked, the status message will instruct you to allow popups for `localhost`.

The customer display is available at:

`http://localhost:4200/customer`

## Legacy dual-screen launcher scripts

1. Run:

   `npx ng serve`

2. Double click:

   `start-dual-edge.bat`

This will open:

- Monitor 1 (left) at resolution 1536x864 showing the staff screen at `http://localhost:4200/staff`
- Monitor 2 (right) at resolution 1920x1080 showing the customer screen at `http://localhost:4200/customer`

If your monitor resolutions or arrangement change, update the `--window-size` and `--window-position` values in the `.bat` files accordingly.

