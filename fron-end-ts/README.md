

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`






Quản lý vé xe bus
Quản Lý vé xe khách 
Quản lý vé xe du lịch
Quản lý vé xe taxi
Quản lý xe ôm.

## Icon React
npm i react-icons
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

fron-end-ts
├── public
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── components
│   │   ├── Navbar.tsx  # Di chuyển Navbar vào đây
│   │   ├── TicketComponent.tsx
│   │   ├── common       # Nhóm các component dùng chung
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Auth
│   │   │   ├── SignIn.tsx
│   │   │   ├── SignUp.tsx
│   │   ├── TicketManagement
│   │   │   ├── BusTicketManagement.tsx
│   │   │   ├── TaxiTicketManagement.tsx
│   │   │   ├── TourTicketManagement.tsx
│   │   ├── Payment
│   │   │   ├── Payment.tsx
│   ├── styles
│   │   ├── global.css   # Để chứa các quy tắc chung
│   │   ├── payment.css
│   │   ├── home.css
│   ├── routers
│   │   ├── AppRouter.tsx  # Để định nghĩa routes
├── package.json
├── tsconfig.json
└── README.md