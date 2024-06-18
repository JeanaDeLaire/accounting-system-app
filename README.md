# Accounting System Web UI

This project offers a Simple Accounting System Frontend powered by React with Typescript. 

<img width="1064" alt="Screenshot 2024-06-18 at 3 17 21 PM" src="https://github.com/JeanaDeLaire/accounting-system-app/assets/41646757/a0554a67-247b-472e-b5d7-afad1ef51301">

## Installation

1. Clone this project to your machine and navigate to the project directory:

```
git clone hhttps://github.com/JeanaDeLaire/accounting-system-app.git
```

2. Install dependencies:

```
npm install
```

## Running the Application

This project was bootsrapped with Vite and includes a powerful and modern JS dev server. 

```
npm run dev
```

Visit: [Vitejs Docs](https://vitejs.dev/guide/) for more info. 

## Testing

Unit tests are included for each main component verifying data rendering and user action events. Run the test suite with: 

```
npm test
```

## Troubleshooting

### Dependency Install issues

Ensure node is properly installed on your machine by version checking.

```
node -v
npm -v
```

### Undefined Environment Variables

Double check your .env file exists. If not, add one directly.

- Add .env file to the root of your project
- Add in the following variable to set the base URL for your API requests. Note: the specified port should match your local node server instance. 

```
VITE_API_URL=http://localhost:3001/api
```
