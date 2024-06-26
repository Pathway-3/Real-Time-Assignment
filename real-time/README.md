# Real Time Crud App

This project we used Firebase and Firestore. We needed to make a form to take the information add it to the page, update with new info, and be able to delete.

## Firebase

Before I even begin I had to create a new next project and install Firebase to be able to use the functions from Firebase and Firestore.

![alt text](image.png)
Here is my config file that allows me to use the installed firebase. I imported Firestore to use the functions in Firebase for Firestore.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Firestore

Firestore is used to keep the infomation on storage.

![alt text](image.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

What we need to set up firestore

```jsx
import {
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  collection,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";
```

## Conclusion

We needed to make a form to take the information add it to the page, update with new info, and be able to delete.

We used Firebase and Firestore to set up the app info and to set up authorization.

---

## Getting Started

First, run the developmentup server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
